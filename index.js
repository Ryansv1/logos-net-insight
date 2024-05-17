const fastify = require("fastify");
const snmp = require("net-snmp");

const app = fastify();

app.register(require("./routes/routerApi"));

var options = {
  port: 162,
  disableAuthorization: true,
  includedAuthentication: false,
  address: null,
  transport: "udp4",
};

var callback = function (error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
};

var receiver = snmp.createReceiver(options, callback);

app
  .listen({
    port: 3000,
  })
  .then(() => console.log("Server is running on port 3000"));
