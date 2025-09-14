//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//In this file we learn abourt the file handling

const fs  = require("fs");
const os  = require("os");

console.log(os.cpus().length);//output:2



//Write the file:

//Sync....
// fs.writeFileSync("./test.txt","Hello i am vishal");


//Async....
// fs.writeFile("./test.txt","Hello i am vishal Tiwari",(error) => {});

//------------------------------------------------------------------------------------

//Read the file:
// Sync.....this function returns something 
// const contact = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(contact);

// Async...... this function does't returns anything && Call back likhate hai isme
// fs.readFile("./contacts.txt", "utf-8",(err,result) => {
//     if(err){
//         console.log("Error" ,err);
//     }
//     else{
//         console.log(result);
        
//     }
// });
// //-------------------------------------------------------------------------

//Append in file :
// fs.appendFileSync("./test.txt",`${Date.now()}Hey There\n`);

// Copy of file :
// fs.cpSync("./test.txt", "./copy.txt");

//Delete the file :
// fs.unlinkSync("./copy.txt");

// Decuse the blocking and Non-Blocking Requests:

// Blocking...(Sync)
// console.log("1");

// const result  = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// console.log("2");

// output:
// 1
// Vishal tiwari : +91 7251012830
// kunal Sharma : +91 7251916830
// 2

//*****************************************************************************

//Nob-Blocking...(Async)
// console.log("1");

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
// console.log(result);
// });

// console.log("2");

//output:
// 1
// 2
// Vishal tiwari : +91 7251012830
// kunal Sharma : +91 7251916830 


