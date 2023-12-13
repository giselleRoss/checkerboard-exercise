const container = document.createElement("div");


container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

container.style.border = "5px solid black";
container.style.backgroundImage = "linear-gradient(to bottom right, green, blue)"

document.body.appendChild(container);

for(let i = 0; i < 64; i++){
    const square = document.createElement("div");
    square.style.height = "12.5%";
    square.style.width = "12.5%";  
    if ((i + Math.floor(i / 8)) % 2 === 0) {
        square.style.background = `rgba(75, 275, 100, ${i * (1/64)})`;
    } else {
        square.style.background = `rgba(75, 30, 250, ${i * (1/64)})`;
    }
    container.append(square);
}