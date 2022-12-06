function createCube(size) {
  let top = "";
  let bottom = "";
  let count = 0;
  while (count != size) {
    count++;
    top +=
      " ".repeat(size - count) +
      "/\\".repeat(count) +
      "_\\".repeat(size) +
      "\n";
    bottom +=
      " ".repeat(count - 1) +
      "\\/".repeat(size + 1 - count) +
      "_/".repeat(size) +
      "\n";
  }
  return top + bottom.slice(0, -1);
}

console.log(createCube(3));
