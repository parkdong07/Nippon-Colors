document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const categoryTabs = document.getElementById("category-tabs");
    const colorGrid = document.getElementById("color-grid");
    const searchInput = document.getElementById("search-input");
    const emptyState = document.getElementById("empty-state");


    // View Management
    const viewColorsBtn = document.getElementById("view-colors-btn");
    const viewSchemesBtn = document.getElementById("view-schemes-btn");
    const viewDataVizBtn = document.getElementById("view-dataviz-btn");
    const colorsView = document.getElementById("colors-view");
    const schemesView = document.getElementById("schemes-view");
    const dataVizView = document.getElementById("dataviz-view");
    const dataVizFilter = document.getElementById("dataviz-filter");
    const dataVizGrid = document.getElementById("dataviz-grid");
    const searchInputWrapper = document.getElementById("search-input").parentElement;

    // Random Palette Elements
    const randomPaletteBtn = document.getElementById("random-palette-btn");
    const randomPaletteModal = document.getElementById("random-palette-modal");
    const closeRandomModalBtn = document.getElementById("close-random-modal");
    const btnRandomAnalogous = document.getElementById("btn-random-analogous");
    const btnRandomChaos = document.getElementById("btn-random-chaos");
    const randomPaletteStrip = document.getElementById("random-palette-strip");
    const randomPaletteBackdrop = document.getElementById("random-palette-backdrop");

    // Detail Modal Elements
    const detailModal = document.getElementById("detail-modal");
    const detailBackdrop = document.getElementById("detail-backdrop");
    const detailCard = document.getElementById("detail-card");
    const detailClose = document.getElementById("close-detail");
    const detailColorBg = document.getElementById("detail-color-bg");
    const detailKanji = document.getElementById("detail-kanji");
    const detailRomaji = document.getElementById("detail-romaji");
    const detailHex = document.getElementById("detail-hex");
    const detailRgb = document.getElementById("detail-rgb");
    const detailHsl = document.getElementById("detail-hsl");
    const detailCopyBit = document.getElementById("detail-copy");
    const detailFavBtn = document.getElementById("detail-fav");
    const ratioWhite = document.getElementById("ratio-white");
    const ratioBlack = document.getElementById("ratio-black");
    const passWhite = document.getElementById("pass-white");
    const passBlack = document.getElementById("pass-black");
    const contrastWhite = document.getElementById("contrast-white");
    const contrastBlack = document.getElementById("contrast-black");

    // Harmony Elements
    const harmonyComp = document.getElementById("harmony-complementary");
    const harmonyAna1 = document.getElementById("harmony-analogous-1");
    const harmonyAna2 = document.getElementById("harmony-analogous-2");
    const harmonyTri1 = document.getElementById("harmony-triadic-1");
    const harmonyTri2 = document.getElementById("harmony-triadic-2");

    let selectedCategory = "All";
    let selectedDataVizType = "All";
    let searchQuery = "";

    // 🔧 Bug fix: Removed 'Favorites' from here — it's rendered separately at the end of renderCategories()
    const CATEGORIES = [
        { name: 'Spring', icon: 'wind', color: 'text-pink-400', bg: 'bg-pink-50', border: 'border-pink-200' },
        { name: 'Summer', icon: 'sun', color: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-200' },
        { name: 'Autumn', icon: 'leaf', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
        { name: 'Winter', icon: 'snowflake', color: 'text-blue-400', bg: 'bg-blue-50', border: 'border-blue-200' },
        { name: 'Nature', icon: 'palette', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
        { name: 'Historical', icon: 'layers', color: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-200' }
    ];

    // Favorites Logic
    let favorites = new Set();
    try {
        const savedFavorites = localStorage.getItem('nipponColorsFavorites');
        if (savedFavorites) {
            const arr = JSON.parse(savedFavorites);
            arr.forEach(hex => favorites.add(hex));
        }
    } catch (e) {
        console.error("Failed to load favorites", e);
    }

    function toggleFavorite(e, hex) {
        e.stopPropagation();
        if (favorites.has(hex)) {
            favorites.delete(hex);
        } else {
            favorites.add(hex);
        }
        try {
            localStorage.setItem('nipponColorsFavorites', JSON.stringify([...favorites]));
        } catch (e) {}
        
        // If we are currently viewing the Favorites tab and un-favorited, we might want to re-render, 
        // but it's less jarring to just update the icon and let them stay until tab switch.
        // Let's just update the specific button's icon.
        const btn = e.currentTarget;
        const icon = btn.querySelector('i');
        if (favorites.has(hex)) {
            icon.classList.add('fill-red-500', 'text-red-500');
            icon.classList.remove('text-stone-400');
        } else {
            icon.classList.remove('fill-red-500', 'text-red-500');
            icon.classList.add('text-stone-400');
        }
    }

    function renderCategories() {
        categoryTabs.innerHTML = "";
        
        // All button
        const allBtn = document.createElement("button");
        allBtn.className = `px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${selectedCategory === 'All' ? 'bg-stone-800 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'}`;
        allBtn.innerHTML = `<span>All Colors</span>`;
        allBtn.onclick = () => {
            selectedCategory = "All";
            renderCategories();
            renderColors();
        };
        categoryTabs.appendChild(allBtn);

        // Category buttons
        CATEGORIES.forEach(cat => {
            const btn = document.createElement("button");
            const isSelected = selectedCategory === cat.name;
            btn.className = `px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${isSelected ? `${cat.bg} ${cat.color} ${cat.border} shadow-sm mix-blend-multiply` : 'bg-white text-stone-600 hover:bg-stone-50 border-stone-200 hover:border-stone-300'}`;
            btn.innerHTML = `<i data-lucide="${cat.icon}" class="w-4 h-4 ${isSelected ? '' : cat.color}"></i> ${cat.name}`;
            btn.onclick = () => {
                selectedCategory = cat.name;
                renderCategories();
                renderColors();
            };
            categoryTabs.appendChild(btn);
        });

        // Favorites button
        const favTab = document.createElement("button");
        const isFavSelected = selectedCategory === "Favorites";
        favTab.className = `px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 border ${isFavSelected ? 'bg-red-50 text-red-600 border-red-200 shadow-sm' : 'bg-white text-stone-600 hover:bg-stone-50 border-stone-200'}`;
        favTab.innerHTML = `<i data-lucide="heart" class="w-4 h-4 ${isFavSelected ? 'fill-red-500' : 'text-red-400'}"></i> Favorites (${favorites.size})`;
        favTab.onclick = () => {
            selectedCategory = "Favorites";
            renderCategories();
            renderColors();
        };
        categoryTabs.appendChild(favTab);

        lucide.createIcons();
    }

    // --- Performance: Pre-computed Thai Mapping (outside filter loop) ---
    const THAI_MAPPINGS = {
        "แดง": ["red", "beni", "aka", "shu", "hi"],
        "ฟ้า": ["blue", "ao", "mizu", "sora", "kon"],
        "น้ำเงิน": ["blue", "ao", "kon"],
        "เขียว": ["green", "midori", "matsu", "yanagi"],
        "เหลือง": ["yellow", "ki", "yamabuki"],
        "ชมพู": ["pink", "sakura", "momo"],
        "ม่วง": ["purple", "murasaki", "fuji"],
        "ส้ม": ["orange", "daidai", "kaki"],
        "ขาว": ["white", "shiro", "yuki"],
        "ดำ": ["black", "kuro", "sumi"],
        "เทา": ["gray", "grey", "nezumi"],
        "น้ำตาล": ["brown", "cha"]
    };

    const BATCH_SIZE = 48; // Cards per batch for lazy rendering
    let currentFilteredColors = [];
    let renderedCount = 0;
    let lazyObserver = null;

    function buildCard(color) {
        const card = document.createElement("div");
        const isFav = favorites.has(color.hex);
        card.className = "group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform";
        card.dataset.hex = color.hex;
        // No animation styles here for instant display
        card.innerHTML = `
            <div class="h-32 w-full" style="background-color: ${color.hex}"></div>
            <div class="p-4 relative">
                <button class="absolute -top-6 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform fav-btn" title="Toggle Favorite" aria-label="Toggle Favorite">
                    <i data-lucide="heart" class="w-5 h-5 transition-colors ${isFav ? 'fill-red-500 text-red-500' : 'text-stone-300'}"></i>
                </button>
                <div class="mt-1 mb-2">
                    <h3 class="font-jp text-lg font-bold text-stone-800 tracking-wider leading-tight">${color.kanji || color.romaji}</h3>
                    <p class="text-xs font-medium text-stone-400 uppercase tracking-widest mt-0.5">${color.romaji}</p>
                </div>
                <div class="flex items-center justify-between mt-3">
                    <span class="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded hex-label">${color.hex}</span>
                    <button class="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity button-copy" title="Copy hex" aria-label="Copy hex code">
                        <i data-lucide="copy" class="w-3.5 h-3.5 text-stone-500"></i>
                    </button>
                </div>
            </div>
        `;
        card.onclick = (e) => { 
            if (e.target.closest('.fav-btn')) return;
            handleCopy(color, card.querySelector('.hex-label'));
        };
        card.querySelector('.fav-btn').onclick = (e) => toggleFavorite(e, color.hex);
        // Copy icon also triggers same handler
        card.querySelector('.button-copy').onclick = (e) => { e.stopPropagation(); handleCopy(color, card.querySelector('.hex-label')); };
        return card;
    }

    function renderBatch() {
        const batch = currentFilteredColors.slice(renderedCount, renderedCount + BATCH_SIZE);
        if (batch.length === 0) return;

        const startIndex = renderedCount; // Capture BEFORE updating

        const fragment = document.createDocumentFragment();
        batch.forEach(color => fragment.appendChild(buildCard(color)));
        colorGrid.appendChild(fragment);

        // Init icons only for the newly added cards
        const newCards = Array.from(colorGrid.children).slice(startIndex);
        lucide.createIcons({ nodes: newCards });

        // All rendered - skip animation delays
        newCards.forEach(card => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "none";
        });

        renderedCount += batch.length;

        // Add/update sentinel for infinite scroll
        setupSentinel();
    }

    function setupSentinel() {
        // Remove old sentinel
        const old = colorGrid.parentElement.querySelector('.scroll-sentinel');
        if (old) old.remove();

        if (renderedCount >= currentFilteredColors.length) return; // All rendered

        const sentinel = document.createElement('div');
        sentinel.className = 'scroll-sentinel col-span-full h-4';
        colorGrid.parentElement.appendChild(sentinel);

        if (lazyObserver) lazyObserver.disconnect();
        lazyObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                lazyObserver.disconnect();
                renderBatch();
            }
        }, { rootMargin: '200px' });
        lazyObserver.observe(sentinel);
    }

    function renderColors() {
        colorGrid.innerHTML = "";
        // Clear old sentinel
        const old = colorGrid.parentElement.querySelector('.scroll-sentinel');
        if (old) old.remove();
        if (lazyObserver) { lazyObserver.disconnect(); lazyObserver = null; }

        const query = searchQuery.toLowerCase().trim();

        currentFilteredColors = COLORS.filter(color => {
            const name = (color.name || "").toLowerCase();
            const romaji = (color.romaji || "").toLowerCase();
            const hex = (color.hex || "").toLowerCase();
            const kanji = color.kanji || "";
            const category = (color.category || "").toLowerCase();

            let matchesSearch = !query ||
                name.includes(query) || romaji.includes(query) ||
                hex.includes(query) || kanji.includes(query) || category.includes(query);

            if (!matchesSearch && query) {
                for (const [thai, keywords] of Object.entries(THAI_MAPPINGS)) {
                    if (query.includes(thai) && keywords.some(k => name.includes(k) || romaji.includes(k))) {
                        matchesSearch = true;
                        break;
                    }
                }
            }

            if (selectedCategory === "Favorites") return matchesSearch && favorites.has(color.hex);
            if (selectedCategory !== "All") return matchesSearch && color.category === selectedCategory;
            return matchesSearch;
        });

        renderedCount = 0;

        if (currentFilteredColors.length === 0) {
            emptyState.classList.remove('hidden');
            colorGrid.classList.add('hidden');
        } else {
            emptyState.classList.add('hidden');
            colorGrid.classList.remove('hidden');
            renderBatch(); // Render first batch only
        }
    }

    let copyTimeout;
    let hideTimeout;

    async function handleCopy(color, labelElement = null) {
        try {
            await navigator.clipboard.writeText(color.hex);
            
            // Visual feedback on the label if provided
            if (labelElement) {
                const originalText = labelElement.innerText;
                const originalBg = labelElement.className;
                labelElement.innerText = "COPIED!";
                labelElement.className = "text-[10px] font-mono text-white bg-emerald-500 px-2 py-1 rounded";
                
                setTimeout(() => {
                    labelElement.innerText = originalText;
                    labelElement.className = originalBg;
                }, 1000);
            }
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    }

    function renderSchemes() {
        schemesView.innerHTML = "";
        
        // Add global contrast toggle
        const globalControls = document.createElement("div");
        globalControls.className = "flex justify-end mb-4";
        globalControls.innerHTML = `
            <button id="toggleContrastBtn" class="flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm">
                <i data-lucide="moon" class="w-4 h-4"></i>
                Toggle Dark Context
            </button>
        `;
        schemesView.appendChild(globalControls);

        let isDarkContext = false;
        const schemeSections = [];

        globalControls.querySelector('#toggleContrastBtn').onclick = (e) => {
            isDarkContext = !isDarkContext;
            const btn = e.currentTarget;
            if (isDarkContext) {
                btn.innerHTML = `<i data-lucide="sun" class="w-4 h-4"></i> Toggle Light Context`;
            } else {
                btn.innerHTML = `<i data-lucide="moon" class="w-4 h-4"></i> Toggle Dark Context`;
            }
            lucide.createIcons();
            
            schemeSections.forEach(section => {
                if (isDarkContext) {
                    section.classList.replace("bg-white", "bg-stone-900");
                    section.classList.replace("border-stone-100", "border-stone-800");
                    section.querySelectorAll('.heading-title').forEach(el => el.classList.replace("text-stone-900", "text-white"));
                    section.querySelectorAll('.heading-sub').forEach(el => el.classList.replace("text-stone-500", "text-stone-400"));
                    section.querySelectorAll('.heading-desc').forEach(el => el.classList.replace("text-stone-600", "text-stone-400"));
                    section.querySelectorAll('.card-item').forEach(el => el.classList.replace("bg-stone-50", "bg-stone-800"));
                    section.querySelectorAll('.card-item').forEach(el => el.classList.replace("border-stone-100", "border-stone-700"));
                    section.querySelectorAll('.card-title').forEach(el => el.classList.replace("text-stone-800", "text-white"));
                    section.querySelectorAll('.card-hex').forEach(el => el.classList.replace("bg-white", "bg-stone-900"));
                    section.querySelectorAll('.card-hex').forEach(el => el.classList.replace("border-stone-200", "border-stone-700"));
                    section.querySelectorAll('.card-hex').forEach(el => el.classList.replace("text-stone-600", "text-stone-300"));
                } else {
                    section.classList.replace("bg-stone-900", "bg-white");
                    section.classList.replace("border-stone-800", "border-stone-100");
                    section.querySelectorAll('.heading-title').forEach(el => el.classList.replace("text-white", "text-stone-900"));
                    section.querySelectorAll('.heading-sub').forEach(el => el.classList.replace("text-stone-400", "text-stone-500"));
                    section.querySelectorAll('.heading-desc').forEach(el => el.classList.replace("text-stone-400", "text-stone-600"));
                    section.querySelectorAll('.card-item').forEach(el => el.classList.replace("bg-stone-800", "bg-stone-50"));
                    section.querySelectorAll('.card-item').forEach(el => el.classList.replace("border-stone-700", "border-stone-100"));
                    section.querySelectorAll('.card-title').forEach(el => el.classList.replace("text-white", "text-stone-800"));
                    section.querySelectorAll('.card-hex').forEach(el => el.classList.replace("bg-stone-900", "bg-white"));
                    section.querySelectorAll('.card-hex').forEach(el => el.classList.replace("border-stone-700", "border-stone-200"));
                    section.querySelectorAll('.card-hex').forEach(el => el.classList.replace("text-stone-300", "text-stone-600"));
                }
            });
        };

        SCHEMES.forEach(scheme => {
            const section = document.createElement("section");
            section.className = "bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-100 transition-colors duration-500";
            schemeSections.push(section);
            
            const header = document.createElement("div");
            header.className = "mb-8 max-w-3xl";
            header.innerHTML = `
                <div class="inline-flex items-center px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium tracking-widest uppercase mb-4">Scheme ${scheme.id}</div>
                <h2 class="heading-title text-3xl font-bold text-stone-900 mb-2 transition-colors duration-500">${scheme.title}</h2>
                <h3 class="heading-sub text-xl text-stone-500 font-serif italic mb-6 transition-colors duration-500">${scheme.subtitle}</h3>
                <p class="heading-desc text-stone-600 leading-relaxed transition-colors duration-500">${scheme.description}</p>
            `;
            section.appendChild(header);

            const grid = document.createElement("div");
            grid.className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4";
            
            scheme.colors.forEach(color => {
                const card = document.createElement("div");
                card.className = "card-item group cursor-pointer bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-stone-100";
                card.innerHTML = `
                    <div class="h-24 w-full transition-transform duration-500 group-hover:scale-105" style="background-color: ${color.hex}"></div>
                    <div class="p-4 relative">
                        <button class="absolute -top-5 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-stone-400 hover:scale-110 transition-transform fav-btn" title="Toggle Favorite">
                            <i data-lucide="heart" class="w-4 h-4 transition-colors ${favorites.has(color.hex) ? 'fill-red-500 text-red-500' : ''}"></i>
                        </button>
                        <h4 class="card-title font-jp text-base font-bold text-stone-800 tracking-wider transition-colors duration-500">${color.kanji}</h4>
                        <p class="text-xs text-stone-500 uppercase tracking-widest mt-1">${color.romaji}</p>
                        <span class="card-hex inline-block mt-3 text-xs font-mono text-stone-600 bg-white border border-stone-200 px-2 py-1 rounded transition-colors duration-500">${color.hex}</span>
                    </div>
                `;
                
                card.onclick = (e) => {
                    if (e.target.closest('.fav-btn')) return;
                    handleCopy(color, card.querySelector('.card-hex'));
                };

                // Fav
                const favBtn = card.querySelector('.fav-btn');
                favBtn.onclick = (e) => {
                    toggleFavorite(e, color.hex);
                };
                
                grid.appendChild(card);
            });
            
            section.appendChild(grid);
            schemesView.appendChild(section);
        });
    }

    function renderDataViz() {
        dataVizGrid.innerHTML = "";
        
        const filteredDataViz = DATA_VIZ_SCHEMES.filter(scheme => 
            selectedDataVizType === 'All' || scheme.type === selectedDataVizType
        );

        filteredDataViz.forEach(scheme => {
            const card = document.createElement("div");
            card.className = "bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all group";
            
            const badgeClass = scheme.type === 'Sequential' ? 'border-blue-200 text-blue-600 bg-blue-50' :
                             scheme.type === 'Diverging' ? 'border-orange-200 text-orange-600 bg-orange-50' :
                             'border-purple-200 text-purple-600 bg-purple-50';

            // Calculate heights for bar chart preview
            const barHtml = scheme.colors.map((c, i) => {
                const h = 20 + (i + 1) * (80 / scheme.colors.length);
                return `<div class="flex-1 rounded-t-lg transition-all group-hover:opacity-80 cursor-help" 
                             style="background-color: ${c.hex}; height: ${h}%" 
                             title="${c.name}: ${c.hex}"></div>`;
            }).join("");

            // Colors copy strip
            const stripHtml = scheme.colors.map((c) => {
                return `<button class="flex-1 group/btn relative h-12 rounded-lg shadow-sm border border-black/5 transition-transform hover:-translate-y-1" 
                                style="background-color: ${c.hex}" 
                                title="Copy ${c.hex}" 
                                data-hex="${c.hex}" data-name="${c.kanji} ${c.romaji}">
                            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-opacity bg-black/10 rounded-lg pointer-events-none">
                                <i data-lucide="copy" class="w-4 h-4 text-white drop-shadow-md"></i>
                            </div>
                        </button>`;
            }).join("");

            card.innerHTML = `
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <span class="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border ${badgeClass}">
                            ${scheme.type}
                        </span>
                        <h3 class="font-serif text-2xl font-bold mt-2 text-stone-800">${scheme.title}</h3>
                    </div>
                </div>
                <p class="text-sm opacity-60 mb-8 leading-relaxed text-stone-600">${scheme.description}</p>
                
                <div class="space-y-6">
                    <div>
                        <p class="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-3">Bar Chart Preview</p>
                        <div class="flex items-end gap-2 h-24 px-4 bg-stone-50 rounded-xl">
                            ${barHtml}
                        </div>
                    </div>
                    <div>
                        <p class="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-3">Click to Copy HEX</p>
                        <div class="flex gap-2 color-strip">
                            ${stripHtml}
                        </div>
                    </div>
                </div>
            `;

            // Attach detail handlers to strip buttons
            const buttons = card.querySelectorAll('.color-strip button');
            buttons.forEach(btn => {
                btn.onclick = () => {
                    const fakeColor = {
                        hex: btn.dataset.hex,
                        kanji: btn.dataset.name.split(' ')[0],
                        romaji: btn.dataset.name.split(' ')[1] || ''
                    };
                    handleCopy(fakeColor);
                };
            });

            dataVizGrid.appendChild(card);
        });
        lucide.createIcons();
    }

    // Update filter buttons
    function updateDataVizFilters() {
        const buttons = dataVizFilter.querySelectorAll('button');
        buttons.forEach(btn => {
            if (btn.dataset.type === selectedDataVizType) {
                btn.className = "px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all border bg-stone-800 text-white border-stone-800";
            } else {
                btn.className = "px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all border bg-white text-stone-600 border-stone-200 hover:border-stone-400";
            }
        });
    }

    dataVizFilter.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            selectedDataVizType = e.target.dataset.type;
            updateDataVizFilters();
            renderDataViz();
        }
    });

    function switchView(view) {
        viewColorsBtn.classList.replace("border-stone-900", "border-transparent");
        viewColorsBtn.classList.replace("text-stone-900", "text-stone-500");
        viewSchemesBtn.classList.replace("border-stone-900", "border-transparent");
        viewSchemesBtn.classList.replace("text-stone-900", "text-stone-500");
        viewDataVizBtn.classList.replace("border-stone-900", "border-transparent");
        viewDataVizBtn.classList.replace("text-stone-900", "text-stone-500");

        colorsView.classList.add("hidden");
        schemesView.classList.add("hidden");
        dataVizView.classList.add("hidden");
        searchInputWrapper.classList.add("hidden");

        if (view === 'colors') {
            viewColorsBtn.classList.replace("border-transparent", "border-stone-900");
            viewColorsBtn.classList.replace("text-stone-500", "text-stone-900");
            colorsView.classList.remove("hidden");
            searchInputWrapper.classList.remove("hidden");
        } else if (view === 'schemes') {
            viewSchemesBtn.classList.replace("border-transparent", "border-stone-900");
            viewSchemesBtn.classList.replace("text-stone-500", "text-stone-900");
            schemesView.classList.remove("hidden");
        } else if (view === 'dataviz') {
            viewDataVizBtn.classList.replace("border-transparent", "border-stone-900");
            viewDataVizBtn.classList.replace("text-stone-500", "text-stone-900");
            dataVizView.classList.remove("hidden");
        }
    }

    viewColorsBtn.addEventListener("click", () => switchView('colors'));
    viewSchemesBtn.addEventListener("click", () => switchView('schemes'));
    viewDataVizBtn.addEventListener("click", () => switchView('dataviz'));

    // Random Palette Logic
    function openRandomModal() {
        randomPaletteModal.classList.remove("pointer-events-none");
        randomPaletteModal.classList.remove("opacity-0");
        randomPaletteModal.classList.add("opacity-100");
        
        const content = document.getElementById("random-palette-content");
        content.classList.remove("translate-y-8", "scale-95");
        content.classList.add("translate-y-0", "scale-100");
    }

    function closeRandomModal() {
        randomPaletteModal.classList.add("opacity-0");
        randomPaletteModal.classList.add("pointer-events-none");
        randomPaletteModal.classList.remove("opacity-100");
        
        const content = document.getElementById("random-palette-content");
        content.classList.add("translate-y-8", "scale-95");
        content.classList.remove("translate-y-0", "scale-100");
    }

    randomPaletteBtn.addEventListener("click", openRandomModal);
    closeRandomModalBtn.addEventListener("click", closeRandomModal);
    randomPaletteBackdrop.addEventListener("click", closeRandomModal);

    function renderRandomStrip(colors) {
        randomPaletteStrip.innerHTML = colors.map((c, i) => {
            const isFav = favorites.has(c.hex);
            return `
                <div class="flex-1 group relative flex flex-col justify-end transition-all duration-300 cursor-pointer overflow-hidden color-strip-item" 
                     style="background-color: ${c.hex}" data-hex="${c.hex}">
                    <button class="absolute inset-0 w-full h-full text-transparent flex items-center justify-center hover:bg-black/10 transition-colors copy-btn"
                            data-hex="${c.hex}" data-name="${c.kanji} ${c.romaji}">
                        <i data-lucide="copy" class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 drop-shadow-lg"></i>
                    </button>
                    
                    <button class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110 fav-btn-random" data-hex="${c.hex}">
                        <i data-lucide="heart" class="w-5 h-5 ${isFav ? 'fill-red-500 text-red-500' : ''}"></i>
                    </button>

                    <div class="p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h4 class="font-jp font-bold text-white text-xl tracking-wider drop-shadow-md">${c.kanji}</h4>
                        <p class="text-xs text-white/80 uppercase tracking-widest mt-1">${c.romaji}</p>
                        <div class="flex items-center gap-2 mt-3 p-1 px-2 bg-white/10 backdrop-blur-md rounded border border-white/10 w-fit">
                            <span class="text-[10px] font-mono text-white/90 uppercase">${c.hex}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
        
        lucide.createIcons();

        // Attach copy & fav handlers
        const items = randomPaletteStrip.querySelectorAll('.color-strip-item');
        items.forEach(item => {
            const hex = item.dataset.hex;
            const colorObj = colors.find(col => col.hex === hex);
            const copyBtn = item.querySelector('.copy-btn');
            const favBtn = item.querySelector('.fav-btn-random');

            // Open detail modal when clicking the strip item (not buttons)
            item.onclick = (e) => {
                if (e.target.closest('button')) return;
                openColorDetail(colorObj);
            };

            copyBtn.onclick = (e) => {
                e.stopPropagation();
                handleCopy(colorObj, item.querySelector('.font-mono'));
            };

            favBtn.onclick = (e) => {
                e.stopPropagation();
                toggleFavorite(e, hex);
                // Refresh icon state
                const icon = favBtn.querySelector('svg'); // Lucide replaces i with svg
                if (favorites.has(hex)) {
                    icon.classList.add('fill-red-500', 'text-red-500');
                } else {
                    icon.classList.remove('fill-red-500', 'text-red-500');
                }
            };
        });
    }

    btnRandomChaos.addEventListener("click", () => {
        // Spin the dice icon
        const icon = btnRandomChaos.querySelector('svg') || btnRandomChaos.querySelector('i');
        icon.classList.add('animate-spin');
        setTimeout(() => icon.classList.remove('animate-spin'), 600);

        // Pick 5 random unique colors
        const shuffled = [...COLORS].sort(() => 0.5 - Math.random());
        renderRandomStrip(shuffled.slice(0, 5));
    });

    btnRandomAnalogous.addEventListener("click", () => {
        // Spin the icon
        const icon = btnRandomAnalogous.querySelector('svg') || btnRandomAnalogous.querySelector('i');
        icon.classList.add('animate-bounce');
        setTimeout(() => icon.classList.remove('animate-bounce'), 600);

        // Since COLORS array is conceptually sorted by spectrum, we can pick a random slice of 5 adjacent colors
        const startIdx = Math.floor(Math.random() * (COLORS.length - 5));
        const slice = COLORS.slice(startIdx, startIdx + 5);
        renderRandomStrip(slice);
    });

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderColors();
    });

    // --- Color Utilities & Harmonies ---

    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }

    function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) { h = s = 0; }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    }

    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
    }

    function getLuminance({ r, g, b }) {
        const a = [r, g, b].map(v => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    function getContrast(l1, l2) {
        return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    }

    function findClosestColor(targetHex) {
        const target = hexToRgb(targetHex);
        let closest = COLORS[0];
        let minDist = Infinity;

        COLORS.forEach(c => {
            const rgb = hexToRgb(c.hex);
            const dist = Math.sqrt(
                Math.pow(target.r - rgb.r, 2) +
                Math.pow(target.g - rgb.g, 2) +
                Math.pow(target.b - rgb.b, 2)
            );
            if (dist < minDist) {
                minDist = dist;
                closest = c;
            }
        });
        return closest;
    }

    function setupHarmony(element, targetHex) {
        const color = findClosestColor(targetHex);
        const colorDot = element.querySelector('div');
        const nameEl = element.querySelector('.font-jp');
        const hexEl = element.querySelector('.font-mono');

        colorDot.style.backgroundColor = color.hex;
        nameEl.textContent = color.kanji;
        hexEl.textContent = color.hex;

        element.onclick = () => showColorDetail(color);
    }

    function showColorDetail(color) {
        detailModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Reset animations
        [detailBackdrop, detailCard, contrastWhite, contrastBlack].forEach(el => {
            el.classList.remove('opacity-100', 'scale-100', 'translate-x-0');
            void el.offsetWidth; // trigger reflow
        });

        // Set content
        detailColorBg.style.backgroundColor = color.hex;
        detailKanji.textContent = color.kanji;
        detailRomaji.textContent = color.romaji;
        detailHex.textContent = color.hex;
        
        const rgb = hexToRgb(color.hex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        detailRgb.textContent = `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        detailHsl.textContent = `HSL(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

        // Contrast Check
        const colorLum = getLuminance(rgb);
        const whiteLum = getLuminance({ r: 255, g: 255, b: 255 });
        const blackLum = getLuminance({ r: 0, g: 0, b: 0 });

        const whiteRatio = getContrast(colorLum, whiteLum);
        const blackRatio = getContrast(colorLum, blackLum);

        ratioWhite.textContent = whiteRatio.toFixed(2) + ":1";
        ratioBlack.textContent = blackRatio.toFixed(2) + ":1";

        passWhite.textContent = whiteRatio >= 4.5 ? "PASS (AA)" : (whiteRatio >= 3 ? "LARGE ONLY" : "FAIL");
        passWhite.className = `px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${whiteRatio >= 4.5 ? 'bg-emerald-500 text-white' : 'bg-red-100 text-red-600'}`;
        
        passBlack.textContent = blackRatio >= 4.5 ? "PASS (AA)" : (blackRatio >= 3 ? "LARGE ONLY" : "FAIL");
        passBlack.className = `px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${blackRatio >= 4.5 ? 'bg-emerald-500 text-white' : 'bg-red-100 text-red-600'}`;

        // Determine text color for Side A
        const sideTextColor = blackRatio > whiteRatio ? 'text-stone-900' : 'text-white';
        detailColorBg.classList.remove('text-white', 'text-stone-900');
        detailColorBg.classList.add(sideTextColor);

        // Harmonies
        // Complementary: +180
        setupHarmony(harmonyComp, hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l));
        // Analogous: +/- 30
        setupHarmony(harmonyAna1, hslToHex((hsl.h + 330) % 360, hsl.s, hsl.l));
        setupHarmony(harmonyAna2, hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l));
        // Triadic: +/- 120
        setupHarmony(harmonyTri1, hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l));
        setupHarmony(harmonyTri2, hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l));

        // Update Fav Button
        const isFav = favorites.has(color.hex);
        detailFavBtn.querySelector('i').className = `w-6 h-6 transition-colors ${isFav ? 'fill-red-500 text-red-500' : 'text-stone-400'}`;
        detailFavBtn.onclick = (e) => {
            toggleFavorite(e, color.hex);
            const nowFav = favorites.has(color.hex);
            detailFavBtn.querySelector('i').className = `w-6 h-6 transition-colors ${nowFav ? 'fill-red-500 text-red-500' : 'text-stone-400'}`;
            renderColors(); // Refresh grid
        };

        detailCopyBit.onclick = () => handleCopy(color);

        // Animate In (Instant)
        detailBackdrop.classList.add('opacity-100');
        detailCard.classList.remove('scale-95', 'opacity-0');
        detailCard.classList.add('scale-100', 'opacity-100');
        
        contrastWhite.classList.remove('-translate-x-12', 'opacity-0');
        contrastWhite.classList.add('translate-x-0', 'opacity-100');
        
        contrastBlack.classList.remove('-translate-x-12', 'opacity-0');
        contrastBlack.classList.add('translate-x-0', 'opacity-100');
    }

    function closeColorDetail() {
        detailBackdrop.classList.remove('opacity-100');
        detailCard.classList.add('scale-95', 'opacity-0');
        
        detailModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    detailClose.onclick = closeColorDetail;
    detailBackdrop.onclick = closeColorDetail;

    // --- Search: debounced 250ms so we don't re-render on every keystroke ---
    let searchDebounce;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(() => {
            searchQuery = e.target.value;
            renderColors();
        }, 250);
    });

    renderCategories();
    renderColors();
    renderSchemes();
    renderDataViz();
});
