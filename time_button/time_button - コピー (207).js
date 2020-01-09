function exec207(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output207").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor68( newColor ) {
    document.getElementById('h009').style.backgroundColor = newColor;
  }
