function exec227(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output227").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor75( newColor ) {
    document.getElementById('g010').style.backgroundColor = newColor;
  }

  function changeBoxColors75( newColor ) {
    document.getElementById('drop214').style.backgroundColor = newColor;
  }
