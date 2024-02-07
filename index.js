const fs= require('fs')
fs.readFile('./file/a.txt','utf-8',(err,data)=>{
  if(err) throw err
  console.log(data)
})
