function exec62(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output62").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor21( newColor ) {
    document.getElementById('e003').style.backgroundColor = newColor;
  }

  function changeBoxColors21( newColor ) {
    document.getElementById('drop142').style.backgroundColor = newColor;
  }
