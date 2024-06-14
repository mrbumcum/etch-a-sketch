let normalBtn = document.querySelector("#normalBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let clearBtn = document.querySelector("#clearBtn");
let sliderVal = document.querySelector("#slider-value");
let slider = document.querySelector("#myRange");
let parentContainer = document.querySelector("#canvas");

function buildCanvas() {
    for (let i = 0; i < slider.value; i++) {
        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        parentContainer.appendChild(newRow);

        for (let j = 0; j < slider.value; j++) {
            const  newColumn = document.createElement("div");
            newColumn.setAttribute("class", "col");
            newRow.appendChild(newColumn);
            newColumn.addEventListener('mouseover', (event) => draw(event.target));
        }
    }
}

function draw(element) {
    element.style.backgroundColor = "black";
}

function deleteGrid() {
    while (parentContainer.hasChildNodes()) {
        parentContainer.removeChild(parentContainer.firstChild);
    }
}


buildCanvas();


slider.addEventListener('mouseup', function() {
    deleteGrid();
    sliderVal.textContent = slider.value + "x" + slider.value;
    buildCanvas();
});

