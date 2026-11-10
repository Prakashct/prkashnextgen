const sharp = require('sharp');
const path = require('path');

async function compareWithReference() {
  const publicDir = "C:\\Users\\Lenovo\\.gemini\\antigravity\\scratch\\prakash-portfolio\\public";
  
  // Let's inspect reference image dimensions: 1024 x 576.
  // In reference:
  // Circle center relative: ~69% x, ~65% y.
  // Prakash head top in reference: y=50px (50 / 576 = 8.6% from top).
  // Prakash bottom in reference: y=576px (touches bottom).
  // Prakash left elbow in reference: x=495px (495 / 1024 = 48.3% from left).
  // Prakash right arm/shoulder in reference: x=885px (885 / 1024 = 86.4% from left).
  
  console.log("In 1672x941 bg.png:");
  console.log("Head top should be around y =", Math.round(941 * 0.086), "px");
  console.log("Left arm should be around x =", Math.round(1672 * 0.483), "px");
  console.log("Right arm should be around x =", Math.round(1672 * 0.864), "px");
  console.log("Width should be around", Math.round(1672 * (0.864 - 0.483)), "px");
  console.log("Height should be around", Math.round(941 * (1 - 0.086)), "px");
}

compareWithReference();
