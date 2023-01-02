function checkForSpam(message) {
    let result;
    // Change code below this line

    message = message.toLowerCase();
    result = message.includes('spam') || message.includes('sale');
    // Change code above this line
    return console.log(result);
}

checkForSpam('Get best sale offers now!');
