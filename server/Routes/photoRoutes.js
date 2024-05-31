const express = require("express");
const { uploadPhotos, getPhotos,getPhotoById, likePhoto } = require("../Controllers/photoController");
const upload = require("../multerconfig/multer");

const routes = express.Router();

routes.post("/upload", upload.array('photos',10),uploadPhotos)
routes.get("/:email",getPhotos)
routes.get("/id/:id", getPhotoById);
routes.post('/likee/:id', likePhoto);




module.exports = routes