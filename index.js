const fs = require('node:fs')  
const path = require("path")
const dirPath = path.join(__dirname,"crud")

const filePath = `${dirPath}/cruddata.pdf`

fs.writeFileSync(filePath,"THIS IS CRUD FILE");

// for(i=0)

fs.appendFile(filePath, " THIS IS PDF DATA",(err)=>{
  if(!err){
    return console.log("DATA IS UPDATED")
  } 
})

fs.rename(filePath,`${dirPath}/updateCrudFile.pdf`,(err)=>{
  if(!err){
    return console.log("FILE NAME IS CHANGED")
  }
})

fs.readFile(`${dirPath}/updateCrudFile.pdf`,"utf8",(err,result)=>{
  console.log(result)
})
// fs.unlinkSync(`${dirPath}/updateCrudFile.pdf`)
// let { unlink }  = ('node:fs/promises');

// try {
//     unlinkSync('/tmp/hello');
//     console.log('successfully deleted /tmp/hello');
//   } catch (err) {
//     // handle the error
//     console.log("The error is occured")
//   }


// try {
//    unlink('/tmp/hello');
//   console.log('successfully deleted /tmp/hello');
// } catch (error) {
//   console.error('there was an error:', error.message);
// }