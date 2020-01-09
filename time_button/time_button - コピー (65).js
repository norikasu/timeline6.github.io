function exec65(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output65").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor22( newColor ) {
    document.getElementById('f003').style.backgroundColor = newColor;
  }

  function changeBoxColors22( newColor ) {
    document.getElementById('drop175').style.backgroundColor = newColor;
  }
