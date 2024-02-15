const left = document.getElementById("left");
const right = document.getElementById("right");
const up = document.getElementById("up-btn");
const down = document.getElementById("down-btn");
const maxPage = left.childElementCount;

let page = 1;

left.style.top = `-${(maxPage - page) * 100}dvh`;
right.style.top = `-${(page - 1) * 100}dvh`;

up.addEventListener("click", () => {
    page++;
    if (page > maxPage) page = 1;

    left.style.top = `-${(maxPage - page) * 100}dvh`;
    right.style.top = `-${(page - 1) * 100}dvh`;
});

down.addEventListener("click", () => {
    page--;
    if (page < 1) page = maxPage;

    left.style.top = `-${(maxPage - page) * 100}dvh`;
    right.style.top = `-${(page - 1) * 100}dvh`;
});