function exec136(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output136").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor45( newColor ) {
    document.getElementById('e006').style.backgroundColor = newColor;
  }
