const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema(
    {
      username: {type:String, required: true,unique:true},
      email:{type:String, required: true, unique:true},
      password:{type:String , required:true},   
      role:{type:String, default:[]}
      
    }
)
const user = mongoose.model('user',userSchema);

const profileSchema = new mongoose.Schema(
  {
    firstname: {type:String},
    lastname:{type:String },
    age:{type:Number },   
    
    
  }
)

const profile= mongoose.model('profile',profileSchema);

const activity = new mongoose.Schema({
  
  lastLogin: { type: Date, required: true }
})

const post = mongoose.model('activity', activity); 

module.exports = mongoose.model('user', userSchema);
module.exports = mongoose.model('profile', profileSchema);
module.exports = mongoose.model('activity', activity);
/***** */