function exec8(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output8").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor3( newColor ) {
    document.getElementById('c001').style.backgroundColor = newColor;
  }

  function changeBoxColors3( newColor ) {
    document.getElementById('drop72').style.backgroundColor = newColor;
  }
