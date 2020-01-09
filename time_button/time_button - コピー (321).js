function exec321(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output321").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor105( newColor ) {
    document.getElementById('a015').style.backgroundColor = newColor;
  }

  function changeBoxColors105( newColor ) {
    document.getElementById('drop15').style.backgroundColor = newColor;
  }
