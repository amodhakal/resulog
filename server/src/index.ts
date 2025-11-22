import express from "express";
import morgan from "morgan";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.listen(PORT, () => console.log(`On http://localhost:${PORT}`));
