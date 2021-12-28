const gameDom = document.querySelector(".game");

/* let test = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0] , [0, 0, 0, 0, 0, 0, 0] , [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
console.log(test); */

const grids = document.querySelectorAll(".game__grid__column");
const grid1 = document.querySelectorAll(".game__grid__column__case__1");
const grid2 = document.querySelectorAll(".game__grid__column__case__2");
const grid3 = document.querySelectorAll(".game__grid__column__case__3");
const grid4 = document.querySelectorAll(".game__grid__column__case__4");
const grid5 = document.querySelectorAll(".game__grid__column__case__5");
const grid6 = document.querySelectorAll(".game__grid__column__case__6");
const grid7 = document.querySelectorAll(".game__grid__column__case__7");

let gridAll = [grid1, grid2, grid3, grid4, grid5, grid6, grid7];
let rounds = 0;
console.log(gridAll[4][2]);
console.log(grids);
console.log(grid1);

const fill = (grd, val) => {
    let a;
    let grid = grd;
    if (rounds%2 == 0) { 
        for (let i = 6; i > 0; --i) {
            a = i - 1;
            if (!grid[a].classList.contains("red") && !grid[a].classList.contains("yellow")) {
                grid[a].classList.add("red");
                verifyVictory(grid, a, val);
                break;
            }
        }
     } else {
        for (let i = 6; i > 0; --i) {
            a = i - 1;
            if (!grid[a].classList.contains("red") && !grid[a].classList.contains("yellow")) {
                grid[a].classList.add("yellow");
                break;
            }
        }
    } 
}

const verifyVictory = (grd, ind, val) => {
    let victoryCount = 0;
    let grid = grd;
if (rounds%2 == 0) {
    /* verify vertical */
    if (ind < 3) {
        for (let i = ind; i < grid.length;i++) {
            if (grid[i].classList.contains("red")) {
                victoryCount++;
            } else {
                break;
            }
        }
        if (victoryCount === 4) {
            console.log('win');
        } else {
            victoryCount = 0;
        }
    }
    /* verify horizontal */
    victoryCount++;
    let a = 7 - val;
    let b = 0;
    let c = val - 1;
    for (let i = val; i > 1; --i) {
        b += 1;
    }
    for (let i = val; i < 7;i++) {
        if (gridAll[i][ind].classList.contains("red")) {
            victoryCount++;
        } else {
            break;
        }
    }
    for (let i = val; i > 1; --i) {
        aa = i - 2;
        if (gridAll[aa][ind].classList.contains("red")) {
            victoryCount++;          
        } else {
            break;
        }
    }
    if (victoryCount === 4) {
        console.log('win');
    } else {
        victoryCount = 0;
    }

} else {

}


}

/* FILL RED */

grids[0].addEventListener("click", () => {
    /* if (rounds%2 == 0) {
        fillRed(grid1);
    } else {
        fillYellow(grid1);
    } */
    fill(grid1, 1)
    rounds++
})

grids[1].addEventListener("click", () => {
    fill(grid2, 2);
    rounds++
})

grids[2].addEventListener("click", () => {
    fill(grid3, 3);
    rounds++
})

grids[3].addEventListener("click", () => {
    fill(grid4, 4);
    rounds++
})

grids[4].addEventListener("click", () => {
    fill(grid5, 5);
    rounds++
})

grids[5].addEventListener("click", () => {
    fill(grid6, 6);
    rounds++
})

grids[6].addEventListener("click", () => {
    fill(grid7, 7);
    rounds++
})