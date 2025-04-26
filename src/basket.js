import {mainMenu, close} from './menu.js';

let basket = {
  item: [],
  price: 0
};

export function addItem(item, price) {
  basket.item = [...basket.item, item];
  basket.price = basket.price + price;
  console.log(`${item} berhasil ditambahkan ke Keranjang`);
}

export function viewBasket() {
  console.log('Keranjang: ');
  basket.item.forEach(result=> {
    console.log(`${basket.item.indexOf(result)+1}. ${result}`);
  });
  console.log(`Total Harga: Rp ${basket.price}\n`);
  mainMenu();
}

export function checkOut() {
  console.log('Daftar Belanja: ');
  basket.item.forEach(result=> {
    console.log(`${basket.item.indexOf(result)}. ${result}`);
  });
  console.log(`\nTotal Harga: Rp ${basket.price}\nTerima kasih sudah memesan!`);
  close();
}