const sharp = require('sharp');
const dir = 'C:/Users/Lenovo/.gemini/antigravity/brain/74c12f2b-8412-49bb-9963-5c450a8cdd68';

// Verify proportions of the new layout
// Container: 700 x 480
// Circle: diameter 360, center at (350, 240)
// Card 1 (Understand): top-left at (20, 40), width 210, height 58
// Card 2 (Plan): top-right at (470, 40), width 210, height 58
// Card 3 (Implement): bottom-left at (20, 380), width 210, height 58
// Card 4 (Grow): bottom-right at (470, 380), width 210, height 58

console.log('Circle is 360px wide, cards are 58px tall (ratio 6.2:1). Sleek and compact!');
