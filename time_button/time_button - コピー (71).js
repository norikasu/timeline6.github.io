function exec71(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output71").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor24( newColor ) {
    document.getElementById('h003').style.backgroundColor = newColor;
  }

  function changeBoxColors24( newColor ) {
    document.getElementById('drop243').style.backgroundColor = newColor;
  }
