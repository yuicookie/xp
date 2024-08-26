function calc(Level, Rate, Xp) {
    //Cookie保存
    setCookie("Level", encodeURIComponent(Level), 365); // 1年間有効なCookie
    setCookie("Rate", encodeURIComponent(Rate), 365); // 1年間有効なCookie
    setCookie("Xp", encodeURIComponent(Xp), 365); // 1年間有効なCookie

    NextXP = "Lv"+Level;
    NextXP = XP[NextXP];
    const messageNext = document.getElementById('message-next');
    const messageRun = document.getElementById('message-run');
    const messageNext100 = document.getElementById('message-next100');
    const messageRun100 = document.getElementById('message-run100');
    document.getElementById('level').style.border = '';
    if (Level === '') {
        messageNext.textContent = '';
        messageRun.textContent = '';
        messageNext100.textContent = '';
        messageRun100.textContent = '';
        document.getElementById('level').style.border = '2px solid red';
        messageNext.style.color = 'red';
        messageNext.textContent = '現在のレベルを入力してください。';
        return;
    }
    else if (Level == 0){
        messageNext.textContent = '';
        messageRun.textContent = '';
        messageNext100.textContent = '';
        messageRun100.textContent = '';
        document.getElementById('level').style.border = '2px solid red';
        messageNext.style.color = 'red';
        messageNext.textContent = '現在のレベルに1以上を入力してください。';
        return;
    }

    if (Rate === '' || Rate == 0) {
        Rate = 0;
    }
    else {
        RateXP = (Rate / 100) * NextXP;
        NextXP = NextXP - RateXP;
    }

    //100レベルまでの経験値
    SumXP = 0;
    for (i = +Level + 1; i < 100; i++) {
        TempXP = "Lv"+i;
        SumXP += XP[TempXP];
    }
    SumXP += NextXP;

    if (Xp === '' || Xp == 0) {
        messageRun.textContent = '';
        messageRun100.textContent = '';
    }
    else {
        NextRun = Math.ceil(NextXP / Xp);
        messageRun.innerHTML = 'あと <span style="color: red; font-weight: bold;">'+NextRun+'</span> 回走るとレベルアップ！';
        NextRun100 = Math.ceil(SumXP / Xp);
        messageRun100.innerHTML = 'あと <span style="color: red; font-weight: bold;">'+NextRun100+'</span> 回走るとレベルマックス！';    
    }
    messageNext.style.color = 'black';
    messageNext.innerHTML = '次のレベルまで <span style="color: red; font-weight: bold;">'+NextXP+'</span> 経験値！';
    messageNext100.innerHTML = 'レベル100まで <span style="color: red; font-weight: bold;">'+SumXP+'</span> 経験値！';
}

//Cookieに値を設定する関数
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 365 * 24 * 60 * 60 * 1000)); // 1年間のミリ秒数
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
  
//読み込み時に実行する
window.onload = loadFormData;
function loadFormData() {
  var cookies = document.cookie.split(';');
  var formData = {};

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim().split('=');
    formData[cookie[0]] = decodeURIComponent(cookie[1]);
  }

  //フォームにデータをセットする
  if (formData.Level) {
    document.getElementById('level').value = formData.Level;
  }
  if (formData.Rate) {
    document.getElementById('rate').value = formData.Rate;
  }
  if (formData.Xp) {
      document.getElementById('xp').value = formData.Xp;
    }  
}
