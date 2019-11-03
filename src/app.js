import express from 'express';
import routes from './routes';

// create the class App then when its called also call middlewares and routes
class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }
  
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
