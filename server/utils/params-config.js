const { v4: uuidv4 } = require('uuid');


const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-6955e9a6-2cd5-460a-8a97-d1223d571a6b',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer
    };
  
    return imageParams;
};

module.exports = params;