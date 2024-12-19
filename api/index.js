import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
    cors(),
  )
  .get('/', (req, res) => {
    res.status(200).json({
      mensagem: 'Bem vindo ao inicio do site',
      status: 200,
    });
  })
  .get('/sobre', (req, res) => {
    res.status(200).json({
      mensagem: 'Sobre nossa empressa',
      status: 200,
    });
  })
  .get('/contato', (req, res) => {
    res.status(200).json({
      mensagem: 'Entre em contato conosco',
      status: 200,
    });
  });

app.listen(port, () => console.log('Servidor rodando | Porta: ' + port))