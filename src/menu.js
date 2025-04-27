import readline from 'readline';
import {viewBasket, addItem, checkOut} from './basket.js';
import errorMessage from './errorMessage.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let listItem = {};

export default function saveMenu(temp) {
  listItem = temp;
  mainMenu();
}

export function mainMenu() {
  console.log(`Menu Utama\n1. Lihat Menu\n2. Lihat Keranjang\n3. Checkout`);
  rl.question(`Tekan Nomor [1-3] : `, function(input1) {
    input1=Number(input1);
    if(input1===1) {
      console.clear();
      console.log(`Menu\n1. Makanan\n2. Minuman\n3. Snacks\n4. Desserts\n0. Kembali ke Menu Utama`);
      rl.question(`Tekan Nomor [0-4] : `, function(input2) {
        input2=Number(input2);
        if(input2===1) {foodsMenu(listItem.foods);}
        else if(input2===2) {drinksMenu(listItem.drinks);}
        else if(input2===3) {snacksMenu(listItem.snacks);}
        else if(input2===4) {dessertsMenu(listItem.desserts);}
        else if(input2===0) {console.clear();mainMenu();}
        else {errorMessage();}
      });
    } else if (input1===2) {viewBasket();}
    else if (input1===3) {checkOut();}
    else {
      console.log("Jawaban Invalid - Mohon Tekan Nomor [1-3]");
      mainMenu();
    }
  });
}

function foodsMenu(data) {
  console.clear();
  console.log('Makanan\n1. Nasi Goreng\n2. Mie Goreng\n3. Seblak\n4. Bakso\n5. Nasi Uduk\n0. Kembali ke Menu Utama');
  rl.question('Tekan Nomor [0-5] : ', function(input1) {
    input1=Number(input1);
    if (input1===0) {console.clear(); mainMenu();}
    if (input1>0 && input1 <=5) {
      rl.question(`Apakah yakin untuk memesan ${data[input1-1].type} dengan harga Rp ${data[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
        if (input2==="Ya") { 
          addItem(data[input1-1].type, data[input1-1].price);
          mainMenu();
        } else if (input2==="Tidak") { foodsMenu(data);}
        else { errorMessage();}
      });
    }
    else { errorMessage(); }
  });
}

function drinksMenu(data) {
  console.clear();
  console.log('Minuman\n1. Es Teh\n2. Es Jeruk\n3. Es Teh Tarik\n4. Es Kelapa Muda\n5. Kopi\n0. Kembali ke Menu Utama');
  rl.question('Tekan Nomor [0-5] : ', function(input1) {
    input1=Number(input1);
    if (input1===0) { mainMenu(); }
    if (input1>0 && input1 <=5) {
      rl.question(`Apakah yakin untuk memesan ${data[input1-1].type} dengan harga Rp ${data[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
        if (input2==="Ya") { 
          addItem(data[input1-1].type, data[input1-1].price);
          mainMenu();
        } else if (input2==="Tidak") { drinksMenu(data);}
        else { errorMessage(); }
      });
    }
    else { errorMessage(); }
  });
}

function snacksMenu(data) {
  console.clear();
  console.log('Snacks\n1. Kerupuk Udang\n2. Pangsit Goreng\n3. Bika Ambon\n4. Lemper\n5. Putu Ayu\n0. Kembali ke Menu Utama');
  rl.question('Tekan Nomor [0-5] : ', function(input1) {
    input1=Number(input1);
    if (input1===0) { mainMenu(); }
    if (input1>0 && input1 <=5) {
      rl.question(`Apakah yakin untuk memesan ${data[input1-1].type} dengan harga Rp ${data[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
        if (input2==="Ya") { 
          addItem(data[input1-1].type, data[input1-1].price);
          mainMenu();
        } else if (input2==="Tidak") { snacksMenu(data);}
        else { errorMessage(); }
      });
    }
    else { errorMessage(); }
  });
}

function dessertsMenu(data) {
  console.clear();
  console.log('Desserts\n1. Strawberry Ice Cream\n2. Cheesecake\n3. Red Velvet Cake\n4. Tiramisu Cake\n5. Panna Cota\n0. Kembali ke Menu Utama');
  rl.question('Tekan Nomor [0-5] : ', function(input1) {
    input1=Number(input1);
    if (input1===0) { mainMenu(); }
    if (input1>0 && input1 <=5) {
      rl.question(`Apakah yakin untuk memesan ${data[input1-1].type} dengan harga Rp ${data[input1-1].price}?\nJawab Ya/Tidak : `, function(input2){
        if (input2==="Ya") { 
          addItem(data[input1-1].type, data[input1-1].price);
          mainMenu();
        } else if (input2==="Tidak") { dessertsMenu(data);}
        else { errorMessage(); }
      });
    }
    else { errorMessage(); }
  });
}

export function close() {
  rl.close();
}

