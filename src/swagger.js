/**
 * File Name: swagger.js
 * Description: swagger configuration to create swagger documentation.
 * Author: mathteixeira55
 * Date: April 27, 2024
 * Version: 1.0.0
 * License: MIT License
 * Copyright:
 * Contact Information: 
 */


// ### Imports ###
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// --- global variables
import { localURL, PORT, mongoURI } from './config.js';
// ### end Imports ###

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Jobswipe55 API",
      version: "1.0.0",
      description: "A simple Express API for jobSwipe55",
    },
    servers: [
      {
        url: `${localURL}:${PORT}`,
        description: "Local server",
      },
    ],
  },
  apis: [
    "./models/EducationSchema.js",
    "./models/PersonalInfoSchema.js",
    "./models/SkillSchema.js",
    "./models/seekerModel.js",
    "./index.js",
    "./routes/jobSwipe55Routes.js"
  ],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
