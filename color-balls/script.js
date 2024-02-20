const body = document.querySelector( 'body' );
let height = body.clientHeight;
let width = body.clientWidth;

const getRandomCode = () => {
    return Math.floor(Math.random()*256);
}

const getRandomColor = () => {
    const r = getRandomCode();
    const g = getRandomCode();
    const b = getRandomCode();
    return `rgb(${r},${g},${b})`;
}


const createBall = () => {
    let h = Math.floor(Math.random() * height);
    let w = Math.floor(Math.random() * width);
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.borderRadius = "50%";
    ball.className = "color-ball";
    ball.style.backgroundColor = getRandomColor();
    ball.style.left = w + 'px';
    ball.style.top = h + 'px';
    ball.style.zIndex = 1;
    body.appendChild(ball);
    setTimeout(()=> {
        body.removeChild(ball);
    }, 50000);
}

let intervalId = setInterval(createBall, 3000);

window.onresize = () => {
    height = body.clientHeight;
    width = body.clientWidth;
}