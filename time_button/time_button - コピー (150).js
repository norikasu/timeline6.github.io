function exec150(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output150").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor49( newColor ) {
    document.getElementById('a007').style.backgroundColor = newColor;
  }

  function changeBoxColors49( newColor ) {
    document.getElementById('drop7').style.backgroundColor = newColor;
  }
