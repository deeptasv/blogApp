const mongoose=require('mongoose')
const blogschema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const blogData=mongoose.model('blog',blogschema)
module.exports=blogData;
