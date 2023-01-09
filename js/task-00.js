function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
    for (let num of order) {
        total += num;
    }
    // Change code above this line
    return console.log(total);
}

calculateTotalPrice([412, 371, 94, 63, 176]);
