function exec76(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output76").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor25( newColor ) {
    document.getElementById('a004').style.backgroundColor = newColor;
  }

  function changeBoxColors25( newColor ) {
    document.getElementById('drop4').style.backgroundColor = newColor;
  }
