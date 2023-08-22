function init() {

    let hour;
    let minute;
    let second;
    setInterval(() => {
        [hour, minute, second] = currentTime();
        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
        changeBgColor();
    }, 1000);
}

function currentTime() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    return [hour, minute, second];
}

function generateRandomColors(colors) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
    // for (let index = 0; index < 3; index++) {
    //     colors.push = Math.floor(Math.random() * 255);
    // }
}

function changeBgColor() {
    // let colors = [];
    // generateRandomColors(colors);
    // let color = "rgb(" + colors[1] + "," + colors[1] + "," + colors[2] + ")"
    // // `rgb(${colors[0]},${colors[1]},${colors[2]})`;
    // document.body.style.background = color;
}

init();