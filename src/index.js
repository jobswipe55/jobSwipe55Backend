/**
 * File Name: index.js
 * Description: build a webserver using EXPRESS and connect with MongoDB.
 * Author: mathteixeira55
 * Date: April 27, 2024
 * Version: 1.0.0
 * License: MIT License
 * Copyright:
 * Contact Information: 
 */

// ### Imports ###
// --- library for creating APIs
import express from "express";
// --- library to connect with Mongo DB
import mongoose from "mongoose";
// --- middleware for Express.js, used to parse incoming request bodies.
// it extracts the entire body portion of an incoming request stream and exposes
// it on req.body 
import bodyParser from "body-parser";
// --- middleware to deal with cors
import cors from "cors";
// --- global variables
import { localURL, PORT, mongoURI } from './config.js';
// --- function that defines the routes
import routes from "./routes/jobSwipe55Routes";
// ### end Imports ###

// ### Constants ###
//Create webserver
const app = express();
// ### end Constants ###

// ### Configure Swagger ###
require('./swagger')(app);
// ### end Configure Swagger ###

// ### Mongo Connection ###
// Setting Mongoose to use native promises ensures that you can use .then(),
// .catch(), and async/await syntax with Mongoose operations
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
// ### end Mongo Connection ###

// ### Body Parser Set Up ###
//extended allow complex objects to be URL encoded.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
// ### end Body Parser Set Up ###

// ### CORS set up
app.use(cors()) // This will enable CORS for all routes and origins
                // In other words will allow any rout to be accessible from any
                // origin

    //other cors() examples
       // --- Example of enabling CORS for a specific route
       /*  app.get('/data', cors(), (req, res) => {
             res.json({ message: 'This route supports CORS' });
           });
       */
       // --- Allowing Multiple Specific Origins
       /*
       const allowedOrigins = ['http://example.com', 'https://anotherdomain.com', 'http://localhost:3000'];

        const corsOptions = {
            origin: function (origin, callback) {
                if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            }
        };

        app.use(cors(corsOptions));

       */
// ### end CORS set up

// ### API ###
// --- GET endpionts
// healthcheck endpoint
/**
 * @swagger
 * /:
 *   get:
 *     summary: Healthcheck endpoint.
 *     description: Returns a message indicating that the service is running.
 *     responses:
 *       200:
 *         description: A message indicating that the service is running.
 */
app.get("/", (req, res) => 
    res.send(`Our application is running ${PORT}`)
)
// ### end API ###

// ### ROUTES ###
// using the function created on ./routes/jobSwipeRoutes file.
// remember to import the file.
routes(app);
// ### end ROUTES ###

//Start listening the PORT
app.listen(PORT, () => 
    console.log(`Your server is running on: ${localURL}:${PORT}`)
)