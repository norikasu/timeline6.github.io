function exec460(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output460").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor149( newColor ) {
    document.getElementById('g020').style.backgroundColor = newColor;
  }

  function changeBoxColors149( newColor ) {
    document.getElementById('drop224').style.backgroundColor = newColor;
  }
