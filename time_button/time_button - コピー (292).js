function exec292(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output292").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor95( newColor ) {
    document.getElementById('g013').style.backgroundColor = newColor;
  }
