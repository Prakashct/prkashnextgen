const sharp = require('sharp');
const path = require('path');

async function testCompositeAlignment() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  // bg is 1672 x 941
  // Prakash is 1202 x 1308
  // Let's see what scale Prakash needs to be.
  // In the original 1024x576 reference, Prakash is on the right side.
  // If bg is 1672 x 941, let's see how Prakash's dimensions fit:
  // If height of bg is 941, Prakash's height from head to waist in reference is about 85-90% of hero height (e.g. ~820-880px).
  // Let's test different heights: e.g., height 850px, width proportional: 850 * (1202/1308) = 781px.
  // Let's composite and save to public/test-composite.png
  
  const resizedPrakash = await sharp(path.join(publicDir, "prakash_netgen.png"))
    .resize({ height: 860 })
    .toBuffer();

  const prakashMeta = await sharp(resizedPrakash).metadata();
  console.log("Resized prakash:", prakashMeta.width, "x", prakashMeta.height);

  // Center of circle in bg is x=1119, y=674.
  // Prakash's head and torso should be centered in the circle:
  // Prakash width is ~790, so left = 1119 - Math.round(790/2) = ~724.
  // Bottom of Prakash touches bottom of bg (top = 941 - 860 = 81).
  const compositeImg = await sharp(path.join(publicDir, "bg.png"))
    .composite([
      {
        input: resizedPrakash,
        top: 941 - prakashMeta.height, // flush to bottom!
        left: 1119 - Math.round(prakashMeta.width / 2) - 30, // slightly adjust
      }
    ])
    .toFile(path.join(publicDir, "test-composite.png"));

  console.log("Saved test-composite.png");
}

testCompositeAlignment();
