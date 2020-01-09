function exec105(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output105").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor35( newColor ) {
    document.getElementById('c005').style.backgroundColor = newColor;
  }
