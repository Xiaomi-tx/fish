function $(element) {
    return document.querySelector(element);
}
// 获取背景
var main = $('.gameInterface');
// 获取被吃音效
var eatVideo = $('#eat');
// 获取被杀音效
var killVideo = $("#kill");
// 主题曲
var Theme = $('#Theme');
// 重新开始按钮
var reStart = $('.restart');
// 重新开始按钮b
var reStartB = $('.restartb');
// 我方小鱼实例对象
var ourFishNew = [];
// 血管玩家2
let player2 = $('.player2');
// 开始游戏按钮
var startGameButton = $('.startGame');
// 颜色管理
let fishColor;
// 玩家2颜色管理
let fishColor1;
/* 

    创建鱼定时器
    start
*/
// 创建敌方小鱼定时器
let createMinFishTime;
// 敌方小鱼移动定时器
let lcoalMinFishMoveTime;
// 创建敌方大鱼 定时器
let createBigFishTime;
// 创建敌方大鱼移动 定时器
let localBigFishMoveTime;
// 创建敌方大大鱼 定时器
let createBig2FishTime;
// 创建敌方大大鱼移动 定时器
let localBig2FishMoveTime;
// 创建大大大与定时器
let createBig3FishTime;
// 创建大大大鱼移动定时器
let localBig3FishMoveTime;
// 创建大大大大鱼移动定时器
let createBig4FishTime;
// 敌方大大大大鱼fish4定时器
let localBig4FishMoveTime;
/* 

    创建鱼定时器
    end

*/
// 玩家2移动速度
let our2MoveSpeed = 10;
// 敌方小鱼速度
let varlocalMinFishMove = 8;
// 敌方大鱼速度
let varlocalBigFishMove = 3;
// 敌方大大鱼速度
let varlocalBig2FishMove = 2;
// 敌方大大大鱼速度
let varlocalBig3FishMove = 2;
// 敌方大大大大鱼速度
let varlocalBig4FishMove = 2;
// 我方小鱼数组
var ourfishArr = [];
// 敌方小鱼数组
var localMinFishArr = [];
// 敌方大鱼数组
var localBigFishArr = [];
// 敌方大大鱼数组
var localBig2FishArr = [];
// 敌方大大大鱼数组 
var localBig3FishArr = [];
// 敌方大大大鱼数组 
var localBig4FishArr = [];
// 道具数组
var propsArr = [];
// 小鱼x轴随机数
var localMinFishrandom;
// 大鱼X轴随机数
var localBigFishrandom;
// 大大鱼X轴随机数
var localBig2Fishrandom;
// 大大哒鱼X轴随机数
var localBig3Fishrandom;
// 大大大大鱼X轴随机数
var localBig4Fishrandom;
// 玩家一 积分
let play1Number = 0;
// 玩家二 积分
let play2Number = 0;

// 开始游戏
var startgame = $('.startgame');
// 背景
var gameInterface = $('.gameInterface');

// 创建我方小鱼1
function createFish(ele, imgSrc, w, h, x, y, life, speed, color) {
    this.ele = ele;
    this.imgSrc = imgSrc;
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.life = life;
    this.speed = speed;
    this.color = color;
}

createFish.prototype.init = function () {
    this.ele = document.createElement('div');
    this.ele.setAttribute('play', 1);
    this.ele.setAttribute('life', this.life);
    this.ele.style.position = 'absolute';
    this.ele.style.width = this.w + 'px';
    this.ele.style.height = this.h + 'px';
    this.ele.style.left = this.x + 'px';
    this.ele.style.top = this.y + 'px';
    this.ele.style.boxShadow = `0 0 10px 2px ${this.color}`;
    this.ele.style.backgroundImage = `url(images/our.png)`;
    this.ele.style.borderRadius = '50%';
    this.ele.style.backgroundSize = '100% 100%';
    main.appendChild(this.ele);
    return this.ele;
}
createFish.prototype.moveTop = function () {
    this.ele.style.top = parseInt(this.ele.style.top) + -this.speed + 'px';
    if (parseInt(this.ele.style.top) <= 0) {
        this.ele.style.top = 0 + 'px';
    }
}
createFish.prototype.moveBottom = function () {
    this.ele.style.top = parseInt(this.ele.style.top) + this.speed + 'px';
    if (parseInt(this.ele.style.top) >= (500 - parseInt(this.ele.style.height))) {
        this.ele.style.top = 500 - parseInt(this.ele.style.height) + 'px';
    }
}
createFish.prototype.moveLeft = function () {
    this.ele.style.left = parseInt(this.ele.style.left) + -this.speed + 'px';
    if (parseInt(this.ele.style.left) <= 0) {
        this.ele.style.left = 0 + 'px';
    }
}
createFish.prototype.moveRight = function () {
    this.ele.style.left = parseInt(this.ele.style.left) + this.speed + 'px';
    if (parseInt(this.ele.style.left) >= (620 - parseInt(this.ele.style.width))) {
        this.ele.style.left = 620 - parseInt(this.ele.style.width) + 'px';
    }
}
// 创建玩家2
function CreateOur2Fish() {
    this.our2 = document.createElement('div');
    this.our2.setAttribute('play', 2);
    this.our2.setAttribute('life', 20);
    this.our2.style.width = 40 + 'px';
    this.our2.style.height = 40 + 'px';
    this.our2.style.backgroundImage = 'url(./images/our.png)';
    this.our2.style.backgroundSize = '100% 100%';
    this.our2.style.boxShadow = `0 0 10px 2px ${fishColor1}`;
    this.our2.style.position = 'absolute';
    this.our2.style.top = 40 + 'px';
    this.our2.style.left = 20 + 'px';
    this.our2.style.borderRadius = '50%';
    main.appendChild(this.our2);
    return this.our2;
}



// 创建敌方小鱼
function CreateLocalMinFish(localfish, x, y, Minw, Minh) {
    this.localfish = localfish
    this.Minw = Minw;
    this.Minh = Minh;
    this.x = x;
    this.y = y;
}
CreateLocalMinFish.prototype.initMinFish = function () {
    this.localfish = document.createElement('div');
    this.localfish.setAttribute('life', 20);
    this.localfish.style.position = 'absolute';
    if (localMinFishrandom == 1) {
        this.localfish.setAttribute('id', 'left');
    } else if (localMinFishrandom == 2) {
        this.localfish.setAttribute('id', 'right');
    }
    this.localfish.style.top = this.y + 'px';
    this.localfish.style.left = this.x + 'px';
    this.localfish.style.width = this.Minw + 'px';
    this.localfish.style.height = this.Minh + 'px';
    this.localfish.style.backgroundImage = 'url(./images/localfish2.png)';
    this.localfish.style.backgroundSize = '100% 100%';
    main.appendChild(this.localfish);
    return this.localfish;
}


// 创建敌方fish1
function CreateLocalFish1(localfish1, x, y, Minw, Minh) {
    this.localfish1 = localfish1
    this.Minw = Minw;
    this.Minh = Minh;
    this.x = x;
    this.y = y;
}
CreateLocalFish1.prototype.initFish1 = function () {
    this.localfish1 = document.createElement('div');
    this.localfish1.setAttribute('life', 40);
    if (localBigFishrandom == 1) {
        this.localfish1.setAttribute('id', 'left');
    } else if (localBigFishrandom == 2) {
        this.localfish1.setAttribute('id', 'right');
    }
    this.localfish1.style.position = 'absolute';
    this.localfish1.style.top = this.y + 'px';
    this.localfish1.style.left = this.x + 'px';
    this.localfish1.style.width = this.Minw + 'px';
    this.localfish1.style.height = this.Minh + 'px';
    this.localfish1.style.backgroundImage = 'url(./images/localfish3.png)';
    this.localfish1.style.backgroundSize = '100% 100%';
    main.appendChild(this.localfish1);
    return this.localfish1;
}

// 创建敌方fish2
function CreateLocalFish2(localfish2, x, y, Minw, Minh) {
    this.localfish2 = localfish2
    this.Minw = Minw;
    this.Minh = Minh;
    this.x = x;
    this.y = y;
}
CreateLocalFish2.prototype.initFish2 = function () {
    this.localfish2 = document.createElement('div');
    this.localfish2.setAttribute('life', 50);
    // console.log(localBig2Fishrandom);
    if (localBig2Fishrandom == 1) {
        this.localfish2.setAttribute('id', 'left');
    } else if (localBig2Fishrandom == 2) {
        this.localfish2.setAttribute('id', 'right');
    }
    this.localfish2.style.position = 'absolute';
    this.localfish2.style.top = this.y + 'px';
    this.localfish2.style.left = this.x + 'px';
    this.localfish2.style.width = this.Minw + 'px';
    this.localfish2.style.height = this.Minh + 'px';
    this.localfish2.style.backgroundImage = 'url(./images/localfish5.png)';
    this.localfish2.style.backgroundSize = '100% 100%';
    main.appendChild(this.localfish2);
    return this.localfish2;
}
// 创建敌方fish3
function CreateLocalFish3(localfish3, x, y, Minw, Minh) {
    this.localfish3 = localfish3
    this.Minw = Minw;
    this.Minh = Minh;
    this.x = x;
    this.y = y;
}
CreateLocalFish3.prototype.initFish3 = function () {
    this.localfish3 = document.createElement('div');
    this.localfish3.setAttribute('life', 80);
    // console.log(localBig2Fishrandom);
    if (localBig3Fishrandom == 1) {
        this.localfish3.setAttribute('id', 'left');
    } else if (localBig3Fishrandom == 2) {
        this.localfish3.setAttribute('id', 'right');
    }
    this.localfish3.style.position = 'absolute';
    this.localfish3.style.display = 'flex';
    this.localfish3.style.justifyContent = 'center';
    this.localfish3.style.alignItems = 'center';
    this.localfish3.style.top = this.y + 'px';
    this.localfish3.style.left = this.x + 'px';
    this.localfish3.style.width = this.Minw + 'px';
    this.localfish3.style.height = this.Minh + 'px';
    this.localfish3.style.backgroundImage = 'url(./images/localfish1.png)';
    this.localfish3.style.backgroundSize = '100% 100%';
    main.appendChild(this.localfish3);
    return this.localfish3;
}

// 创建敌方fish4
function CreateLocalFish4() {
    localBig4Fishrandom = Math.floor(1 + Math.random() * 2);
    this.localfish4 = document.createElement('div');
    this.localfish4.style.position = 'absolute';
    this.localfish4.style.width = 120 + 'px';
    this.localfish4.style.height = 120 + 'px';
    this.localfish4.setAttribute('life', 120);
    if (localBig4Fishrandom == 1) {
        this.localfish4.setAttribute('id', 'left');
        this.localfish4.style.top = Math.floor(Math.random() * 380) + 'px';
        this.localfish4.style.left = -120 + 'px';
        this.localfish4.style.backgroundImage = 'url(./images/localfish4.png)';

    } else if (localBig4Fishrandom == 2) {
        this.localfish4.setAttribute('id', 'right');
        this.localfish4.style.top = Math.floor(Math.random() * 380) + 'px';
        this.localfish4.style.left = 650 + 'px';
        this.localfish4.style.backgroundImage = 'url(./images/localfish4left.png)';
    }
    this.localfish4.style.display = 'flex';
    this.localfish4.style.justifyContent = 'center';
    this.localfish4.style.alignItems = 'center';
    this.localfish4.style.backgroundSize = '100% 100%';
    main.appendChild(this.localfish4);
    return this.localfish4;
}
// 创建敌方大大大大鱼fish4
function getCreateBig4Fish() {
    let LocalFish4 = new CreateLocalFish4();
    localBig4FishArr.push(LocalFish4);
}

// 敌方大大大大鱼fish4移动
function localBig4FishMove() {
    if (localBig4FishArr.length != 0) {
        for (var i = 0; i < localBig4FishArr.length; i++) {
            if (localBig4FishArr[i].getAttribute('id') == 'left') {
                localBig4FishArr[i].style.left = parseInt(localBig4FishArr[i].style.left) + varlocalBig4FishMove + 'px';
                if (parseInt(localBig4FishArr[i].style.left) >= 640) {
                    main.removeChild(localBig4FishArr[i]);
                    localBig4FishArr.splice(i, 1);
                }
            } else if (localBig4FishArr[i].getAttribute('id') == 'right') {
                localBig4FishArr[i].style.left = parseInt(localBig4FishArr[i].style.left) + -varlocalBig4FishMove + 'px';
                if (parseInt(localBig4FishArr[i].style.left) <= -120) {
                    main.removeChild(localBig4FishArr[i]);
                    localBig4FishArr.splice(i, 1);
                }
            }
        }
    }
}


startgame.onclick = function () {
    game();
}

startGameButton.onclick = function () {
    var start = $('.start');
    start.style.display = 'none';
    var electColor = $('.electColor');
    electColor.style.display = 'block';
}
function game() {
    if (our2play.style.display == 'block') {
        // 创建我玩家2
        let our2 = new CreateOur2Fish();
        ourfishArr.push(our2);
    } else {
        player2.style.display = 'none';
    }
    var electColor = $('.electColor');
    electColor.style.display = 'none';
    var gameInterface = $('.gameInterface');
    gameInterface.style.display = 'block';
    var header = $('.header');
    header.style.display = 'flex';
    var start = $('.start');
    start.style.display = 'none';
    let our = new createFish('', './images/our.png', 40, 40, 10, 10, 20, 10, fishColor);
    let ourfishthe = our.init();
    ourfishArr.push(ourfishthe);
    ourFishNew.push(our);
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
    // 创建大大大与定时器
    createBig3FishTime = setInterval(getCreateBig3Fish, 15000);
    // 创建大大大鱼移动定时器
    localBig3FishMoveTime = setInterval(localBig3FishMove, 50);
    // 创建大大大大鱼定时器
    createBig4FishTime = setInterval(getCreateBig4Fish, 15000);
    // 敌方大大大大鱼fish4定时器
    localBig4FishMoveTime = setInterval(localBig4FishMove, 50);
    // 道具倒计时
    BigFishGoTime = setInterval(BigFish, 1000);
}




// 初始化小鱼
function getCreateMinFish() {
    // 小鱼x轴随机数
    localMinFishrandom = Math.floor(1 + Math.random() * 2);
    if (localMinFishrandom == 1) {
        let localMinFish = new CreateLocalMinFish('', -40, Math.floor(48 + Math.random() * (480 - 48)), 40, 20);
        localMinFish.initMinFish();
        // 敌方小鱼实例对象
        localMinFishArr.push(localMinFish)
    } else if (localMinFishrandom == 2) {
        let localMinFish = new CreateLocalMinFish('', 640, Math.floor(48 + Math.random() * (480 - 48)), 40, 20);
        localMinFish.initMinFish();
        // 敌方小鱼实例对象
        localMinFishArr.push(localMinFish);
    }

}


// 敌方小鱼移动
function localMinFishMove() {
    for (var i = 0; i < localMinFishArr.length; i++) {
        if (localMinFishArr[i].localfish.getAttribute('id') == 'right') {
            localMinFishArr[i].localfish.style.backgroundImage = 'url(./images/localfish2left.png)'
            localMinFishArr[i].localfish.style.left = parseInt(localMinFishArr[i].localfish.style.left) + -varlocalMinFishMove + 'px';
            if (parseInt(localMinFishArr[i].localfish.style.left) <= -40) {
                main.removeChild(localMinFishArr[i].localfish);
                localMinFishArr.splice(i, 1);
            }
        } else if (localMinFishArr[i].localfish.getAttribute('id') == 'left') {
            localMinFishArr[i].localfish.style.left = parseInt(localMinFishArr[i].localfish.style.left) + varlocalMinFishMove + 'px';
            if (parseInt(localMinFishArr[i].localfish.style.left) >= 620) {
                main.removeChild(localMinFishArr[i].localfish);
                localMinFishArr.splice(i, 1);
            }
        }
    }
}


// 初始化大鱼
function getCreateBigFish() {
    localBigFishrandom = Math.floor(1 + Math.random() * 2);
    if (localBigFishrandom == 1) {
        let localFish1 = new CreateLocalFish1('', -50, Math.floor(0 + Math.random() * (420 - 0)), 60, 60);
        localFish1.initFish1();
        localBigFishArr.push(localFish1);
    } else if (localBigFishrandom == 2) {
        let localFish1 = new CreateLocalFish1('', 670, Math.floor(0 + Math.random() * (420 - 0)), 60, 60);
        localFish1.initFish1();
        localBigFishArr.push(localFish1);
    }
}

// 敌方大鱼移动
function localBigFishMove() {
    for (var i = 0; i < localBigFishArr.length; i++) {
        if (localBigFishArr[i].localfish1.getAttribute('id') == 'right') {
            localBigFishArr[i].localfish1.style.backgroundImage = 'url(./images/localfish3left.png)'
            localBigFishArr[i].localfish1.style.left = parseInt(localBigFishArr[i].localfish1.style.left) + -varlocalBigFishMove + 'px';
            if (parseInt(localBigFishArr[i].localfish1.style.left) <= -40) {
                main.removeChild(localBigFishArr[i].localfish1);
                localBigFishArr.splice(i, 1);
            }
        } else if (localBigFishArr[i].localfish1.getAttribute('id') == 'left') {
            localBigFishArr[i].localfish1.style.left = parseInt(localBigFishArr[i].localfish1.style.left) + varlocalBigFishMove + 'px';
            if (parseInt(localBigFishArr[i].localfish1.style.left) >= 620) {
                main.removeChild(localBigFishArr[i].localfish1);
                localBigFishArr.splice(i, 1);
            }
        }
    }
}

// 初始化大大鱼
function getCreateBig2Fish() {
    localBig2Fishrandom = Math.floor(1 + Math.random() * 2);

    if (localBig2Fishrandom == 1) {
        let localFish2 = new CreateLocalFish2('', -50, Math.floor(0 + Math.random() * (400 - 0)), 70, 70);
        localFish2.initFish2();
        localBig2FishArr.push(localFish2);
        // console.log(localBig2FishArr)
    } else if (localBig2Fishrandom == 2) {
        let localFish2 = new CreateLocalFish2('', 670, Math.floor(50 + Math.random() * (400 - 50)), 70, 70);
        localFish2.initFish2();
        localBig2FishArr.push(localFish2);
        // console.log(localBig2FishArr)
    }
}

// 敌方大大鱼移动
function localBig2FishMove() {
    if (localBig2FishArr.length != 0) {
        for (var i = 0; i < localBig2FishArr.length; i++) {
            if (localBig2FishArr[i].localfish2.getAttribute('id') == 'right') {
                localBig2FishArr[i].localfish2.style.backgroundImage = 'url(./images/localfish5left.png)'
                localBig2FishArr[i].localfish2.style.left = parseInt(localBig2FishArr[i].localfish2.style.left) + -varlocalBig2FishMove + 'px';
                if (parseInt(localBig2FishArr[i].localfish2.style.left) <= -40) {
                    main.removeChild(localBig2FishArr[i].localfish2);
                    localBig2FishArr.splice(i, 1);
                }
            } else if (localBig2FishArr[i].localfish2.getAttribute('id') == 'left') {
                localBig2FishArr[i].localfish2.style.left = parseInt(localBig2FishArr[i].localfish2.style.left) + varlocalBig2FishMove + 'px';
                if (parseInt(localBig2FishArr[i].localfish2.style.left) >= 680) {
                    main.removeChild(localBig2FishArr[i].localfish2);
                    localBig2FishArr.splice(i, 1);
                }
            }
        }
    }

}

// 初始化大大大鱼
function getCreateBig3Fish() {
    localBig3Fishrandom = Math.floor(1 + Math.random() * 2);
    if (localBig3Fishrandom == 1) {
        let localFish3 = new CreateLocalFish3('', -50, Math.floor(0 + Math.random() * (400 - 0)), 140, 100);
        localFish3.initFish3();
        localBig3FishArr.push(localFish3);
        // console.log(localBig2FishArr)
    } else if (localBig3Fishrandom == 2) {
        let localFish3 = new CreateLocalFish3('', 670, Math.floor(50 + Math.random() * (400 - 50)), 140, 100);
        localFish3.initFish3();
        localBig3FishArr.push(localFish3);
        // console.log(localBig2FishArr)
    }
}

// 敌方大大大鱼移动
function localBig3FishMove() {
    if (localBig3FishArr.length != 0) {
        for (var i = 0; i < localBig3FishArr.length; i++) {
            if (localBig3FishArr[i].localfish3.getAttribute('id') == 'right') {
                localBig3FishArr[i].localfish3.style.backgroundImage = 'url(./images/localfish1left.png)'
                localBig3FishArr[i].localfish3.style.left = parseInt(localBig3FishArr[i].localfish3.style.left) + -varlocalBig3FishMove + 'px';
                if (parseInt(localBig3FishArr[i].localfish3.style.left) <= -40) {
                    main.removeChild(localBig3FishArr[i].localfish3);
                    localBig3FishArr.splice(i, 1);
                }
            } else if (localBig3FishArr[i].localfish3.getAttribute('id') == 'left') {
                localBig3FishArr[i].localfish3.style.left = parseInt(localBig3FishArr[i].localfish3.style.left) + varlocalBig3FishMove + 'px';
                if (parseInt(localBig3FishArr[i].localfish3.style.left) >= 680) {
                    main.removeChild(localBig3FishArr[i].localfish3);
                    localBig3FishArr.splice(i, 1);
                }
            }
        }
    }

}

// 道具构造函数
function CreateProp() {
    this.prop = document.createElement('div');
    this.prop.style.width = 40 + 'px';
    this.prop.style.height = 40 + 'px';
    this.prop.style.position = 'absolute';
    this.prop.style.top = Math.floor(Math.random() * 460) + 'px';
    this.prop.style.left = Math.floor(Math.random() * 580) + 'px';
    this.prop.style.backgroundImage = 'url(./images/props.png)';
    this.prop.style.backgroundSize = '100% 100%';
    main.appendChild(this.prop);
    return this.prop;
}


