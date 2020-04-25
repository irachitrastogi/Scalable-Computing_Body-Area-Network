function randomIntBetween(minValue, maxValue) {
    return parseInt(Math.floor(Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue)));
}

msg.payload =  {
    'hemoglobin': randomIntBetween(10, 20), //grams per deciliter
}
msg.payload = JSON.stringify(msg.payload);

return msg;
