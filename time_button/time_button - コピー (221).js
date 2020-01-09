function exec221(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output221").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor73( newColor ) {
    document.getElementById('e010').style.backgroundColor = newColor;
  }

  function changeBoxColors73( newColor ) {
    document.getElementById('drop148').style.backgroundColor = newColor;
  }
