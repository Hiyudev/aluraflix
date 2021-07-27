const { getCategorias, getCategoria, getVideosbyCategoria, hasCategoria } = require('../db');
const { Router } = require('express');
const categoriasrouter = Router();

const validatorid = async (req, res, next) => {
    const id = req.params.id ?? req.body['id'];
    const exists = await hasCategoria(id);
  
    if(!exists) return res.status(404).send({ message: "Não foi encontrada um dado com este ID" });
    
    next();
}
const validatorbody = async (req, res, next) => {
    const { titulo, url: cor } = req.body;
    const colorregex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/g)
    
    if(!titulo || !cor) return res.status(400).send({ message: "Algum dos campos obrigatórios não foram preenchidas "})
    if(titulo.length < 6) return res.status(400).send({ message: "Titulo muito curto"});
    if(!colorregex.test(cor)) return res.status(400).send({ message: "Cor inválido" })
    
    next();
}

categoriasrouter.get("/", async (req, res) => {
  const categorias = await getCategorias();

  res.status(200).send(categorias);
});

categoriasrouter.get("/:id", validatorid, async (req, res) => {
    const categoria = await getCategoria(req.params.id);

    res.status(200).send(categoria);
});

categoriasrouter.get("/:id/videos", validatorid, async (req, res) => {
    const videos = await getVideosbyCategoria(req.params.id);

    res.status(200).send(videos);
});

categoriasrouter.post("/", validatorbody, async (req, res) => {
    const { titulo, cor } = req.body;
    const video = await createVideo(titulo, cor);

    res.status(200).send(video);
});

categoriasrouter.delete("/:id", validatorid, async (req, res) => {
    await deleteVideo(req.params.id);

    res.status(200).send({ message: "Foi deletado com sucesso" });
});

categoriasrouter.put("/", validatorid, async (req, res) => {
    const { id, data } = req.body;
    await updateVideo(id, data);

    res.status(200).send({ message: "Foi atualizado com sucesso" });
});

module.exports = categoriasrouter;