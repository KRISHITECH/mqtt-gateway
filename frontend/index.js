var client = mqtt.connect("ws://staging.mqtt.farmbot.io:3002", {
	username: 'test123@test.com',
	password: 'password123'
});

console.log(">???");
client.subscribe("#");

function puts(msg, topic){
  client.publish(topic || "mqtt/demo", msg || "empty");
}

function gets(topic, payload){
  console.log([topic, payload].join(": "))
}

client.on("message", gets);

window.puts = puts
