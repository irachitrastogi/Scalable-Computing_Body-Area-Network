var ph = (Math.random() * (6.0 - 7.9) + 7.9).toFixed(2)

msg.payload =  {
    'blood-ph-level': ph
}
msg.payload = JSON.stringify(msg.payload);

return msg;
