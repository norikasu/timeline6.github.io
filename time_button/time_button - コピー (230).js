function exec230(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output230").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor76( newColor ) {
    document.getElementById('h010').style.backgroundColor = newColor;
  }

  function changeBoxColors76( newColor ) {
    document.getElementById('drop250').style.backgroundColor = newColor;
  }
