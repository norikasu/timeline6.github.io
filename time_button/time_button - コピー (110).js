function exec110(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output110").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor37( newColor ) {
    document.getElementById('e005').style.backgroundColor = newColor;
  }

  function changeBoxColors37( newColor ) {
    document.getElementById('drop144').style.backgroundColor = newColor;
  }
