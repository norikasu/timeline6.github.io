function exec6(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output6").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor8( newColor ) {
    document.getElementById('d04').style.backgroundColor = newColor;
  }
