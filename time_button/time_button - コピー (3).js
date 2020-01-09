function exec3(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output3").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor1( newColor ) {
    document.getElementById('a001').style.backgroundColor = newColor;
  }

  function changeBoxColors1( newColor ) {
    document.getElementById('drop1').style.backgroundColor = newColor;
  }
