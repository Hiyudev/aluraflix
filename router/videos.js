const { getVideos, getVideo, createVideo, deleteVideo, updateVideo, hasVideo } = require('../db');
const { Router } = require('express');
const videosrouter = Router();

const validatorid = async (req, res, next) => {
  const id = req.body['id'] ?? req.params.id;
  const exists = await hasVideo(id);

  if(!exists) return res.status(404).send({ message: "Não foi encontrada um dado com este ID" });
  
  next();
}
const validatorbody = async (req, res, next) => {
  const { titulo, url } = req.body;
  const urlregex = new RegExp(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/g)
  
  if(!titulo || !url) return res.status(400).send({ message: "Algum dos campos obrigatórios não foram preenchidas "})
  if(titulo.length < 6) return res.status(400).send({ message: "Titulo muito curto"});
  if(!urlregex.test(url)) return res.status(400).send({ message: "URL inválido" })
  
  next();
}

videosrouter.get("/", async (req, res) => {
  const videos = await getVideos();

  res.status(200).send(videos);
});

videosrouter.get("/:id", validatorid, async (req, res) => {
  const video = await getVideo(req.params.id);

  res.status(200).send(video);
});

videosrouter.post("/", validatorbody, async (req, res) => {
  const { titulo, url } = req.body;
  const video = await createVideo(titulo, url);

  res.status(200).send(video);
});

videosrouter.delete("/:id", validatorid, async (req, res) => {
  await deleteVideo(req.params.id);

  res.status(200).send({ message: "Foi deletado com sucesso" });
});

videosrouter.put("/", validatorid, async (req, res) => {
  const { id, data } = req.body;
  await updateVideo(id, data);

  res.status(200).send({ message: "Foi atualizado com sucesso" });
});

module.exports = videosrouter;