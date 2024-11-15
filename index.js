require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const app = express();

// connectDB();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contact Management API",
      version: "1.0.0",
      description: "API for managing contacts",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to your API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css";

app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    customCss:
      ".swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }",
    customCssUrl: CSS_URL,
  })
);

// Corrected route handler
app.get("/", (req, res) => {
  res.send("Welcome to the Contact Management API");
});

// API Routes
app.use("/contacts", require("./routes/contactRoutes"));

app.listen(5000, () => {
  console.log("Server running successfully on port 5000");
});
