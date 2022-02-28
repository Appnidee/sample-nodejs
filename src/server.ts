import express, {Request, Response} from 'express';
import { createConnection } from "typeorm";
//import config from 'config';
//import routes from './routes';
//import morgan from 'morgan';
import helmet from 'helmet';
//import { routesUtility } from './utils/routes-util';
const fs = require("fs");

class Server {

  private app: express.Application;

  constructor(){
    this.app = express(); // init the application
    this.app.use(helmet());
    this.app.disable('x-powered-by');
    this.configuration();
    this.routes();
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment 
   * variables it takes the default port 3000
   */
  public configuration() {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(express.json());
   // this.app.use('/api', routes);
  }

  /**
   * Method to configure the routes
   */
  public async routes(){
//     await createConnection({
//       type: "postgres",
//       host: "localhost",
//       port: 5434,
//       username: "blog",
//       password: "blog",
//       database: "blog",
//       entities: ["build/database/entities/**/*.js"],
//       synchronize: true,
//       name: "blog"
//     });


    this.app.get("/api/post", (req: Request, res: Response ) => {
      console.log(`hello post`);
      res.send( "This is a post!" );
    });

    this.app.get( "/", (req: Request, res: Response ) => {
      console.log(`hello. Server is listening ${this.app.get('port')} port. voor me`  + process.env.NODE_ENV);
      res.send( "Hello world! "+process.env.NODE_ENV );
      
    
    });

  }

  /**
   * Used to start the server
   */
  public start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listeningfor ${this.app.get('port')} port.`+ process.env.NODE_ENV);
    });
  }
}

const server = new Server(); // Create server instance
server.start(); // Execute the server

