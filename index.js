
let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat=()=>{
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield", "Ralph");
}



const destructivelyPrependCat=()=>{
    cats.length = 0;
    cats.unshift("Bob","Milo", "Otis", "Garfield");
}


const destructivelyRemoveLastCat=()=>{
    cats.pop();
    cats;
}

const destructivelyRemoveFirstCat=()=>{
    cats.shift();
    cats;
}

const appendCat=(item)=>{
    const newCats = [item, ...cats];
    newCats;
}

appendCat('Broom');



// const prependCat=(item, cats)=>{
//     const newCatss = [item, ...cats];
//     return newCatss;
// }

// prependCat('Arnold', cats)
