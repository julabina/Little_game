const gameDom = document.querySelector(".game");
const grids = document.querySelectorAll(".game__grid__column");
const grid1 = document.querySelectorAll(".game__grid__column__case__1");
const grid2 = document.querySelectorAll(".game__grid__column__case__2");
const grid3 = document.querySelectorAll(".game__grid__column__case__3");
const grid4 = document.querySelectorAll(".game__grid__column__case__4");
const grid5 = document.querySelectorAll(".game__grid__column__case__5");
const grid6 = document.querySelectorAll(".game__grid__column__case__6");
const grid7 = document.querySelectorAll(".game__grid__column__case__7");
const winMsgBox = document.querySelector(".game__result");
const winMsg = document.querySelector(".game__result__title");
const winDarken = document.querySelector(".game__darken");
const winBtn = document.querySelector(".game__result__btn");
/* menu start*/
const hambBtn = document.querySelector(".header__hamb");
const closeBtn = document.querySelector(".header__menu__close");
const menu = document.querySelector(".header__menu");
/* menu end */



let gridAll = [grid1, grid2, grid3, grid4, grid5, grid6, grid7];
let rounds = 0;
let victoryCount;

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
                verifyVictory(grid, a, val);
                break;
            }
        }
    } 
}

const reset = () => {
    for (let i = 0; i < grid1.length; i++) {
        grid1[i].classList.remove("red");
        grid1[i].classList.remove("yellow");
    }
    for (let i = 0; i < grid2.length; i++) {
        grid2[i].classList.remove("red");
        grid2[i].classList.remove("yellow");
    }
    for (let i = 0; i < grid3.length; i++) {
        grid3[i].classList.remove("red");
        grid3[i].classList.remove("yellow");
    }
    for (let i = 0; i < grid4.length; i++) {
        grid4[i].classList.remove("red");
        grid4[i].classList.remove("yellow");
    }
    for (let i = 0; i < grid5.length; i++) {
        grid5[i].classList.remove("red");
        grid5[i].classList.remove("yellow");
    }
    for (let i = 0; i < grid6.length; i++) {
        grid6[i].classList.remove("red");
        grid6[i].classList.remove("yellow");
    }
    for (let i = 0; i < grid7.length; i++) {
        grid7[i].classList.remove("red");
        grid7[i].classList.remove("yellow");
    }
}

const verifyVertical = (grd, ind) => {
    let grid = grd;
    if (ind < 3) {
        if (rounds%2 == 0) {
            for (let i = ind; i < grid.length;i++) {
                if (grid[i].classList.contains("red")) {
                    victoryCount++;
                } else {
                    break;
                }
            }
            if (victoryCount === 4) {
                victory("red");

            } else {
                victoryCount = 0;
            }
        } else {
            for (let i = ind; i < grid.length;i++) {
                if (grid[i].classList.contains("yellow")) {
                    victoryCount++;
                } else {
                    break;
                }
            }
            if (victoryCount === 4) {
                victory("yellow");
            } else {
                victoryCount = 0;
            }
        }
    }
}

const verifyHorizontal = (ind, val) => {
    victoryCount++;
    if (rounds%2 == 0) {
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
            victory("red")
        } else {
            victoryCount = 0;
        }
    } else {
        for (let i = val; i < 7;i++) {
            if (gridAll[i][ind].classList.contains("yellow")) {
                victoryCount++;
            } else {
                break;
            }
        }
        for (let i = val; i > 1; --i) {
            aa = i - 2;
            if (gridAll[aa][ind].classList.contains("yellow")) {
                victoryCount++;          
            } else {
                break;
            }
        }
        if (victoryCount === 4) {
            victory("yellow");
        } else {
            victoryCount = 0;
        }
    }
}

const verifyDiagonal = (ind, val) => {
    victoryCount++;
    let a = ind ;        
    if (rounds%2 == 0) {       
        for (let i = val; i < 7; i++) {
            if (a > 0) {
                a -= 1;
                if (gridAll[i][a].classList.contains("red")) {
                    victoryCount++;
                } else {
                    break;
                }
            }
        }
        a = ind;
        let b = val - 1;
        for (let i = b - 1; i > -1; --i) {
            if (a < 5) {
                a += 1;
                    if (gridAll[i][a].classList.contains("red")) {
                        victoryCount++;
                    } else {
                        break;
                    }
                }
            }   
            if (victoryCount === 4) {
                victory("red");
        } else {
                victoryCount = 0;
        }
        /* -- */
        victoryCount++;
        a = ind;
        for (let i = val; i < 7; i++) {
            if (a < 5) {
                a += 1;
                if (gridAll[i][a].classList.contains("red")) {
                    victoryCount++;
                } else {
                    break;
                } 
            }
        }
        a = ind;
        b = val - 1;
        for (let i = b - 1; i > -1; --i) {
            if (a > 0) {
                a -= 1;
                if (gridAll[i][a].classList.contains("red")) {
                    victoryCount++;
                } else {
                    break;
                }
            }
        }
        if (victoryCount === 4) {
                victory("red");
        } else {
                victoryCount = 0;
        }
    } else {       
        for (let i = val; i < 7; i++) {
            if (a > 0) {
                a -= 1;
                if (gridAll[i][a].classList.contains("yellow")) {
                    victoryCount++;
                } else {
                    break;
                }
            }
        }
        a = ind;
        let b = val - 1;
        for (let i = b - 1; i > -1; --i) {
            if (a < 5) {
                a += 1;
                    if (gridAll[i][a].classList.contains("yellow")) {
                        victoryCount++;
                    } else {
                        break;
                    }
                }
            }   
            if (victoryCount === 4) {
                victory("yellow");
        } else {
                victoryCount = 0;
        }
        /* -- */
        victoryCount++;
        a = ind;
        for (let i = val; i < 7; i++) {
            if (a < 5) {
                a += 1;
                if (gridAll[i][a].classList.contains("yellow")) {
                    victoryCount++;
                } else {
                    break;
                } 
            }
        }
        a = ind;
        b = val - 1;
        for (let i = b - 1; i > -1; --i) {
            if (a > 0) {
                a -= 1;
                if (gridAll[i][a].classList.contains("yellow")) {
                    victoryCount++;
                } else {
                    break;
                }
            }
        }
        if (victoryCount === 4) {
                victory("yellow");
        } else {
                victoryCount = 0;
        }
    }
}

const verifyVictory = (grd, ind, val) => {
    victoryCount = 0;
        /* verify vertical */
        verifyVertical(grd, ind);
        
        /* verify horizontal */
        verifyHorizontal(ind, val);
        
        /*verify diagonal */ 
        verifyDiagonal(ind, val);
}

const victory = (color) => {
    winMsgBox.classList.remove("game__result--off");
    winDarken.classList.remove("game__result--off");
    winMsg.textContent = color + " PLAYER WIN";
}

grids[0].addEventListener("click", () => {
    fill(grid1, 1);
    rounds++;
})

grids[1].addEventListener("click", () => {
    fill(grid2, 2);
    rounds++;
})

grids[2].addEventListener("click", () => {
    fill(grid3, 3);
    rounds++;
})

grids[3].addEventListener("click", () => {
    fill(grid4, 4);
    rounds++;
})

grids[4].addEventListener("click", () => {
    fill(grid5, 5);
    rounds++;
})

grids[5].addEventListener("click", () => {
    fill(grid6, 6);
    rounds++;
})

grids[6].addEventListener("click", () => {
    fill(grid7, 7);
    rounds++;
})

winBtn.addEventListener("click", () => {
    reset();
    winDarken.classList.add("game__result--off");
    winMsgBox.classList.add("game__result--off");    
})

/* menu start */

hambBtn.addEventListener("click", () => {
    menu.classList.remove("header__menu--off");  
})

closeBtn.addEventListener("click", () => {
    menu.classList.add("header__menu--off")
})

/* menu end */