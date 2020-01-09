function exec38(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output38").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor13( newColor ) {
    document.getElementById('e002').style.backgroundColor = newColor;
  }

  function changeBoxColors13( newColor ) {
    document.getElementById('drop141').style.backgroundColor = newColor;
  }
