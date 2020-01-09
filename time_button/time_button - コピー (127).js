function exec127(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output127").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor42( newColor ) {
    document.getElementById('b006').style.backgroundColor = newColor;
  }

  function changeBoxColors42( newColor ) {
    document.getElementById('drop42').style.backgroundColor = newColor;
  }
