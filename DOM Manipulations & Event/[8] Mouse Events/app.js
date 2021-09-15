let header = document.querySelector('h5');
let card = document.querySelector('.card');
let clearBtn =  document.querySelector('.clear-tasks');

//Mouse Events
//Click
clearBtn.addEventListener('click', runEvent);
//Double Click
clearBtn.addEventListener('dblclick', runEvent);
//Mouse Down
clearBtn.addEventListener('mousedown', runEvent); //click and hold
//Mouse up
clearBtn.addEventListener('mouseup', runEvent); //reverse of mouse down. click, hold and release
//mouse enter
card.addEventListener('mouseenter', runEvent); //just placing the mouse over element fires the event
//mouse leave
card.addEventListener('mouseleave', runEvent); //removing mouse from the element fires the event
//mouse over
card.addEventListener('mouseover', runEvent); 
//mouse out
card.addEventListener('mouseout', runEvent);
//mouse move
card.addEventListener('mousemove',runAndShowCoordinates);


function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
}
function runAndShowCoordinates(e) {
    console.log(`Event Type: ${e.type}`);

    header.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(100, ${e.offsetX}, ${e.offsetY})`;
}