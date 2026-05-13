import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT  = join(__dirname, "../public/icon.png");
const OUTPUT = join(__dirname, "../public/icon.png");
const SIZE   = 512;

// Create a circular SVG mask
const circleMask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="white"/>
  </svg>`
);

const inputBuffer = readFileSync(INPUT);

const result = await sharp(inputBuffer)
  .resize(SIZE, SIZE, { fit: "cover" })           // Make square
  .composite([{ input: circleMask, blend: "dest-in" }]) // Apply circle mask → transparent corners
  .png()
  .toBuffer();

writeFileSync(OUTPUT, result);
console.log("✅ Circular favicon saved to public/icon.png");
