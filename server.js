import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)
//3000 é uma porta, usada com coisas que acabamos de construir
app.listen(4000, () => {
    console.log("Servidor escutando...");
});
