/* 
    碰撞定时器 start
*/
// 我方与敌方小鱼碰撞
let ourOrPlaceCollideTime;
// 我方鱼与敌方大鱼碰撞
let ourOrPlaceBigCollideTime;
// 我方鱼与敌方大大鱼碰撞
let ourOrPlaceBig2CollideTime;
// 我方鱼鱼敌方大大大鱼碰撞
let ourOrPlaceBig3CollideTime;
// 我方鱼鱼敌方大大大大鱼碰撞
let ourOrPlaceBig4CollideTime;
// 我方鱼与道具碰撞
let propOrOurFishTime;
/* 

    碰撞定时器 end

*/
// 玩家一 积分表
let Number1 = $('#number1');
// 玩家二 积分表
let Number2 = $('#number2');
// 我方与敌方小鱼碰撞
ourOrPlaceCollideTime = setInterval(ourOrPlace, 50);

function ourOrPlace() {
    if (ourfishArr.length != 0 && localMinFishArr.length != 0) {
        for (var i = 0; i < ourfishArr.length; i++) {
            for (var j = 0; j < localMinFishArr.length; j++) {
                if (collision(ourfishArr[i], localMinFishArr[j].localfish)) {
                    if (parseInt(ourfishArr[i].getAttribute('life')) >= parseInt(localMinFishArr[j].localfish.getAttribute('life'))) {
                        if (ourfishArr[i].getAttribute('play') == '1') {
                            if (play1Number >= 30) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm++;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 1 + 'px';
                                ourfishArr[i].style.height = parseInt(ourfishArr[i].style.height) + 1 + 'px';
                            }
                            main.removeChild(localMinFishArr[j].localfish);
                            localMinFishArr.splice(j, 1);
                            eatVideo.play();
                            play1Number++;
                            Number1.innerText = play1Number;
                        } else if (ourfishArr[i].getAttribute('play') == '2') {
                            if (play2Number >= 30) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm++;
                                ourfishArr[i].setAttribute('life', sm)
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 1 + 'px';
                                ourfishArr[i].style.height = parseInt(ourfishArr[i].style.height) + 1 + 'px';
                            }
                            main.removeChild(localMinFishArr[j].localfish);
                            localMinFishArr.splice(j, 1);
                            eatVideo.play();
                            play2Number++;
                            Number2.innerText = play2Number;
                        }

                    }
                }
            }
        }
    }
}

// 血量条限制一条鱼
var HBBigflag = true;
// 血量条限制一条鱼玩家2
var HBBig2flag = true;
// 我方鱼与敌方大鱼碰撞
ourOrPlaceBigCollideTime = setInterval(ourOrplaceBig, 50);
function ourOrplaceBig() {

    if (ourfishArr.length != 0 && localBigFishArr.length != 0) {
        for (var i = 0; i < ourfishArr.length; i++) {
            for (var j = 0; j < localBigFishArr.length; j++) {
                // console.log(localBigFishArr[j]);
                if (collision(ourfishArr[i], localBigFishArr[j].localfish1)) {
                    if (parseInt(ourfishArr[i].getAttribute('life')) >= parseInt(localBigFishArr[j].localfish1.getAttribute('life'))) {
                        if (ourfishArr[i].getAttribute('play') == '1') {
                            if (play1Number >= 70) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm++;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 1 + 'px';
                                ourfishArr[i].style.height = parseInt(ourfishArr[i].style.height) + 1 + 'px';
                            }

                            main.removeChild(localBigFishArr[j].localfish1);
                            localBigFishArr.splice(j, 1);
                            eatVideo.play();
                            play1Number += 2;
                            Number1.innerText = play1Number;
                        } else if (ourfishArr[i].getAttribute('play') == '2') {
                            if (play2Number >= 70) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm++;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 1 + 'px';
                                ourfishArr[i].style.height = parseInt(ourfishArr[i].style.height) + 1 + 'px';
                            }
                            main.removeChild(localBigFishArr[j].localfish1);
                            localBigFishArr.splice(j, 1);
                            eatVideo.play();
                            play2Number += 2;
                            Number2.innerText = play2Number;
                        }
                    } else {
                        if (HBBigflag) {
                            if (ourfishArr[i].getAttribute('play') == '1') {
                                if (hb.children.length == 3) {
                                    // console.log()
                                    hb.removeChild(hb.children[0]);
                                    HBBigflag = false
                                    setTimeout(function () {
                                        HBBigflag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb.children.length == 2) {
                                    hb.removeChild(hb.children[0]);
                                    HBBigflag = false
                                    setTimeout(function () {
                                        HBBigflag = true;

                                    }, 2000);
                                    killVideo.play();
                                } else if (hb.children.length == 1) {
                                    hb.removeChild(hb.children[0]);
                                    HBBigflag = false
                                    setTimeout(function () {
                                        HBBigflag = true;
                                    }, 2000);
                                    killVideo.play();
                                }
                            }
                        }
                        if (HBBig2flag) {
                            if (ourfishArr[i].getAttribute('play') == '2') {
                                if (hb2.children.length == 3) {
                                    // console.log()
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb2.children.length == 2) {
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;

                                    }, 2000);
                                    killVideo.play();
                                } else if (hb2.children.length == 1) {
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


// 我方鱼与敌方大大鱼碰撞
ourOrPlaceBig2CollideTime = setInterval(ourOrplaceBig2, 50);
function ourOrplaceBig2() {
    if (ourfishArr.length != 0 && localBig2FishArr.length != 0) {
        for (var i = 0; i < ourfishArr.length; i++) {
            for (var j = 0; j < localBig2FishArr.length; j++) {
                // console.log(localBigFishArr[j]);
                if (collision(ourfishArr[i], localBig2FishArr[j].localfish2)) {
                    if (parseInt(ourfishArr[i].getAttribute('life')) >= parseInt(localBig2FishArr[j].localfish2.getAttribute('life'))) {
                        if (ourfishArr[i].getAttribute('play') == '1') {
                            if (play1Number >= 110) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm++;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 1.5 + 'px';
                                ourfishArr[0].style.height = parseInt(ourfishArr[i].style.height) + 1.5 + 'px';
                            }
                            main.removeChild(localBig2FishArr[j].localfish2);
                            localBig2FishArr.splice(j, 1);
                            eatVideo.play();
                            play1Number += 3;
                            Number1.innerText = play1Number;
                        } else if (ourfishArr[i].getAttribute('play') == '2') {
                            if (play2Number >= 110) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm++;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 1.5 + 'px';
                                ourfishArr[0].style.height = parseInt(ourfishArr[i].style.height) + 1.5 + 'px';
                            }
                            main.removeChild(localBig2FishArr[j].localfish2);
                            localBig2FishArr.splice(j, 1);
                            eatVideo.play();
                            play2Number += 3;
                            Number2.innerText = play2Number;
                        }

                    } else {
                        if (ourfishArr[i].getAttribute('play') == '1') {
                            if (HBBig2flag) {
                                if (hb.children.length == 3) {
                                    // console.log()
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb.children.length == 2) {
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb.children.length == 1) {
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                }
                            }
                        } else if (ourfishArr[i].getAttribute('play') == '2') {
                            if (HBBig2flag) {
                                if (hb2.children.length == 3) {
                                    // console.log()
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb2.children.length == 2) {
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb2.children.length == 1) {
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                }
                            }
                        }

                    }
                }
            }
        }
    }

}
// 我方鱼与敌方大大大鱼碰撞
ourOrPlaceBig3CollideTime = setInterval(ourOrplaceBig3, 50);
function ourOrplaceBig3() {
    if (ourfishArr.length != 0 && localBig3FishArr.length != 0) {
        for (var i = 0; i < ourfishArr.length; i++) {
            for (var j = 0; j < localBig3FishArr.length; j++) {
                // console.log(localBigFishArr[j]);
                if (collision(ourfishArr[i], localBig3FishArr[j].localfish3)) {
                    if (parseInt(ourfishArr[i].getAttribute('life')) >= parseInt(localBig3FishArr[j].localfish3.getAttribute('life'))) {
                        if (ourfishArr[i].getAttribute('play') == '1') {
                            if (play1Number >= 130) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm += 2;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 2 + 'px';
                                ourfishArr[i].style.height = parseInt(ourfishArr[i].style.height) + 2 + 'px';
                            }
                            main.removeChild(localBig3FishArr[j].localfish3);
                            localBig3FishArr.splice(j, 1);
                            eatVideo.play();
                            play1Number += 4;
                            Number1.innerText = play1Number;
                        } else if (ourfishArr[i].getAttribute('play') == '2') {
                            if (play2Number >= 130) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm += 2;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 2 + 'px';
                                ourfishArr[i].style.height = parseInt(ourfishArr[i].style.height) + 2 + 'px';
                            }
                            main.removeChild(localBig3FishArr[j].localfish3);
                            localBig3FishArr.splice(j, 1);
                            eatVideo.play();
                            play2Number += 4;
                            Number2.innerText = play2Number;
                        }
                    } else {
                        if (ourfishArr[i].getAttribute('play') == '1') {
                            if (HBBig2flag) {
                                if (hb.children.length == 3) {
                                    // console.log()
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb.children.length == 2) {
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb.children.length == 1) {
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                }
                            }
                        } else if (ourfishArr[i].getAttribute('play') == '2') {
                            if (HBBig2flag) {
                                if (hb2.children.length == 3) {
                                    // console.log()
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb2.children.length == 2) {
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb2.children.length == 1) {
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                }
                            }
                        }

                    }
                }
            }
        }
    }
}

//  我方鱼与敌方大大大大鱼碰撞
ourOrPlaceBig4CollideTime = setInterval(ourOrplaceBig4, 50);
function ourOrplaceBig4() {
    if (ourfishArr.length != 0 && localBig4FishArr.length != 0) {
        for (var i = 0; i < ourfishArr.length; i++) {
            for (var j = 0; j < localBig4FishArr.length; j++) {
                // console.log(localBigFishArr[j]);
                if (collision(ourfishArr[i], localBig4FishArr[j])) {
                    if (parseInt(ourfishArr[i].getAttribute('life')) >= parseInt(localBig4FishArr[j].getAttribute('life'))) {
                        if (ourfishArr[i].getAttribute('play') == '1') {
                            if (play1Number >= 150) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm += 2;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 2 + 'px';
                                ourfishArr[i].style.height = parseInt(ourfishArr[i].style.height) + 2 + 'px';
                            }
                            main.removeChild(localBig4FishArr[j]);
                            localBig4FishArr.splice(j, 1);
                            eatVideo.play();
                            play1Number += 5;
                            Number1.innerText = play1Number;
                        } else if (ourfishArr[i].getAttribute('play') == '2') {
                            if (play2Number >= 150) {
                                var sm = parseInt(ourfishArr[i].getAttribute('life'));
                                sm += 2;
                                ourfishArr[i].setAttribute('life', sm);
                                ourfishArr[i].style.width = parseInt(ourfishArr[i].style.width) + 2 + 'px';
                                ourfishArr[i].style.height = parseInt(ourfishArr[i].style.height) + 2 + 'px';
                            }
                            main.removeChild(localBig4FishArr[j]);
                            localBig4FishArr.splice(j, 1);
                            eatVideo.play();
                            play2Number += 5;
                            Number2.innerText = play2Number;
                        }
                    } else {
                        if (ourfishArr[i].getAttribute('play') == '1') {
                            if (HBBig2flag) {
                                if (hb.children.length == 3) {
                                    // console.log()
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb.children.length == 2) {
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb.children.length == 1) {
                                    hb.removeChild(hb.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                }
                            }
                        } else if (ourfishArr[i].getAttribute('play') == '2') {
                            if (HBBig2flag) {
                                if (hb2.children.length == 3) {
                                    // console.log()
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb2.children.length == 2) {
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                } else if (hb2.children.length == 1) {
                                    hb2.removeChild(hb2.children[0]);
                                    HBBig2flag = false
                                    setTimeout(function () {
                                        HBBig2flag = true;
                                    }, 2000);
                                    killVideo.play();
                                }
                            }
                        }

                    }
                }
            }
        }
    }
}


propOrOurFishTime = setInterval(propOrOurFish, 50);
// 冰冻数组
let frostArr = [];
// 冰冻道具与我方小鱼碰撞
function propOrOurFish() {
    if (ourfishArr.length != 0 && propsArr.length != 0) {
        for (var i = 0; i < ourfishArr.length; i++) {
            for (var j = 0; j < propsArr.length; j++) {
                if (collision(ourfishArr[i], propsArr[j])) {
                    main.removeChild(propsArr[j]);
                    propsArr.splice(j, 1);
                    // 删除敌方小鱼定时器
                    clearInterval(createMinFishTime);
                    // 删除敌方小鱼移动定时器
                    clearInterval(lcoalMinFishMoveTime);
                    // 删除敌方大鱼 定时器
                    clearInterval(createBigFishTime);
                    // 删除敌方大鱼移动 定时器
                    clearInterval(localBigFishMoveTime);
                    // 删除敌方大大鱼 定时器
                    clearInterval(createBig2FishTime);
                    // 删除敌方大大鱼移动 定时器
                    clearInterval(localBig2FishMoveTime);

                    // 删除敌方大大大鱼移动 定时器
                    clearInterval(localBig3FishMoveTime);

                    // 敌方大大大大鱼fish4定时器
                    clearInterval(localBig4FishMoveTime);
                    for (var k = 0; k < localMinFishArr.length; k++) {
                        var bingdong = document.createElement('div');
                        bingdong.style.position = 'absolute';
                        bingdong.style.backgroundSize = '100% 100%';
                        bingdong.style.backgroundImage = 'url(./images/bingdong.png)';
                        bingdong.style.width = 50 + 'px';
                        bingdong.style.height = 50 + 'px';
                        localMinFishArr[k].localfish.appendChild(bingdong);
                        frostArr.push(bingdong);
                    }
                    for (var k = 0; k < localBigFishArr.length; k++) {
                        var bingdong = document.createElement('div');
                        bingdong.style.position = 'absolute';
                        bingdong.style.backgroundSize = '100% 100%';
                        bingdong.style.backgroundImage = 'url(./images/bingdong.png)';
                        bingdong.style.width = 50 + 'px';
                        bingdong.style.height = 50 + 'px';
                        localBigFishArr[k].localfish1.appendChild(bingdong);
                        frostArr.push(bingdong);
                    }
                    for (var k = 0; k < localBig2FishArr.length; k++) {
                        var bingdong = document.createElement('div');
                        bingdong.style.position = 'absolute';
                        bingdong.style.backgroundSize = '100% 100%';
                        bingdong.style.backgroundImage = 'url(./images/bingdong.png)';
                        bingdong.style.width = 50 + 'px';
                        bingdong.style.height = 50 + 'px';
                        localBig2FishArr[k].localfish2.appendChild(bingdong);
                        frostArr.push(bingdong);
                    }
                    for (var k = 0; k < localBig3FishArr.length; k++) {
                        var bingdong = document.createElement('div');
                        bingdong.style.position = 'absolute';
                        bingdong.style.backgroundSize = '100% 100%';
                        bingdong.style.backgroundImage = 'url(./images/bingdong.png)';
                        bingdong.style.width = 50 + 'px';

                        bingdong.style.height = 50 + 'px';
                        localBig3FishArr[k].localfish3.appendChild(bingdong);
                        frostArr.push(bingdong);
                    }
                    for (var k = 0; k < localBig4FishArr.length; k++) {
                        var bingdong = document.createElement('div');
                        bingdong.style.position = 'absolute';
                        bingdong.style.backgroundSize = '100% 100%';
                        bingdong.style.backgroundImage = 'url(./images/bingdong.png)';
                        bingdong.style.width = 50 + 'px';
                        bingdong.style.height = 50 + 'px';

                        localBig4FishArr[k].appendChild(bingdong);
                        frostArr.push(bingdong);
                    }
                    setTimeout(function () {
                        for (var i = 0; i < frostArr.length; i++) {
                            for (var j = 0; j < localMinFishArr.length; j++) {
                                localMinFishArr[j].localfish.innerHTML = '';
                                // localMinFishArr.localfish.removeChild();
                            }
                            for (var k = 0; k < localBigFishArr.length; k++) {
                                localBigFishArr[k].localfish1.innerHTML = '';
                            }
                            for (var c = 0; c < localBig2FishArr.length; c++) {
                                localBig2FishArr[c].localfish2.innerHTML = '';
                            }
                            for (var b = 0; b < localBig3FishArr.length; b++) {
                                localBig3FishArr[b].localfish3.innerHTML = '';
                            }
                            for (var q = 0; q < localBig4FishArr.length; q++) {
                                localBig4FishArr[q].innerHTML = '';
                            }
                        }

                        // 创建敌方小鱼定时器
                        createMinFishTime = setInterval(getCreateMinFish, 1000);
                        // 敌方小鱼移动定时器
                        lcoalMinFishMoveTime = setInterval(localMinFishMove, 50);
                        // 创建大鱼定时器
                        createBigFishTime = setInterval(getCreateBigFish, 6000);
                        // 创建大鱼移动定时器
                        localBigFishMoveTime = setInterval(localBigFishMove, 50);
                        // 创建大大鱼定时器
                        createBig2FishTime = setInterval(getCreateBig2Fish, 15000);
                        // 创建大大鱼移动定时器
                        localBig2FishMoveTime = setInterval(localBig2FishMove, 50);

                        // 创建大大大鱼移动定时器
                        localBig3FishMoveTime = setInterval(localBig3FishMove, 50);

                        // 敌方大大大大鱼fish4定时器
                        localBig4FishMoveTime = setInterval(localBig4FishMove, 50);
                    }, 2000);
                }
            }
        }
    }
}
