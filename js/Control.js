var fishTop = false;
var fishLeft = false;
var fishRight = false;
var fishBottom = false;

// 玩家2
var our2Top = false;
var our2Left = false;
var our2Right = false;
var our2Bottom = false;
/* 

    定时器 start

*/
var fishMoveTime;
// 玩家2移动
var our2fishMoveTime;
/* 

    定时器 end

*/
window.onkeydown = function (e) {
    // w 87
    // s 83 
    // a 65
    // d 68

    // ↑ 38 
    // ↓ 40
    // ← 37
    // → 39


    // 往上
    if (e.keyCode == 87) {
        fishTop = true;
    } else if (e.keyCode == 83) {
        fishBottom = true;
    } else if (e.keyCode == 65) {
        // console.log(1);
        fishLeft = true;
    } else if (e.keyCode == 68) {
        fishRight = true;
    } else if (e.keyCode == 38) {
        our2Top = true;
    } else if (e.keyCode == 40) {
        our2Bottom = true;
    } else if (e.keyCode == 37) {
        our2Left = true;
    } else if (e.keyCode == 39) {
        our2Right = true
    }
}

window.onkeyup = function (e) {
    // w 87
    // s 83 
    // a 65
    // d 68
    // 往上
    if (e.keyCode == 87) {
        fishTop = false
    } else if (e.keyCode == 83) {
        fishBottom = false;
    } else if (e.keyCode == 65) {
        fishLeft = false;
    } else if (e.keyCode == 68) {
        fishRight = false;
    } else if (e.keyCode == 38) {
        our2Top = false;
    } else if (e.keyCode == 40) {
        our2Bottom = false;
    } else if (e.keyCode == 37) {
        our2Left = false;
    } else if (e.keyCode == 39) {
        our2Right = false
    }
}

fishMoveTime = setInterval(fishMove, 50);
function fishMove() {
    if (ourFishNew.length != 0) {
        if (fishTop) {
            ourFishNew[0].moveTop();
            ourFishNew[0].ele.style.backgroundImage = 'url(./images/ourtop.png)';
            Theme.play();
        } else if (fishBottom) {
            ourFishNew[0].moveBottom();
            ourFishNew[0].ele.style.backgroundImage = 'url(./images/ourbottom.png)'
            Theme.play();
        } else if (fishLeft) {
            ourFishNew[0].moveLeft();
            ourFishNew[0].ele.style.backgroundImage = 'url(./images/ourleft.png)'
            Theme.play();
        } else if (fishRight) {
            ourFishNew[0].moveRight();
            ourFishNew[0].ele.style.backgroundImage = 'url(./images/our.png)'
            Theme.play();
        }
    }

}
// 玩家2移动
our2fishMoveTime = setInterval(our2FishMove, 50);
function our2FishMove() {
    if (our2play.style.display == 'block') {
        if (ourfishArr.length != 0) {
            if (our2Top) {
                ourfishArr[0].style.top = parseInt(ourfishArr[0].style.top) + -our2MoveSpeed + 'px';
                ourfishArr[0].style.backgroundImage = 'url(./images/ourtop.png)';
                if (parseInt(ourfishArr[0].style.top) <= 0) {
                    ourfishArr[0].style.top = 0 + 'px';
                }
            } else if (our2Bottom) {
                ourfishArr[0].style.top = parseInt(ourfishArr[0].style.top) + our2MoveSpeed + 'px';
                ourfishArr[0].style.backgroundImage = 'url(./images/ourbottom.png)';
                if (parseInt(ourfishArr[0].style.top) >= (gameInterface.clientHeight - parseInt(ourfishArr[0].style.width))) {
                    ourfishArr[0].style.top = gameInterface.clientHeight - parseInt(ourfishArr[0].style.width) + 'px';
                }
            } else if (our2Right) {
                ourfishArr[0].style.left = parseInt(ourfishArr[0].style.left) + our2MoveSpeed + 'px';
                ourfishArr[0].style.backgroundImage = 'url(./images/our.png)';
                if (parseInt(ourfishArr[0].style.left) >= (gameInterface.clientWidth - parseInt(ourfishArr[0].style.width))) {
                    ourfishArr[0].style.left = gameInterface.clientWidth - parseInt(ourfishArr[0].style.width) + 'px';
                }
            } else if (our2Left) {
                ourfishArr[0].style.left = parseInt(ourfishArr[0].style.left) + -our2MoveSpeed + 'px';
                ourfishArr[0].style.backgroundImage = 'url(./images/ourleft.png)';
                if (parseInt(ourfishArr[0].style.left) <= 0) {
                    ourfishArr[0].style.left = 0 + 'px';
                }
            }
        }
    }

}