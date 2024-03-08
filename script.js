
changeRGB();
setInterval(changeRGB, 1000);

function changeRGB() {
    const col1 = getColorRGB();
    const col2 = getColorRGB();
    const col3 = getColorRGB();


    const colorString = `rgb(${col1}, ${col2}, ${col3})`
    document.body.style.background= colorString;
    document.getElementById("color").innerHTML= colorString;

}

function getColorRGB() {
    return Math.floor(Math.random() * 256)
}