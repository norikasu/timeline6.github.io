function exec4(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output4").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor5( newColor ) {
    document.getElementById('c02').style.backgroundColor = newColor;
  }
