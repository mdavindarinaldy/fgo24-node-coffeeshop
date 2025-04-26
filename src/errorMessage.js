import { mainMenu } from "./menu.js";

export default function errorMessage() {
  console.log("Jawaban Invalid - Dikembalikan ke Menu Utama");
  mainMenu();
}