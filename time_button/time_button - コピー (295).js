function exec295(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output295").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor96( newColor ) {
    document.getElementById('h013').style.backgroundColor = newColor;
  }
