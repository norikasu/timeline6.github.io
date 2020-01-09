function exec409(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output409").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor133( newColor ) {
    document.getElementById('f018').style.backgroundColor = newColor;
  }
