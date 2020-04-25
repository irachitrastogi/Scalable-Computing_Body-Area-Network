// Function to create a random int between minValue and maxValue
function randomIntBetween(minValue, maxValue) {
    return parseInt(Math.floor(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue)));
}

msg.payload =  {
    'Rasipiratory Rate': randomIntBetween(8, 30), //grams per deciliter
}
msg.payload = JSON.stringify(msg.payload);

return msg;
