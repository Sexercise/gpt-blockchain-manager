let cmd=require('node-cmd');
const callOpenAi = require('../callOpenAi'); 

exports.chatgpt = async (req,res)=>{
    const command = req.body.comma