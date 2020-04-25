var gl = (Math.random() * (3.9 - 9.0) + 9.0).toFixed(2)


msg.payload =  {
    'glucose-level': gl
}
msg.payload = JSON.stringify(msg.payload);

return msg;
