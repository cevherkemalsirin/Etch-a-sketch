"use strict";

let grid = 100;
let colorRGB = "rgb(241, 241, 241)";
let canPaint = false;
const canvas = document.querySelector(".main");



for(let r = 0; r<grid; r++)
{
    const row = document.createElement("div");
    row.classList.add("tray");

    for(let col = 0; col <grid; col++)
    {
        const square = document.createElement("div");
        square.classList.add("square");
        row.append(square);
    }
    canvas.append(row);
}


function Paint(e)
{
    e.target.style.backgroundColor = "yellow";
}


document.addEventListener("mousedown", (e)=>
{
    canPaint = true;
    if(e.target.classList.contains("square"))
    {
        Paint(e);
    }
});
document.addEventListener("mouseup", (e)=>
{
    canPaint = false;
});

canvas.addEventListener("mouseover", (e)=> {
    if(e.target.classList.contains("square") && canPaint)
    {
        Paint(e);
    }
});



/*
const pixels = document.querySelectorAll(".square");

pixels.forEach( pixel => {
    pixel.addEventListener("mouseover", Paint);
});
*/