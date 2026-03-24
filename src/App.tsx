import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, X, ChevronRight, Palette, Layers, Wind, Sun, Leaf, Snowflake, BookOpen, BarChart3, Copy, Check, Dices, RefreshCw, Contrast, Heart } from 'lucide-react';
import chroma from 'chroma-js';
import { COLORS, SCHEMES, DATA_VIZ_SCHEMES } from './constants';
import { JapaneseColor, Category, ColorScheme, DataVizScheme, DataVizType } from './types';

const CATEGORIES: { name: Category; icon: any; color: string }[] = [
  { name: 'Spring', icon: Wind, color: 'text-pink-400' },
  { name: 'Summer', icon: Sun, color: 'text-yellow-500' },
  { name: 'Autumn', icon: Leaf, color: 'text-orange-600' },
  { name: 'Winter', icon: Snowflake, color: 'text-blue-400' },
  { name: 'Nature', icon: Palette, color: 'text-emerald-600' },
  { name: 'Historical', icon: Layers, color: 'text-purple-700' },
  { name: 'Schemes', icon: BookOpen, color: 'text-rose-500' },
  { name: 'DataViz', icon: BarChart3, color: 'text-indigo-500' },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState<JapaneseColor | null>(null);
  const [selectedScheme, setSelectedScheme] = useState<ColorScheme | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('nippon-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [contrastLevel, setContrastLevel] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [selectedDataVizType, setSelectedDataVizType] = useState<DataVizType | 'All'>('All');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [randomPalette, setRandomPalette] = useState<JapaneseColor[] | null>(null);

  const generateRandomPalette = () => {
    const shuffled = [...COLORS].sort(() => 0.5 - Math.random());
    setRandomPalette(shuffled.slice(0, 5));
  };

  useEffect(() => {
    localStorage.setItem('nippon-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (copiedColor) {
      const timer = setTimeout(() => setCopiedColor(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedColor]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
  };

  const getAdjustedColor = (hex: string, level: 'Low' | 'Medium' | 'High') => {
    if (level === 'Medium') return hex;
    
    // Use Lch for more perceptually uniform color adjustments
    const color = chroma(hex);
    const [l, c, h] = color.lch();

    if (level === 'Low') {
      // Pull lightness towards the middle (50) and reduce chroma
      const newL = 50 + (l - 50) * 0.5;
      const newC = c * 0.6;
      return chroma.lch(newL, newC, h).hex();
    } else {
      // Push lightness away from middle and boost chroma
      // We use a non-linear adjustment to avoid blowing out very light/dark colors
      const diff = l - 50;
      const factor = 1.5;
      const newL = Math.max(5, Math.min(95, 50 + diff * factor));
      
      // Boost chroma but cap it to keep it somewhat natural
      const newC = Math.min(100, c * 1.4);
      
      return chroma.lch(newL, newC, h).hex();
    }
  };

  const getRGB = (hex: string) => {
    const [r, g, b] = chroma(hex).rgb();
    return { r, g, b };
  };

  const getCMYK = (hex: string) => {
    const [c, m, y, k] = chroma(hex).cmyk();
    return { 
      c: Math.round(c * 100), 
      m: Math.round(m * 100), 
      y: Math.round(y * 100), 
      k: Math.round(k * 100) 
    };
  };

  const filteredColors = useMemo(() => {
    if (selectedCategory === 'Schemes' || selectedCategory === 'DataViz') return [];
    return COLORS.filter(color => {
      const matchesCategory = selectedCategory === 'All' || color.category === selectedCategory;
      const matchesSearch = 
        color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        color.kanji.includes(searchQuery) ||
        color.romaji.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const filteredSchemes = useMemo(() => {
    if (selectedCategory !== 'Schemes' && selectedCategory !== 'All') return [];
    return SCHEMES.filter(scheme => {
      const matchesSearch = 
        scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFavorite = !showFavoritesOnly || favorites.includes(scheme.id);
      return matchesSearch && matchesFavorite;
    });
  }, [selectedCategory, searchQuery, showFavoritesOnly, favorites]);

  const filteredDataViz = useMemo(() => {
    if (selectedCategory !== 'DataViz' && selectedCategory !== 'All') return [];
    return DATA_VIZ_SCHEMES.filter(scheme => {
      const matchesType = selectedDataVizType === 'All' || scheme.type === selectedDataVizType;
      const matchesSearch = 
        scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [selectedCategory, selectedDataVizType, searchQuery]);

  return (
    <div className="min-h-screen pb-20">
      {/* Copy Toast */}
      <AnimatePresence>
        {copiedColor && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-bold uppercase tracking-widest">Copied {copiedColor}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="serif-text text-5xl md:text-7xl font-light tracking-tight mb-2">
              Nippon Colors
            </h1>
            <p className="text-sm uppercase tracking-[0.2em] opacity-60 font-medium">
              Traditional Japanese Harmony Dictionary
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto">
            <button
              onClick={generateRandomPalette}
              className="flex items-center justify-center gap-2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all shadow-lg hover:shadow-black/20"
            >
              <Dices className="w-4 h-4" />
              Random Generator
            </button>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
              <input
                type="text"
                placeholder="Search colors or schemes..."
                className="w-full bg-white/50 border-b border-black/10 py-2 pl-10 pr-4 focus:outline-none focus:border-black/30 transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="px-6 md:px-12 max-w-7xl mx-auto mb-12 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-8 min-w-max pb-4">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`text-sm uppercase tracking-widest transition-all ${
              selectedCategory === 'All' && !showFavoritesOnly ? 'opacity-100 font-bold border-b-2 border-black' : 'opacity-40 hover:opacity-60'
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat.name);
                setShowFavoritesOnly(false);
              }}
              className={`flex items-center gap-2 text-sm uppercase tracking-widest transition-all ${
                selectedCategory === cat.name && !showFavoritesOnly ? 'opacity-100 font-bold border-b-2 border-black' : 'opacity-40 hover:opacity-60'
              }`}
            >
              <cat.icon className={`w-4 h-4 ${cat.color}`} />
              {cat.name}
            </button>
          ))}
          <div className="w-[1px] h-4 bg-black/10 self-center" />
          <button
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
            className={`flex items-center gap-2 text-sm uppercase tracking-widest transition-all ${
              showFavoritesOnly ? 'opacity-100 font-bold border-b-2 border-rose-500 text-rose-500' : 'opacity-40 hover:opacity-60'
            }`}
          >
            <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-rose-500' : ''}`} />
            Favorites
          </button>
        </div>
      </nav>

      {/* Grid Content */}
      <main className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* 1. Colors Section (Top) */}
        {filteredColors.length > 0 && (
          <div className="mb-20">
            <h2 className="serif-text text-3xl mb-8 opacity-60">Traditional Colors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredColors.map((color) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={color.hex}
                    onClick={() => setSelectedColor(color)}
                    className="group cursor-pointer bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all border border-black/5"
                  >
                    <div 
                      className="aspect-[4/3] rounded-xl mb-4 transition-transform group-hover:scale-[1.02] relative overflow-hidden" 
                      style={{ backgroundColor: color.hex }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(color.hex);
                        }}
                        className="absolute bottom-3 right-3 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all"
                        title="Copy HEX"
                      >
                        <Copy className="w-3 h-3 text-white" />
                      </button>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="serif-text text-xl font-medium">{color.name}</h3>
                        <p className="text-xs opacity-50 uppercase tracking-wider">{color.romaji}</p>
                      </div>
                      <div className="text-right">
                        <p className="japanese-text text-xl font-light">{color.kanji}</p>
                        <p className="font-mono text-[10px] opacity-40">{color.hex}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* 2. Schemes Section (Middle) */}
        {filteredSchemes.length > 0 && (
          <div className="mb-20">
            <h2 className="serif-text text-3xl mb-8 opacity-60">Color Schemes</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredSchemes.map((scheme) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={scheme.id}
                  onClick={() => setSelectedScheme(scheme)}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-black/5 flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden relative flex">
                    {/* Color Swatch Grid Background */}
                    <div className="flex-1 flex flex-col">
                      {scheme.colors.slice(0, 3).map((c, i) => (
                        <div key={i} className="flex-1" style={{ backgroundColor: c.hex }} />
                      ))}
                    </div>
                    <div className="flex-1 flex flex-col">
                      {scheme.colors.slice(3, 6).map((c, i) => (
                        <div key={i} className="flex-1" style={{ backgroundColor: c.hex }} />
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 p-8 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Scheme {scheme.id}</span>
                          <div className="h-[1px] w-8 bg-black/10" />
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(scheme.id);
                          }}
                          className="p-2 hover:bg-rose-50 rounded-full transition-colors group/fav"
                        >
                          <Heart className={`w-5 h-5 transition-all ${favorites.includes(scheme.id) ? 'fill-rose-500 text-rose-500 scale-110' : 'text-black/20 group-hover/fav:text-rose-400'}`} />
                        </button>
                      </div>
                      <h3 className="serif-text text-3xl font-medium">{scheme.title}</h3>
                    </div>
                    <p className="text-sm opacity-60 line-clamp-3 mb-8 leading-relaxed italic">"{scheme.subtitle}"</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Palette Preview</p>
                        <button className="text-[10px] uppercase tracking-widest font-bold text-rose-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          View Details <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="flex gap-1.5">
                        {scheme.colors.map((c, i) => (
                          <div 
                            key={i} 
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(c.hex);
                            }}
                            className="h-10 flex-1 rounded-md shadow-sm border border-black/5 transition-transform hover:-translate-y-1 cursor-copy relative overflow-hidden" 
                            style={{ backgroundColor: c.hex }} 
                            title={`Copy ${c.hex}`}
                          >
                            {copiedColor === c.hex && (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
                                <Check className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 3. DataViz Section (Bottom) */}
        {filteredDataViz.length > 0 && (
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h2 className="serif-text text-3xl opacity-60">Data Visualization Schemes</h2>
                <p className="text-xs uppercase tracking-widest opacity-40 mt-1">Color Brewer style palettes for data analysis</p>
              </div>
              <div className="flex gap-2">
                {['All', 'Sequential', 'Diverging', 'Qualitative'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedDataVizType(type as any)}
                    className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                      selectedDataVizType === type 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white text-black border-black/10 hover:border-black/30'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDataViz.map((scheme) => (
                <div 
                  key={scheme.id}
                  className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border ${
                        scheme.type === 'Sequential' ? 'border-blue-200 text-blue-600 bg-blue-50' :
                        scheme.type === 'Diverging' ? 'border-orange-200 text-orange-600 bg-orange-50' :
                        'border-purple-200 text-purple-600 bg-purple-50'
                      }`}>
                        {scheme.type}
                      </span>
                      <h3 className="serif-text text-2xl font-medium mt-2">{scheme.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm opacity-60 mb-8 leading-relaxed">{scheme.description}</p>
                  
                  {/* Visualization Preview */}
                  <div className="space-y-6">
                    {/* Bar Chart Preview */}
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-3">Bar Chart Preview</p>
                      <div className="flex items-end gap-2 h-24 px-4 bg-black/[0.02] rounded-xl">
                        {scheme.colors.map((c, i) => (
                          <div 
                            key={i} 
                            className="flex-1 rounded-t-lg transition-all hover:opacity-80 cursor-help" 
                            style={{ 
                              backgroundColor: c.hex,
                              height: `${20 + (i + 1) * (80 / scheme.colors.length)}%` 
                            }}
                            title={`${c.name}: ${c.hex}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Palette Strip with Copy */}
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-3">Click to Copy HEX</p>
                      <div className="flex gap-2">
                        {scheme.colors.map((c, i) => (
                          <button 
                            key={i} 
                            onClick={() => copyToClipboard(c.hex)}
                            className="flex-1 group relative h-12 rounded-lg shadow-sm border border-black/5 transition-transform hover:-translate-y-1" 
                            style={{ backgroundColor: c.hex }}
                            title={`Copy ${c.hex}`}
                          >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 rounded-lg">
                              <Copy className="w-4 h-4 text-white drop-shadow-md" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Random Palette Modal */}
      <AnimatePresence>
        {randomPalette && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-md"
            onClick={() => setRandomPalette(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="bg-white w-full max-w-6xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-8 md:px-12 flex justify-between items-center border-b border-black/5">
                <div>
                  <h2 className="serif-text text-3xl font-medium">Random Harmony</h2>
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mt-1">Generated Traditional Palette</p>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={generateRandomPalette}
                    className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Regenerate
                  </button>
                  <button 
                    onClick={() => setRandomPalette(null)}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Palette Strips */}
              <div className="flex-1 flex flex-col md:flex-row h-[50vh] md:h-[60vh]">
                {randomPalette.map((color, idx) => (
                  <motion.div
                    key={`${color.hex}-${idx}`}
                    initial={{ flex: 0, opacity: 0 }}
                    animate={{ flex: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                    className="relative group flex flex-col justify-end p-8 transition-all hover:flex-[1.5] cursor-copy overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex)}
                  >
                    {/* Copy Feedback Overlay */}
                    <AnimatePresence>
                      {copiedColor === color.hex && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 backdrop-blur-sm"
                        >
                          <Check className="w-12 h-12 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Color Info */}
                    <div className="relative z-20 text-white drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="japanese-text text-5xl font-light mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{color.kanji}</p>
                      <h3 className="serif-text text-2xl font-medium mb-1">{color.name}</h3>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-4">{color.romaji}</p>
                      <div className="flex items-center justify-between border-t border-white/20 pt-4">
                        <span className="font-mono text-sm">{color.hex}</span>
                        <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-8 md:px-12 bg-black/[0.02] flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest font-bold opacity-30">Palette Style</span>
                    <span className="text-xs font-medium">Traditional Japanese Harmony</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    const allHex = randomPalette.map(c => c.hex).join(', ');
                    copyToClipboard(allHex);
                  }}
                  className="w-full md:w-auto px-10 py-4 border border-black/10 rounded-2xl hover:bg-black hover:text-white transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3"
                >
                  <Copy className="w-4 h-4" />
                  Copy Full Palette HEX
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Color Detail Modal */}
      <AnimatePresence>
        {selectedColor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm"
            onClick={() => setSelectedColor(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#f5f2ed] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto relative" style={{ backgroundColor: selectedColor.hex }}>
                <button onClick={() => setSelectedColor(null)} className="absolute top-6 left-6 p-2 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md transition-colors md:hidden">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="serif-text text-4xl md:text-5xl font-medium mb-2">{selectedColor.name}</h2>
                    <p className="text-sm uppercase tracking-[0.2em] opacity-60 font-medium">{selectedColor.romaji}</p>
                  </div>
                  <div className="text-right">
                    <p className="japanese-text text-5xl font-light mb-1">{selectedColor.kanji}</p>
                    <span className="inline-block px-3 py-1 bg-black/5 rounded-full text-[10px] uppercase tracking-widest font-bold">{selectedColor.category}</span>
                  </div>
                </div>
                <p className="text-lg serif-text italic opacity-80 mb-10 leading-relaxed">"{selectedColor.description}"</p>
                <div className="grid grid-cols-2 gap-8 mt-auto">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-3">HEX Code</p>
                    <p className="font-mono text-xl">{selectedColor.hex}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-3">RGB Values</p>
                    <p className="font-mono text-xl">{selectedColor.rgb.r}, {selectedColor.rgb.g}, {selectedColor.rgb.b}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mb-3">CMYK Values</p>
                    <p className="font-mono text-xl">C:{selectedColor.cmyk.c} M:{selectedColor.cmyk.m} Y:{selectedColor.cmyk.y} K:{selectedColor.cmyk.k}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedColor(null)} className="mt-12 w-full py-4 border border-black/10 rounded-xl hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2">Close Palette</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scheme Detail Modal */}
      <AnimatePresence>
        {selectedScheme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm"
            onClick={() => setSelectedScheme(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#f5f2ed] w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-sm font-bold opacity-40 uppercase tracking-widest">Scheme {selectedScheme.id}</span>
                      <div className="h-[1px] flex-1 bg-black/10" />
                    </div>
                    <button 
                      onClick={() => toggleFavorite(selectedScheme.id)}
                      className="ml-4 p-3 hover:bg-rose-50 rounded-full transition-colors group/fav"
                    >
                      <Heart className={`w-6 h-6 transition-all ${favorites.includes(selectedScheme.id) ? 'fill-rose-500 text-rose-500 scale-110' : 'text-black/20 group-hover/fav:text-rose-400'}`} />
                    </button>
                  </div>
                  <h2 className="serif-text text-4xl md:text-5xl font-medium mb-4">{selectedScheme.title}</h2>
                  <p className="text-sm opacity-60 leading-relaxed mb-8">{selectedScheme.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-12">
                  <div className="bg-white/40 p-6 rounded-2xl border border-black/5 flex gap-4">
                    <div className="p-3 bg-rose-500/10 rounded-xl h-fit">
                      <Palette className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Feeling</p>
                      <p className="text-sm font-medium leading-relaxed">{selectedScheme.feeling}</p>
                    </div>
                  </div>
                  <div className="bg-white/40 p-6 rounded-2xl border border-black/5 flex gap-4">
                    <div className="p-3 bg-amber-500/10 rounded-xl h-fit">
                      <Layers className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Combinations</p>
                      <p className="text-sm font-medium leading-relaxed">{selectedScheme.combinations}</p>
                    </div>
                  </div>
                  <div className="bg-white/40 p-6 rounded-2xl border border-black/5 flex gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl h-fit">
                      <Info className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-1">Tips</p>
                      <p className="text-sm font-medium leading-relaxed">{selectedScheme.tips}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Palette */}
              <div className="w-full md:w-1/2 bg-white/50 p-8 md:p-12 overflow-y-auto custom-scrollbar border-l border-black/5">
                <div className="flex flex-col gap-6 mb-8">
                  <div className="flex justify-between items-center">
                    <h3 className="serif-text text-2xl opacity-60">Interactive Palette</h3>
                    <button 
                      onClick={() => {
                        const allHex = selectedScheme.colors.map(c => getAdjustedColor(c.hex, contrastLevel)).join(', ');
                        copyToClipboard(allHex);
                      }}
                      className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all"
                    >
                      Copy All HEX
                    </button>
                  </div>

                  {/* Contrast Controls */}
                  <div className="bg-white/60 p-4 rounded-2xl border border-black/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Contrast className="w-3 h-3 opacity-40" />
                      <span className="text-[9px] uppercase tracking-widest font-bold opacity-40">Adjust Contrast</span>
                    </div>
                    <div className="flex gap-2">
                      {(['Low', 'Medium', 'High'] as const).map((level) => (
                        <button
                          key={level}
                          onClick={() => setContrastLevel(level)}
                          className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all border ${
                            contrastLevel === level 
                              ? 'bg-black text-white border-black' 
                              : 'bg-white/50 text-black border-black/5 hover:border-black/20'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Grid Palette */}
                <div className="grid grid-cols-3 gap-3 mb-12">
                  {selectedScheme.colors.map((color, idx) => {
                    const adjustedHex = getAdjustedColor(color.hex, contrastLevel);
                    return (
                      <button
                        key={idx}
                        onClick={() => copyToClipboard(adjustedHex)}
                        className="group relative aspect-square rounded-2xl shadow-sm transition-all hover:scale-105 active:scale-95 overflow-hidden border border-black/5"
                        style={{ backgroundColor: adjustedHex }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-[2px]">
                          <div className="flex flex-col items-center gap-1">
                            <Copy className="w-5 h-5 text-white drop-shadow-md" />
                            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{adjustedHex}</span>
                          </div>
                        </div>
                        {copiedColor === adjustedHex && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                            <Check className="w-6 h-6 text-emerald-400" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <h3 className="serif-text text-xl mb-6 opacity-40 uppercase tracking-widest text-[10px] font-bold">Color Details</h3>
                <div className="space-y-6">
                  {selectedScheme.colors.map((color, idx) => {
                    const adjustedHex = getAdjustedColor(color.hex, contrastLevel);
                    const rgb = getRGB(adjustedHex);
                    const cmyk = getCMYK(adjustedHex);
                    
                    return (
                      <div key={idx} className="flex gap-6 items-center group/item">
                        <div className="relative">
                          <div 
                            className="w-16 h-16 rounded-2xl shadow-sm border border-black/5 cursor-copy transition-transform hover:scale-110" 
                            style={{ backgroundColor: adjustedHex }}
                            onClick={() => copyToClipboard(adjustedHex)}
                          />
                          <span className="absolute -top-2 -left-2 w-5 h-5 bg-black text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                            {idx + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-end mb-1">
                            <h4 className="serif-text text-lg font-medium">{color.name}</h4>
                            <span className="japanese-text text-lg opacity-40">{color.kanji}</span>
                          </div>
                          <p className="text-[10px] opacity-40 leading-relaxed mb-2 line-clamp-2">{color.description}</p>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] opacity-40">
                            <span className="cursor-copy hover:text-black transition-colors" onClick={() => copyToClipboard(adjustedHex)}>{adjustedHex}</span>
                            <span>RGB: {rgb.r} {rgb.g} {rgb.b}</span>
                            <span>CMYK: {cmyk.c} {cmyk.m} {cmyk.y} {cmyk.k}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button 
                  onClick={() => setSelectedScheme(null)}
                  className="mt-12 w-full py-4 bg-black text-white rounded-xl hover:opacity-90 transition-all uppercase tracking-widest text-xs font-bold"
                >
                  Close Scheme
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      <footer className="mt-20 py-12 px-6 border-t border-black/5 text-center opacity-40">
        <p className="text-xs uppercase tracking-[0.3em] mb-2">Inspired by Teruko Sakurai</p>
        <p className="serif-text italic text-sm">Japanese Color Harmony Dictionary</p>
      </footer>
    </div>
  );
}
