import { mainMenu } from "./menu.js";

export default function errorMessage() {
  console.clear();
  console.log("Jawaban Invalid - Dikembalikan ke Menu Utama");
  mainMenu();
}