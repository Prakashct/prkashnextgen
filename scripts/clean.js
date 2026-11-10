const sharp = require('sharp');

async function cleanText() {
  const input = "C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/hero-right-raw.png";
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  
  // We want to clean the handwritten text in the region:
  // x: 330 to 570, y: 30 to 180 (in 0-indexed coords of the 574x576 image)
  // Let's create a copy of data
  const out = Buffer.from(data);
  
  // In this region, background is light: R > 190, G > 180, B > 165
  // Text is dark: R < 140, G < 140, B < 140
  // Gold underline is: R > 160, G > 110, B < 80 (high saturation warm brown/gold)
  
  // Let's detect mask of text pixels
  const isText = new Uint8Array(info.width * info.height);
  for (let y = 35; y < 190; y++) {
    for (let x = 330; x < info.width - 5; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // Check if it's text (dark charcoal)
      const isDark = (r < 155 && g < 150 && b < 145);
      // Check if it's the gold underline (golden yellow/brown on light bg)
      const isGoldUnderline = (y > 110 && y < 185 && r > 160 && g > 110 && g < 165 && b < 100);
      
      if (isDark || isGoldUnderline) {
        // Mark as text
        isText[y * info.width + x] = 1;
      }
    }
  }

  // Dilate the mask by 3px so anti-aliased edge pixels are also included
  const dilated = new Uint8Array(isText);
  for (let y = 35; y < 190; y++) {
    for (let x = 330; x < info.width - 5; x++) {
      if (isText[y * info.width + x]) {
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const ny = y + dy;
            const nx = x + dx;
            if (ny >= 0 && ny < info.height && nx >= 0 && nx < info.width) {
              dilated[ny * info.width + nx] = 1;
            }
          }
        }
      }
    }
  }

  // Now, inpaint marked pixels using average of surrounding non-masked pixels (or bilinear / distance-weighted interpolation)
  // Since background in this corner is a very smooth gradient (light cream at top-left to slightly warmer tone at right):
  for (let iter = 0; iter < 5; iter++) {
    for (let y = 35; y < 190; y++) {
      for (let x = 330; x < info.width - 5; x++) {
        const pIdx = y * info.width + x;
        if (dilated[pIdx]) {
          let sumR = 0, sumG = 0, sumB = 0, count = 0;
          for (let dy = -4; dy <= 4; dy += 2) {
            for (let dx = -4; dx <= 4; dx += 2) {
              const ny = y + dy;
              const nx = x + dx;
              if (ny >= 30 && ny < 195 && nx >= 320 && nx < info.width) {
                const nIdx = ny * info.width + nx;
                if (!dilated[nIdx] || iter > 0) {
                  const idx = (ny * info.width + nx) * info.channels;
                  sumR += out[idx];
                  sumG += out[idx + 1];
                  sumB += out[idx + 2];
                  count++;
                }
              }
            }
          }
          if (count > 0) {
            const targetIdx = pIdx * info.channels;
            out[targetIdx] = Math.round(sumR / count);
            out[targetIdx + 1] = Math.round(sumG / count);
            out[targetIdx + 2] = Math.round(sumB / count);
          }
        }
      }
    }
  }

  // Also, add an alpha channel so that the left edge (x: 0 to 80) fades smoothly to transparent!
  // This allows the graphic to seamlessly blend into the ivory page background on ANY screen width!
  const outWithAlpha = Buffer.alloc(info.width * info.height * 4);
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const srcIdx = (y * info.width + x) * info.channels;
      const dstIdx = (y * info.width + x) * 4;
      outWithAlpha[dstIdx] = out[srcIdx];
      outWithAlpha[dstIdx + 1] = out[srcIdx + 1];
      outWithAlpha[dstIdx + 2] = out[srcIdx + 2];
      
      // Alpha calculation:
      // Fade out on the far left so it blends seamlessly into #FFF8F1
      let alpha = 255;
      if (x < 70) {
        alpha = Math.round((x / 70) * 255);
      }
      outWithAlpha[dstIdx + 3] = alpha;
    }
  }

  await sharp(outWithAlpha, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).webp({ quality: 95 }).toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/prakash-hero.webp");
  
  await sharp(outWithAlpha, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).png().toFile("C:/Users/Lenovo/.gemini/antigravity/scratch/prakash-portfolio/public/prakash-hero.png");

  console.log("Successfully generated clean prakash-hero.webp and prakash-hero.png!");
}

cleanText();
