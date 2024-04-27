const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Soccer API",
      version: "1.0.0",
      description: "A simple Express API for soccer",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Local server",
      },
      {
        url: "https://vehicleservice.azurewebsites.net",
        description: "Production server",
      },
    ],
  },
  apis: ["./models/playerModel.js", "./index.js", "./routes/soccerRoutes.js"],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
