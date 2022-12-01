const gifts = ['book', 'game', 'socks']

function wrapping(gifts) {
    return [...gifts.map((element) => {
        return "*".repeat(element.length + 2) + "\n*" + element + "*\n" + "*".repeat(element.length + 2);
    })];
}

console.log(wrapping(gifts))