"use strict";

let grid = 64;
let customBackgroundColor = "rgb(255,255,255)";
let canPaint = false;
const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector(".colorPicker");
const clearBtn = document.querySelector(".clearBtn");
let pixels = null;

function CreateCanvas()
{
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
    pixels = document.querySelectorAll(".square");
}


function Paint(e,color)
{
    e.style.backgroundColor = color;
}


document.addEventListener("mousedown", (e)=>
{
    canPaint = true;
    if(e.target.classList.contains("square"))
    {
        Paint(e.target,colorPicker.value);
    }
});
document.addEventListener("mouseup", (e)=>
{
    canPaint = false;
});

canvas.addEventListener("mouseover", (e)=> {
    if(e.target.classList.contains("square") && canPaint)
    {
        Paint(e.target,colorPicker.value);
    }
});


function ClearCanvas()
{
    if(pixels)
    {
        pixels.forEach(pixel => {
            Paint(pixel,customBackgroundColor);
        });
    }
}

clearBtn.addEventListener("click", ClearCanvas);

CreateCanvas();


/*
const pixels = document.querySelectorAll(".square");

pixels.forEach( pixel => {
    pixel.addEventListener("mouseover", Paint);
});
*/