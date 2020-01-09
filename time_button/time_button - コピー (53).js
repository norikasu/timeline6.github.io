function exec53(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output53").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor18( newColor ) {
    document.getElementById('b003').style.backgroundColor = newColor;
  }

  function changeBoxColors18( newColor ) {
    document.getElementById('drop39').style.backgroundColor = newColor;
  }
