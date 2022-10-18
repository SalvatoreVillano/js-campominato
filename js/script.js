const griglia = document.getElementById('griglia');
const btn = document.getElementById('esegui');
let width;
let cells = [];
let bombe = [];
let cellClass;

btn.addEventListener('click', function(){
    level = document.getElementById('difficolta').value;
    btn.classList.add('d-none');
    if (level == 'insane'){
        width = 7;
        cellClass = 'insane';
    } else if(level == 'difficile'){
        width = 9;
        cellClass = 'hard';
    } else {
        width = 10;
        cellClass = 'easy';
    }
    getGriglia(width);
    generaBombe(width);
})
function getGriglia(width){
    for (i=0; i < width * width; i++){
        const cell = document.createElement('div');
        cell.setAttribute('id', i);
        cell.classList.add(cellClass);
        griglia.append(cell);
        cells.push(cell);
    }
    cellaSelezionata();
}
function cellaSelezionata(){
    let punti = 0;
    for (i = 0; i < cells.length; i++){
        let cellaId = document.getElementById(i);
        cellaId.addEventListener('click', function(){
            let cellaCliccata = [];
                this.classList.add('cellaCliccata');
                punti++;
                cellaCliccata.push(this);
                console.log(cellaCliccata);
                console.log(punti);
        })
    }
}

function generaBombe(range){
    for (let i = 0; i < 16; i++){
        bombe.push(Math.floor(Math.random() * (range * range - 1 + 1) + 1));
    }
    console.log(bombe);
}