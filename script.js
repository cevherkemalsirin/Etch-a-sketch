"use strict";

let grid = 64;
let customBackgroundColor = "rgb(255,255,255)";
let canPaint = false;


const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector(".colorPicker");
const clearBtn = document.querySelector(".clearBtn");
const rainbowBtn = document.querySelector(".rainbowBtn");
let pixels = null;




//enum 
const brushType = {
    rainbow : "rainbow",
    solid : "solid",
    darken: "darken"
}
let currentBrush = brushType.solid;
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


function GetRandomColor()
{
    return `rgb(${Math.trunc(Math.random() * 255)+1},${Math.trunc(Math.random() * 255)+1},${Math.trunc(Math.random() * 255)+1})`;
}

function DetermineColor()
{
    switch(currentBrush)
    {
        case brushType.solid : 
        {
            return colorPicker.value;
        }break;
        case brushType.rainbow :
        {
            return GetRandomColor();
        }break;
    }
}

colorPicker.addEventListener("click", ()=>
{
    currentBrush = brushType.solid;
});

rainbowBtn.addEventListener("click", ()=> 
{
    currentBrush = brushType.rainbow;
});

document.addEventListener("mousedown", (e)=>
{
    canPaint = true;
    if(e.target.classList.contains("square"))
    {
        Paint(e.target, DetermineColor());
    }
});

document.addEventListener("mouseup", (e)=>
{
    canPaint = false;
});

canvas.addEventListener("mouseover", (e)=> {
    if(e.target.classList.contains("square") && canPaint)
    {
        let a = DetermineColor();
        console.log(a);
        Paint(e.target,a);
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