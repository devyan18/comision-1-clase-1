const fs = require("node:fs/promises")

async function leerArchivo () {
  try {
    const data = await fs.readFile("./archivo.txt", "utf-8")
    console.log(data)
  } catch (error) {
    console.log(error)
  }
} 

leerArchivo()