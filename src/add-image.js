import KiwiImage from './components/kiwi-image/kiwi-image';
import altText from './altText.txt';
function addImage(){
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = KiwiImage;
    const body = document.querySelector('body');
    body.appendChild(img);
}   

export default addImage;