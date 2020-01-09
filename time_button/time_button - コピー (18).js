function exec18(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output18").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor6( newColor ) {
    document.getElementById('f001').style.backgroundColor = newColor;
  }
