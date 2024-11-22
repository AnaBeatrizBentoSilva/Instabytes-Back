import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin:"http://localhost:8000",
  optionsSuccessStatus: 200
}

const upload = multer({ dest: "./uploads"})

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    //Define uma rota para buscar todos os posts, onde tem a requisição e a resposta
    app.get("/posts", listarPosts);
    //Rota para criar um post
    app.post("/posts", postarNovoPost);
    //Rota para upload de imagens(assumindo uma única imagem chamda "imagem")
    app.post("/upload", upload.single("imagem"), uploadImagem);
    //Rota para atualizar novo post
    app.put("/upload/:id", atualizarNovoPost)
  }

export default routes;
