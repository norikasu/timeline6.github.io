function exec623(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output623").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor201( newColor ) {
    document.getElementById('c027').style.backgroundColor = newColor;
  }

  function changeBoxColors201( newColor ) {
    document.getElementById('drop96').style.backgroundColor = newColor;
  }
