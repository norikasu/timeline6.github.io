function exec212(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output212").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor70( newColor ) {
    document.getElementById('b010').style.backgroundColor = newColor;
  }

  function changeBoxColors70( newColor ) {
    document.getElementById('drop46').style.backgroundColor = newColor;
  }
