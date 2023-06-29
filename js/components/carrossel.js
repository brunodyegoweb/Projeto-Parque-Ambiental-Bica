const imgS = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;
    if(idx > img.length-1) {
        idx=0;
    }
    imgS.style.transform=`translateX(${-idx*500}px)`;
}

setInterval(carrossel, 1800);