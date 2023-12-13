const container = document.createElement("div");
document.body.appendChild(container);

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
container.style.border = "5px solid black";

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6)
}

for(var i = 0; i <= 64; i++){
    const square = document.createElement("div");
    square.style.height = "12.5%";
    square.style.width = "12.5%";  
    if(i + (Math.floor(i / 8)) % 2 === 0){
      square.style.background = randomHexColorCode();  
    } else {
      square.style.background = randomHexColorCode();  
    }  
    container.append(square);
}