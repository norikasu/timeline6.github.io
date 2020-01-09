function exec142(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output142").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor47( newColor ) {
    document.getElementById('g006').style.backgroundColor = newColor;
  }
