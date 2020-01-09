function exec163(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output163").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor54( newColor ) {
    document.getElementById('f007').style.backgroundColor = newColor;
  }

  function changeBoxColors54( newColor ) {
    document.getElementById('drop179').style.backgroundColor = newColor;
  }
