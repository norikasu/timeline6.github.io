function exec607(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output607").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor196( newColor ) {
    document.getElementById('f026').style.backgroundColor = newColor;
  }

  function changeBoxColors196( newColor ) {
    document.getElementById('drop196').style.backgroundColor = newColor;
  }
