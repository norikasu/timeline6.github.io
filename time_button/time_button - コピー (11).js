function exec11(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output11").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor4( newColor ) {
    document.getElementById('d001').style.backgroundColor = newColor;
  }

  function changeBoxColors4( newColor ) {
    document.getElementById('drop106').style.backgroundColor = newColor;
  }
