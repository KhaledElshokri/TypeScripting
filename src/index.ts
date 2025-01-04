// Type intersection
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
};

// Union types
function kgtoLbs(weight: number | string): number{

    // Narowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;

}

kgtoLbs(10);
kgtoLbs("10kg")