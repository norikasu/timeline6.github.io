function exec72(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output72").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor24( newColor ) {
    document.getElementById('h003').style.backgroundColor = newColor;
  }
