import fs from 'fs';
import { COLORS, SCHEMES, DATA_VIZ_SCHEMES } from './src/constants.ts';

fs.mkdirSync('./js', { recursive: true });
fs.mkdirSync('./css', { recursive: true });

const script = `
const COLORS = ${JSON.stringify(COLORS, null, 2)};
const SCHEMES = ${JSON.stringify(SCHEMES, null, 2)};
const DATA_VIZ_SCHEMES = ${JSON.stringify(DATA_VIZ_SCHEMES, null, 2)};
`;

fs.writeFileSync('./js/data.js', script);
console.log('Successfully extracted data to js/data.js');
