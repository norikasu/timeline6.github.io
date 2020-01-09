function exec494(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output494").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor158( newColor ) {
    document.getElementById('h021').style.backgroundColor = newColor;
  }
