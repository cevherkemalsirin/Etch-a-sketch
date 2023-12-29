"use strict";

let grid = 16;
const panel = document.querySelector(".main");



for(let r = 0; r<grid; r++)
{
    const row = document.createElement("div");
    row.classList.add("tray");

    for(let col = 0; col <grid; col++)
    {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        row.append(cube);
    }
    panel.append(row);
}

   


