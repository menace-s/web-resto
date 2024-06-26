import {displayHome} from "./modules/displayHome.js";
import { displayMenu } from "./modules/displayMenu.js";
import { displayAbout } from "./modules/displayAbout.js";
import {aboutInfo} from "./modules/displayAbout.js"
import {plats} from "./modules/displayMenu.js"
import "./style.css";

window.onload = (evt) => {
  displayHome();
};

const homeBtn=document.getElementById("homeButton")
const menuBtn=document.getElementById("menuButton")
const aboutBtn=document.getElementById("aboutButton")

homeBtn.addEventListener("click",displayHome)
menuBtn.addEventListener("click",()=>{
  displayMenu(plats)
})
aboutBtn.addEventListener("click",()=>{
  displayAbout(aboutInfo)
})



