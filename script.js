Rate = 0;
Xp = 0;

function calc(Level, Rate, Xp) {
    NextXP = "Lv"+Level;
    NextXP = XP[NextXP];
    const messageNext = document.getElementById('message-next');
    const messageRun = document.getElementById('message-run');
    document.getElementById('level').style.border = '';
    if (Level === '') {
        document.getElementById('level').style.border = '2px solid red';
        messageNext.textContent = '現在のレベルを入力してください。';
        messageNext.style.color = 'red';
        return;
    }
    if (Rate === '' || Rate == 0) {
    }
    else {
        RateXP = (Rate / 100) * NextXP;
        NextXP = NextXP - RateXP;
    }
    if (Xp === '' || Xp == 0) {
        messageRun.textContent = '';
    }
    else {
        NextRun = Math.ceil(NextXP / Xp);
        messageRun.textContent = 'あと'+NextRun+'回走るとレベルアップ！';
    }
    messageNext.textContent = '次のレベルまで'+NextXP+'経験値！';
    messageNext.style.color = 'black';
}
