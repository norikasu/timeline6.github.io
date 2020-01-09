function exec92(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output92").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor31( newColor ) {
    document.getElementById('g004').style.backgroundColor = newColor;
  }

  function changeBoxColors31( newColor ) {
    document.getElementById('drop209').style.backgroundColor = newColor;
  }
