let EnemyTile;
let MusuhTile;
let BombTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i =0; i < 9; i++) {
        let tile =document.createElement("div")
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById('board').appendChild(tile);
    }

    setInterval(setEnemy, 2000); //2 detik//
    setInterval(setMusuh, 500); // 0,5 detik//
    setInterval(setBomb, 1500); //1,5 detik//
}

function getRandomTile () {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setEnemy() {
    if (gameOver) {
        return;
        }

    

    if (EnemyTile) {
        EnemyTile.innerHTML = "";
    }

    let enemy= document.createElement("img");
    enemy.src= "./enemy3.jpeg";
    let num = getRandomTile();
    if (MusuhTile && MusuhTile.id == num) {
        return;
    }
    else if (BombTile && BombTile.id == num) {
        return;
    }
    EnemyTile = document.getElementById(num);
    EnemyTile.appendChild(enemy);
}

function setMusuh() {
    if(gameOver) {
        return;
    }

    if (MusuhTile) {
        MusuhTile.innerHTML = "";
    }

    let musuh = document.createElement("img");
    musuh.src = "./enemy1.jpeg";
    let num = getRandomTile();
    if (EnemyTile && EnemyTile.id == num) {
        return;
    }

    else if (BombTile && BombTile.id == num) {
        return;
    }
    MusuhTile = document.getElementById(num);
    MusuhTile.appendChild(musuh);
}

function setBomb() {
    if(gameOver) {
        return;
    }

    if (BombTile) {
        BombTile.innerHTML = "";
    }

    let bomb = document.createElement("img");
    bomb.src = "./enemy2.jpeg";
    let num = getRandomTile();
    if (EnemyTile && EnemyTile.id == num) {
        return;
    }
    else if (MusuhTile && MusuhTile.id == num) {
        return;
    }
    BombTile = document.getElementById(num);
    BombTile.appendChild(bomb);
}

function selectTile() {
    if(gameOver) {
        return;
    }
    
    if (this == EnemyTile) {
        score += 1;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == MusuhTile) {
        score += 5;
        document.getElementById("score").innerText = score.toString();
    }

    else if (this == BombTile) {
        document.getElementById("score").innerText = "Permainan Berakhir: " + score.toString();
        gameOver = true
    }
}



