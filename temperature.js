var rnd = (Math.random() * (96 - (106)) + (106)).toFixed(1);  //random temp from -30.0 to 30.0 degrees
msg.payload =  {
    "Temperature": rnd,
}
msg.payload = JSON.stringify(msg.payload);

return msg;
