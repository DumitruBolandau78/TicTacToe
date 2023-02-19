const blocks = document.querySelectorAll('.block'),
    x = document.querySelector('icon-x'),
    o = document.querySelector('icon-o'),
    scoreX = document.querySelector('.playerX .score'),
    scoreO = document.querySelector('.playerO .score'),
    newGame = document.querySelector('.new-game'),
    reset = document.querySelector('.reset');

let i = 0;

function addEvent() {
    blocks.forEach(block => {
        block.addEventListener('click', () => {
            if (block.hasChildNodes()) {
                return 0;
            } else {
                if (i === 0) {
                    block.insertAdjacentHTML('beforeend', '<div class="icon-x"><svg class="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></div>');
                    i++;
                } else if (i === 1) {
                    block.insertAdjacentHTML('beforeend', '<div class="icon-o"><svg class="o" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg></div>');
                    i--;
                }
                verifyIfWin();
            }
        });
    });
}

addEvent();

function verifyIfWin() {
    if (blocks[0].hasChildNodes() && blocks[1].hasChildNodes() && blocks[2].hasChildNodes()) {
        if ((blocks[0].firstChild.classList.contains('icon-x') && blocks[1].firstChild.classList.contains('icon-x') && blocks[2].firstChild.classList.contains('icon-x'))) {
            xWin();
        } else if ((blocks[0].firstChild.classList.contains('icon-o') && blocks[1].firstChild.classList.contains('icon-o') && blocks[2].firstChild.classList.contains('icon-o'))) {
            oWin();
        }
    }
    if (blocks[3].hasChildNodes() && blocks[4].hasChildNodes() && blocks[5].hasChildNodes()) {
        if ((blocks[3].firstChild.classList.contains('icon-x') && blocks[4].firstChild.classList.contains('icon-x') && blocks[5].firstChild.classList.contains('icon-x'))) {
            xWin();
        } else if ((blocks[3].firstChild.classList.contains('icon-o') && blocks[4].firstChild.classList.contains('icon-o') && blocks[5].firstChild.classList.contains('icon-o'))) {
            oWin();
        }
    }
    if (blocks[6].hasChildNodes() && blocks[7].hasChildNodes() && blocks[8].hasChildNodes()) {
        if ((blocks[6].firstChild.classList.contains('icon-x') && blocks[7].firstChild.classList.contains('icon-x') && blocks[8].firstChild.classList.contains('icon-x'))) {
            xWin();
        } else if ((blocks[6].firstChild.classList.contains('icon-o') && blocks[7].firstChild.classList.contains('icon-o') && blocks[8].firstChild.classList.contains('icon-o'))) {
            oWin();
        }
    }
    if (blocks[0].hasChildNodes() && blocks[3].hasChildNodes() && blocks[6].hasChildNodes()) {
        if ((blocks[0].firstChild.classList.contains('icon-x') && blocks[3].firstChild.classList.contains('icon-x') && blocks[6].firstChild.classList.contains('icon-x'))) {
            xWin();
        } else if ((blocks[0].firstChild.classList.contains('icon-o') && blocks[3].firstChild.classList.contains('icon-o') && blocks[6].firstChild.classList.contains('icon-o'))) {
            oWin();
        }
    }
    if (blocks[1].hasChildNodes() && blocks[4].hasChildNodes() && blocks[7].hasChildNodes()) {
        if ((blocks[1].firstChild.classList.contains('icon-x') && blocks[4].firstChild.classList.contains('icon-x') && blocks[7].firstChild.classList.contains('icon-x'))) {
            xWin();
        } else if ((blocks[1].firstChild.classList.contains('icon-o') && blocks[4].firstChild.classList.contains('icon-o') && blocks[7].firstChild.classList.contains('icon-o'))) {
            oWin();
        }
    }
    if (blocks[2].hasChildNodes() && blocks[5].hasChildNodes() && blocks[8].hasChildNodes()) {
        if ((blocks[2].firstChild.classList.contains('icon-x') && blocks[5].firstChild.classList.contains('icon-x') && blocks[8].firstChild.classList.contains('icon-x'))) {
            xWin();
        } else if ((blocks[2].firstChild.classList.contains('icon-o') && blocks[5].firstChild.classList.contains('icon-o') && blocks[8].firstChild.classList.contains('icon-o'))) {
            oWin();
        }
    }
    if (blocks[0].hasChildNodes() && blocks[4].hasChildNodes() && blocks[8].hasChildNodes()) {
        if ((blocks[0].firstChild.classList.contains('icon-x') && blocks[4].firstChild.classList.contains('icon-x') && blocks[8].firstChild.classList.contains('icon-x'))) {
            xWin();
        } else if ((blocks[0].firstChild.classList.contains('icon-o') && blocks[4].firstChild.classList.contains('icon-o') && blocks[8].firstChild.classList.contains('icon-o'))) {
            oWin();
        }
    }
    if (blocks[2].hasChildNodes() && blocks[4].hasChildNodes() && blocks[6].hasChildNodes()) {
        if ((blocks[2].firstChild.classList.contains('icon-x') && blocks[4].firstChild.classList.contains('icon-x') && blocks[6].firstChild.classList.contains('icon-x'))) {
            xWin();
        } else if ((blocks[2].firstChild.classList.contains('icon-o') && blocks[4].firstChild.classList.contains('icon-o') && blocks[6].firstChild.classList.contains('icon-o'))) {
            oWin();
        }
    }
}

let xPoints = 0,
    oPoints = 0;

function xWin() {
    xPoints++;
    scoreX.textContent = `${xPoints}`;
}

function oWin() {
    oPoints++;
    scoreO.textContent = `${oPoints}`;
}

newGame.addEventListener('click', () => {
    removeChilds();
    i = 0;
});

reset.addEventListener('click', function () {
    scoreO.textContent = `0`;
    scoreX.textContent = `0`;
    removeChilds();
});

function removeChilds() {
    blocks.forEach(item => {
        item.innerHTML = '';
    });
}