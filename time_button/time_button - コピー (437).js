function exec437(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output437").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor141( newColor ) {
    document.getElementById('g019').style.backgroundColor = newColor;
  }
