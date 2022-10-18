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
        cells.push(i);
    }
    cellaSelezionata();
}
function cellaSelezionata(){
    let punti = 0;
    let cellaCliccata = [];
    
    for (i = 0; i < cells.length; i++){
        let cellaId = document.getElementById(i);

        cellaId.addEventListener('click', function(){
            for (let j = 0; j < cells.length; j++){
                if(this.getAttribute('id') == bombe[j]){
                    this.classList.add('cellaBomba');
                } 
            }
            this.classList.add('cellaCliccata')
            punti++;
            cellaCliccata.push(this);
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


function showBomb(){
    for (let i = 0; i < cells.length; i++){
       
            if (bombe.includes(this.getAttribute('id'))){
                this.classList.add('cellaBomba')
            }
        

    }
}
