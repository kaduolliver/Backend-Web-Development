// express: Framework web para Node.js que simplifica a criaÁ„o de servidores HTTP.
// dirname e fileURLToPath: Utilizados para trabalhar com caminhos de arquivos em mÛdulos ES.
// body-parser: Middleware para processar dados do corpo das requisiÁıes HTTP.
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
  
// Cria a vari·vel "__dirname" que contÈm o caminho absoluto do diretÛrio atual.
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
// Declara a vari·vel bandName para armazenar o nome da banda.
var bandName = "";

// Configura o middleware para interpretar dados enviados via formul·rios HTML.
// "extended: true" permite o parsing de objetos aninhados.
app.use(bodyParser.urlencoded({ extended: true})
);

// Cria um middleware personalizado que:
// 1.Loga o corpo da requisiÁ„o
// 2.Concatena os campos "street" e "pet" do formul·rio para criar o nome da banda
// 3.Chama "next()"" para passar para o prÛximo middleware
function bandNomeGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNomeGenerator);

// Responde a requisiÁıes GET na raiz ("/") enviando o arquivo HTML.
// "sendFile" envia um arquivo como resposta.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//Processa submissıes POST para "/submit".
//Envia uma resposta HTML com o nome da banda gerado no middleware.
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}‚úåÔ∏è</h2>`);
});

//Inicia o servidor na porta especificada.
//Exibe uma mensagem no console quando o servidor estiver pronto.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// 1.Usu·rio acessa a rota GET "/" e recebe um formul·rio HTML
// 2.Preenche o formul·rio e envia via POST para "/submit"
// 3.O middleware bodyParser processa os dados do formul·rio
// 4.O middleware bandNomeGenerator cria o nome da banda
// 5.A rota POST "/submit" envia a resposta com o nome da banda