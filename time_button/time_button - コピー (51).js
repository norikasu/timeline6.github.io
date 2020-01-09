function exec51(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output51").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor17( newColor ) {
    document.getElementById('a003').style.backgroundColor = newColor;
  }

  function changeBoxColors17( newColor ) {
    document.getElementById('drop3').style.backgroundColor = newColor;
  }
