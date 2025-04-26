const url = "https://raw.githubusercontent.com/mdavindarinaldy/fgo24-node-datasource/refs/heads/main/listMenu";
import menu from "./src/menu.js";

async function main() {
  try {
    const res = await fetch(url);
    if(!res.ok) {throw new Error(`GAGAL`);}
    const data = await res.json();
    menu(data);
  } catch(err) {
    if(err.message === 'GAGAL') {
      console.log(`Fetch Data Failed!`);
    }
  }
}

main();
