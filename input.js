import { readdir } from 'fs/promises';


export default async function abc(data)
{
    const files = await readdir(data);
    for (const file of files)
      console.log(file)
}

let name = "Lithin"
let name1 = "Lithin1"


export { name  ,name1 };
// export { variable1 as name1, variable2 as name2, /* …, */ nameN };
// export { variable1 as "string name" };
// export { name1 as default /*, … */ };



export async function readThenClose() {
    let filehandle = null;

        // Using the filehandle method 
        // filehandle = await fsPromises.open('input.txt', 'r+');

        var data =  await fsPromises.readFile('input.txt',"utf8");
        console.log(data);
        console.log(Array.from(data));
        console.log("File Closed!");
}

// readThenClose().catch((error) => {   console.log("Error", error)});

// module.exports.abc= abc;
// module.exports = function (msg) { 
//     console.log(msg);
// };

export * as fs1 from "fs"