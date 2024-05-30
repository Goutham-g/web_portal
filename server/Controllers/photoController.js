const Photo = require("../Models/photoModel");



const uploadPhotos = async (req, res) => {
  try {
    const { email } = req.body
    const photos = req.files.map(file => ({
     
      url: `/uploads/${file.filename}`
    
    }));
    
    const userPhotos= await Photo.findOne({email})
    if(userPhotos){
      userPhotos.url.concat(photos)
    } else{


      userPhotos=new Photo({email,url:photos})
    }
     await userPhotos.save()
    


    res.json(userPhotos);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({ email: req.params.email});
    
    res.json(photos);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

const getPhotoById = async (req, res) => {
  try {
    console.log(req.params);
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }
    res.json(photo);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch photo' });
  }
};

const likePhoto = async (req, res) => {
  try {
    console.log(req.params);
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).json({ message: 'Photo not found' });
    }
    photo.likes += 1;
    await photo.save();
    res.json({ likes: photo.likes });
  } catch (error) {
    res.status(500).json({ message: 'Failed to like photo' });
  }
};
module.exports = { uploadPhotos ,getPhotos,getPhotoById,likePhoto}