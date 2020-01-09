function exec97(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output97").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor32( newColor ) {
    document.getElementById('h004').style.backgroundColor = newColor;
  }
