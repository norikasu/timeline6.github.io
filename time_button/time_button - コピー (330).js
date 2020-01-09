function exec330(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output330").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor108( newColor ) {
    document.getElementById('d015').style.backgroundColor = newColor;
  }

  function changeBoxColors108( newColor ) {
    document.getElementById('drop118').style.backgroundColor = newColor;
  }
