module.exports = async function routerApi(app) {
  // Aqui ele está recebendo tráfego HTTP da porta 3000 na rota '/', porém para receber
  // os PDU's SNMP é necessário que faça um redirecionamento de tráfego UDP da porta 161 para a porta 3000.
  app.get("/", async (req, res) => {
    console.log("deu certo mano");
  });
};
