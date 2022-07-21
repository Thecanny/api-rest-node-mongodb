import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivroPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .put("/livros/:id", LivroController.atualizarLivro)
  .post("/livros", LivroController.cadastrarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)


export default router