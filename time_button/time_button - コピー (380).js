function exec380(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output380").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor123( newColor ) {
    document.getElementById('d017').style.backgroundColor = newColor;
  }
