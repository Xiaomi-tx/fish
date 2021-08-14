/* 

    定时器 start

*/
// 道具出现倒计时
let BigFishGoTime;
// 道具生存倒计时
let propTime;
/* 

    定时器 end

*/
// 道具来临倒计时
let BigFishTime = 10;

function BigFish() {
    if (BigFishTime <= 0) {
        BigFishTime = 20;
        let prop = new CreateProp();
        propsArr.push(prop);
        propTime = setTimeout(proplifeTime, 4000);
    } else {
        BigFishTime--;
    }
}
// 道具生存时间倒计时

function proplifeTime() {
    if (propsArr.length != 0) {
        main.removeChild(propsArr[0]);
        propsArr.splice(0);
    }

}
// 玩家1血量条
let hb = $('#HealthBar1');
// 玩家2血量条
let hb2 = $('#HealthBar2');
// 血量条一删除我方小鱼
let hb1flag = true;
// 血量条一删除我方小鱼2
let hb2flag = true;
// 游戏结束
function gameOver() {
    if (hb.children.length <= 0) {
        if (hb1flag) {
            if (ourfishArr.length <= 1) {
                main.removeChild(ourfishArr[0]);
                ourfishArr.splice(0, 1);
                hb1flag = false;
            } else {
                main.removeChild(ourfishArr[1]);
                ourfishArr.splice(1, 1);
                hb1flag = false;
            }

        }

    }
    if (hb2.children.length <= 0) {
        if (hb2flag) {
            main.removeChild(ourfishArr[0]);
            ourfishArr.splice(0, 1);
            hb2flag = false;
        }

    }
    // 历史记录
    // if (stringHistory) {
    //     if (parseInt(JSON.parse(stringHistory).num) >= parseInt(JSON.parse(localStorage.getItem('history')).num)) {
    //         localStorage.setItem('history', stringHistory);
    //     }
    // }




    if (our2play.style.display == 'block') {
        if (Number1.innerText != 0 || Number2.innerText != 0) {
            if (Number1.innerText >= 200 || Number2.innerText >= 200) {
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
                // 删除敌方大大大鱼 定时器
                clearInterval(createBig3FishTime);
                // 删除敌方大大大鱼移动 定时器
                clearInterval(localBig3FishMoveTime);
                // 创建大大大大鱼定时器
                clearInterval(createBig4FishTime);
                // 敌方大大大大鱼fish4定时器
                clearInterval(localBig4FishMoveTime);
                // 删除道具生存
                clearInterval(BigFishGoTime);
                // 背景移动
                clearInterval(backMoveTime);
                for (var i = 0; i < ourfishArr.length; i++) {
                    main.removeChild(ourfishArr[i]);
                }
                for (var i = 0; i < localMinFishArr.length; i++) {
                    main.removeChild(localMinFishArr[i].localfish);
                }
                for (var i = 0; i < localBigFishArr.length; i++) {
                    main.removeChild(localBigFishArr[i].localfish1);
                }
                for (var i = 0; i < localBig2FishArr.length; i++) {
                    main.removeChild(localBig2FishArr[i].localfish2);
                }
                if (localBig3FishArr.length != 0) {
                    for (var i = 0; i < localBig3FishArr.length; i++) {
                        main.removeChild(localBig3FishArr[i].localfish3);
                    }
                }
                if (localBig4FishArr.length != 0) {
                    for (var i = 0; i < localBig4FishArr.length; i++) {
                        main.removeChild(localBig4FishArr[i]);
                    }
                }
                if (propsArr.length != 0) {
                    for (var i = 0; i < propsArr.length; i++) {
                        main.removeChild(propsArr[i]);
                    }
                }
                // 我方小鱼数组
                ourfishArr.splice(0);
                // 敌方小鱼数组
                localMinFishArr.splice(0);
                // 敌方大鱼数组
                localBigFishArr.splice(0);
                // 敌方大大鱼数组
                localBig2FishArr.splice(0);
                // 敌方大大大鱼数组
                localBig3FishArr.splice(0);
                // 敌方大大大鱼数组
                localBig4FishArr.splice(0);
                // 我放小鱼实例对象
                ourFishNew.splice(0);
                // 道具数组l
                if (propsArr.length != 0) {
                    propsArr.splice(0);
                }

                // 头部
                var header = $('.header');
                // 背景
                var gameInterface = $('.gameInterface');
                // 游戏结束
                var win = $('.win');
                win.style.display = 'block';
                gameInterface.style.display = 'none';
                header.style.display = 'none';
                Theme.pause();
            }
        }
        if (hb.children.length <= 0 && hb2.children.length <= 0) {
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
            // 删除敌方大大大鱼 定时器
            clearInterval(createBig3FishTime);
            // 删除敌方大大大鱼移动 定时器
            clearInterval(localBig3FishMoveTime);
            // 创建大大大大鱼定时器
            clearInterval(createBig4FishTime);
            // 敌方大大大大鱼fish4定时器
            clearInterval(localBig4FishMoveTime);
            // 删除道具生存
            clearInterval(BigFishGoTime);
            // 背景移动
            clearInterval(backMoveTime);
            for (var i = 0; i < ourfishArr.length; i++) {
                main.removeChild(ourfishArr[i]);
            }
            for (var i = 0; i < localMinFishArr.length; i++) {
                main.removeChild(localMinFishArr[i].localfish);
            }
            for (var i = 0; i < localBigFishArr.length; i++) {
                main.removeChild(localBigFishArr[i].localfish1);
            }
            for (var i = 0; i < localBig2FishArr.length; i++) {
                main.removeChild(localBig2FishArr[i].localfish2);
            }
            if (localBig3FishArr.length != 0) {
                for (var i = 0; i < localBig3FishArr.length; i++) {
                    main.removeChild(localBig3FishArr[i].localfish3);
                }
            }
            if (localBig4FishArr.length != 0) {
                for (var i = 0; i < localBig4FishArr.length; i++) {
                    main.removeChild(localBig4FishArr[i]);
                }
            }
            if (propsArr.length != 0) {
                for (var i = 0; i < propsArr.length; i++) {
                    main.removeChild(propsArr[i]);
                }
            }
            // 我方小鱼数组
            ourfishArr.splice(0);
            // 敌方小鱼数组
            localMinFishArr.splice(0);
            // 敌方大鱼数组
            localBigFishArr.splice(0);
            // 敌方大大鱼数组
            localBig2FishArr.splice(0);
            // 敌方大大大鱼数组
            localBig3FishArr.splice(0);
            // 敌方大大大鱼数组
            localBig4FishArr.splice(0);
            // 我放小鱼实例对象
            ourFishNew.splice(0);
            // 道具数组l
            if (propsArr.length != 0) {
                propsArr.splice(0);
            }

            // 头部
            var header = $('.header');
            // 背景
            var gameInterface = $('.gameInterface');
            // 游戏结束
            var gameover = $('.gameover');
            gameover.style.display = 'block';
            gameInterface.style.display = 'none';
            header.style.display = 'none';
            Theme.pause();

        }
    } else {
        if (Number1.innerText >= 200) {
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
            // 删除敌方大大大鱼 定时器
            clearInterval(createBig3FishTime);
            // 删除敌方大大大鱼移动 定时器
            clearInterval(localBig3FishMoveTime);
            // 创建大大大大鱼定时器
            clearInterval(createBig4FishTime);
            // 敌方大大大大鱼fish4定时器
            clearInterval(localBig4FishMoveTime);
            // 删除道具生存
            clearInterval(BigFishGoTime);
            // 背景移动
            clearInterval(backMoveTime);
            for (var i = 0; i < ourfishArr.length; i++) {
                main.removeChild(ourfishArr[i]);
            }
            for (var i = 0; i < localMinFishArr.length; i++) {
                main.removeChild(localMinFishArr[i].localfish);
            }
            for (var i = 0; i < localBigFishArr.length; i++) {
                main.removeChild(localBigFishArr[i].localfish1);
            }
            for (var i = 0; i < localBig2FishArr.length; i++) {
                main.removeChild(localBig2FishArr[i].localfish2);
            }
            if (localBig3FishArr.length != 0) {
                for (var i = 0; i < localBig3FishArr.length; i++) {
                    main.removeChild(localBig3FishArr[i].localfish3);
                }
            }
            if (localBig4FishArr.length != 0) {
                for (var i = 0; i < localBig4FishArr.length; i++) {
                    main.removeChild(localBig4FishArr[i]);
                }
            }
            if (propsArr.length != 0) {
                for (var i = 0; i < propsArr.length; i++) {
                    main.removeChild(propsArr[i]);
                }
            }
            // 我方小鱼数组
            ourfishArr.splice(0);
            // 敌方小鱼数组
            localMinFishArr.splice(0);
            // 敌方大鱼数组
            localBigFishArr.splice(0);
            // 敌方大大鱼数组
            localBig2FishArr.splice(0);
            // 敌方大大大鱼数组
            localBig3FishArr.splice(0);
            // 敌方大大大鱼数组
            localBig4FishArr.splice(0);
            // 我放小鱼实例对象
            ourFishNew.splice(0);
            // 道具数组l
            if (propsArr.length != 0) {
                propsArr.splice(0);
            }

            // 头部
            var header = $('.header');
            // 背景
            var gameInterface = $('.gameInterface');
            // 游戏结束
            var win = $('.win');
            win.style.display = 'block';
            gameInterface.style.display = 'none';
            header.style.display = 'none';
            Theme.pause();
            console.log(number.innerText);
        }
        if (hb.children.length <= 0) {

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
            // 删除敌方大大大鱼 定时器
            clearInterval(createBig3FishTime);
            // 删除敌方大大大鱼移动 定时器
            clearInterval(localBig3FishMoveTime);
            // 创建大大大大鱼定时器
            clearInterval(createBig4FishTime);
            // 敌方大大大大鱼fish4定时器
            clearInterval(localBig4FishMoveTime);
            // 删除道具生存
            clearInterval(BigFishGoTime);
            // 背景移动
            clearInterval(backMoveTime);
            for (var i = 0; i < ourfishArr.length; i++) {
                main.removeChild(ourfishArr[i]);
            }
            for (var i = 0; i < localMinFishArr.length; i++) {
                main.removeChild(localMinFishArr[i].localfish);
            }
            for (var i = 0; i < localBigFishArr.length; i++) {
                main.removeChild(localBigFishArr[i].localfish1);
            }
            for (var i = 0; i < localBig2FishArr.length; i++) {
                main.removeChild(localBig2FishArr[i].localfish2);
            }
            if (localBig3FishArr.length != 0) {
                for (var i = 0; i < localBig3FishArr.length; i++) {
                    main.removeChild(localBig3FishArr[i].localfish3);
                }
            }
            if (localBig4FishArr.length != 0) {
                for (var i = 0; i < localBig4FishArr.length; i++) {
                    main.removeChild(localBig4FishArr[i]);
                }
            }
            if (propsArr.length != 0) {
                for (var i = 0; i < propsArr.length; i++) {
                    main.removeChild(propsArr[i]);
                }
            }
            // 我方小鱼数组
            ourfishArr.splice(0);
            // 敌方小鱼数组
            localMinFishArr.splice(0);
            // 敌方大鱼数组
            localBigFishArr.splice(0);
            // 敌方大大鱼数组
            localBig2FishArr.splice(0);
            // 敌方大大大鱼数组
            localBig3FishArr.splice(0);
            // 敌方大大大鱼数组
            localBig4FishArr.splice(0);
            // 我放小鱼实例对象
            ourFishNew.splice(0);
            // 道具数组l
            if (propsArr.length != 0) {
                propsArr.splice(0);
            }

            // 头部
            var header = $('.header');
            // 背景
            var gameInterface = $('.gameInterface');
            // 游戏结束
            var gameover = $('.gameover');
            gameover.style.display = 'block';
            gameInterface.style.display = 'none';
            header.style.display = 'none';
            Theme.pause();
        }
    }

}

// 游戏结束
setInterval(gameOver, 50);
reStartB.onclick = function () {


    Number1.innerText = '';
    Number2.innerText = '';
    play1Number = 0;
    play2Number = 0;
    BigFishTime = 10;

    hb2flag = true;
    hb1flag = true;
    // 血量条
    var HealthBar = $('#HealthBar1');
    HealthBar.innerHTML = '';
    if (our2play.style.display == 'block') {
        var HealthBar2 = $('#HealthBar2');
        HealthBar2.innerHTML = '';
    }

    // 重新开始
    var gameover = $('.gameover');
    var win = $('.win');


    gameover.style.display = 'none';
    if (win.style.display == 'block') {
        win.style.display = 'none';
    }
    // 头部
    var header = $('.header');
    header.style.display = 'flex';
    // 背景
    var gameInterface = $('.gameInterface');
    gameInterface.style.display = 'block';

    for (var i = 0; i < 3; i++) {
        var img = document.createElement('img');
        img.style.backgroundImage = 'url(./images/life.png)';
        hb.appendChild(img);
    }
    if (our2play.style.display == 'block') {
        for (var i = 0; i < 3; i++) {
            var img = document.createElement('img');
            img.style.backgroundImage = 'url(./images/life.png)';
            hb2.appendChild(img);
        }
    }

    Theme.play();
    if (our2play.style.display == 'block') {
        // 创建我玩家2
        let our2 = new CreateOur2Fish();

        ourfishArr.push(our2);
    }
    let our = new createFish('', './images/our.png', 40, 40, 10, 10, 20, 10, fishColor);
    let ourfishthe = our.init();
    ourfishArr.push(ourfishthe);
    ourFishNew.push(our);

    // 创建敌方小鱼定时器
    createMinFishTime = setInterval(getCreateMinFish, 1000);
    // 敌方小鱼移动定时器
    lcoalMinFishMoveTime = setInterval(localMinFishMove, 50);
    // 创建大鱼定时器
    createBigFishTime = setInterval(getCreateBigFish, 10000);
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
    // 背景移动

    backMoveTime = setInterval(function () {
        if (parseInt(back.style.left) <= -1240) {
            back.style.left = 0 + 'px';
        }
        back.style.left = back.offsetLeft - 1 + 'px';
    }, 50);
    // 道具倒计时
    BigFishGoTime = setInterval(BigFish, 1000);
}
reStart.onclick = function () {
    Number1.innerText = '';
    Number2.innerText = '';
    play1Number = 0;
    play2Number = 0;
    BigFishTime = 10;

    hb2flag = true;
    hb1flag = true;
    // 血量条
    var HealthBar = $('#HealthBar1');
    // 重新开始
    var gameover = $('.gameover');
    gameover.style.display = 'none';

    // 头部
    var header = $('.header');
    header.style.display = 'flex';
    // 背景
    var gameInterface = $('.gameInterface');
    gameInterface.style.display = 'block';
    for (var i = 0; i < 3; i++) {
        var img = document.createElement('img');
        img.style.backgroundImage = 'url(./images/life.png)';
        hb.appendChild(img);
    }
    if (our2play.style.display == 'block') {
        for (var i = 0; i < 3; i++) {
            var img = document.createElement('img');
            img.style.backgroundImage = 'url(./images/life.png)';
            hb2.appendChild(img);
        }
    }
    Theme.play();
    if (our2play.style.display == 'block') {
        // 创建我玩家2
        let our2 = new CreateOur2Fish();
        ourfishArr.push(our2);
    }
    let our = new createFish('', './images/our.png', 40, 40, 10, 10, 20, 10, fishColor);
    let ourfishthe = our.init();
    ourfishArr.push(ourfishthe);
    ourFishNew.push(our);

    // 创建敌方小鱼定时器
    createMinFishTime = setInterval(getCreateMinFish, 1000);
    // 敌方小鱼移动定时器
    lcoalMinFishMoveTime = setInterval(localMinFishMove, 50);
    // 创建大鱼定时器
    createBigFishTime = setInterval(getCreateBigFish, 10000);
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
    // 背景移动

    backMoveTime = setInterval(function () {
        if (parseInt(back.style.left) <= -1240) {
            back.style.left = 0 + 'px';
        }
        back.style.left = back.offsetLeft - 1 + 'px';
    }, 50);
    // 道具倒计时
    BigFishGoTime = setInterval(BigFish, 1000);
}


