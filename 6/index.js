function createCube(size) {
  let top = "";
  let bottom = "";

  for (let i = 1; i < size + 1; i++) {
    top += " ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size) + "\n";
    bottom +=
      " ".repeat(i - 1) + "\\/".repeat(size + 1 - i) + "_/".repeat(size) + "\n";
  }

  return top + bottom.slice(0, -1);
}

console.log(createCube(3));
