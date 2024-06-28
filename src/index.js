import $ from "jquery";
import { getButton } from "./button/button";
import image from "./assets/reactjs.png";
import './index.css';
import './fonts.css'; //? or @import fonts.css in file index.css ???

getButton();

const paragraph = document.createElement('span');
paragraph.textContent = 'My text';
paragraph.classList.add("p1");

document.querySelector('body').appendChild(paragraph);

const picture = document.createElement('img');
picture.setAttribute('src', image);
document.querySelector('body').appendChild(picture);
picture.classList.add("images");

//? jQuery /////////////////////////////////////////////////
// $('img').addClass("images");
// $('.images').css({'width':'400px', 'height':'225px'});