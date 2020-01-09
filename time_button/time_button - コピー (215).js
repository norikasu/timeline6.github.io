function exec215(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output215").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor71( newColor ) {
    document.getElementById('c010').style.backgroundColor = newColor;
  }

  function changeBoxColors71( newColor ) {
    document.getElementById('drop80').style.backgroundColor = newColor;
  }
