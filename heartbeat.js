var hb = Math.round((Math.random() * 50) + 120);  //rando
msg.payload =  {
    "Heartbeat (BPM)": hb,
}
msg.payload = JSON.stringify(msg.payload);

return msg;
