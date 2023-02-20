import fsp from 'fs/promises';


export default async function abc(data) {
  console.log("STARTED")

  const files = await fsp.readdir(data);
  let m = new Map();


  for (const file of files) {
    const fileRead = await fsp.readFile('data/' + file, { encoding: "utf-8" })
    m.set(file,fileRead.match(/gotYa/g)?.length)
  }
  
  const cv = Array.from(m).sort(([k,v],[k1,v1]) =>  v-v1 )
  let m1 = new Map(cv);
  console.log(m1)

  

}


// export { variable1 as name1, variable2 as name2, /* …, */ nameN };
// export { variable1 as "string name" };
// export { name1 as default /*, … */ };



export async function readThenClose() {
  let filehandle = null;

  // Using the filehandle method 
  // filehandle = await fsPromises.open('input.txt', 'r+');

  var data = await fsPromises.readFile('input.txt', "utf8");
  console.log(data);
  console.log(Array.from(data));
  console.log("File Closed!");
}

// readThenClose().catch((error) => {   console.log("Error", error)});

// module.exports.abc= abc;
// module.exports = function (msg) { 
//     console.log(msg);
// };
