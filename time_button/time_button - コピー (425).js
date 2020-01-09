function exec425(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output425").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor138( newColor ) {
    document.getElementById('c019').style.backgroundColor = newColor;
  }
