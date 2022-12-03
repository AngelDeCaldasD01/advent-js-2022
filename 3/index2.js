// Solución 2

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.reduce((acc, item) => {
      return (acc = acc + item.length * 2);
    }, 0) /
      packOfGifts.reduce((acc, item) => {
        return (acc = acc + item.length);
      }, 0)
  );
}

console.log(distributeGifts(packOfGifts, reindeers));
