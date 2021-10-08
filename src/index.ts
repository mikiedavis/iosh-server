import express from 'express';
import getUserController from './controllers/getUserController';
import getUsersController from './controllers/getUsersController';
import getUserDetailController from './controllers/getUserDetailController';
import cors from 'cors';

const PORT = 8000;
const app = express();

//options for cors midddleware
const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: allowedOrigins,
    preflightContinue: false,
  };
  

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users/:userId', async (req, res) => {
    try {
        res.status(200).send(await getUserController(Number(req.params.userId)))
    }
     catch(e) {
         res.status(500)
     }
})

app.get('/users/detail/:userId', async (req, res) => {
    try {
        res.status(200).send(await getUserDetailController(Number(req.params.userId)))
    }
     catch(e) {
         res.status(500)
     }
})

app.get('/users', async (req, res) => {
    try {
        res.status(200).send(await getUsersController())
    }
     catch(e) {
         res.status(500)
     }
})

app.listen(PORT);
