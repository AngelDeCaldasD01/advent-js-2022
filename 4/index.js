const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

function fitsInOneBox(boxes) {
  return boxes.every(({ l, w, h }, index) => {
    if (index === boxes.length - 1) return true;
    const acc = boxes[index + 1] || {};
    return (
      (l > acc.l && w > acc.w && h > acc.h) ||
      (l < acc.l && w < acc.w && h < acc.h)
    );
  });
}

console.log(fitsInOneBox(boxes));
