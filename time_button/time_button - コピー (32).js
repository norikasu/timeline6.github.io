function exec32(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output32").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor11( newColor ) {
    document.getElementById('c002').style.backgroundColor = newColor;
  }

  function changeBoxColors11( newColor ) {
    document.getElementById('drop73').style.backgroundColor = newColor;
  }
