function exec395(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output395").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor128( newColor ) {
    document.getElementById('a018').style.backgroundColor = newColor;
  }

  function changeBoxColors128( newColor ) {
    document.getElementById('drop18').style.backgroundColor = newColor;
  }
