function changeBackground () {
    const element = document.querySelector('#body');
    let color = getComputedStyle(element).backgroundColor;

    if(color == "rgb(64, 180, 215)"){
        element.style.backgroundColor = "#6c459d";
    }
    else {
        element.style.backgroundColor = "#40b4d7";
    }
}
