const container = document.querySelector(".container");

function createCell() {
    container.innerHTML = "";
    const rows = parseInt(container.clientHeight/(36));
    const cols = parseInt(container.clientWidth/(36));
    for(let i=0;i<rows;i++) {
        const row = document.createElement("div");
        row.className = "row";
        for(let j=0;j<cols;j++) {
            const box = document.createElement("div");
            box.className = "box";
            box.id = `box-${i}-${j}`;
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

createCell();

window.onresize = createCell;

const boxes = document.getElementsByClassName("box");

[...boxes].forEach((box)=>{
    box.addEventListener('mouseover', () => changeColor(box));
});

function changeColor(box) {
    box.style.backgroundColor = `rgb(${parseInt(Math.random()*256)},${parseInt(Math.random()*256)},${parseInt(Math.random()*256)})`;
    setTimeout(()=>{
        box.style.backgroundColor = "black";
    }, 500);
}