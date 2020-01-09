function exec446(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output446").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor144( newColor ) {
    document.getElementById('b020').style.backgroundColor = newColor;
  }
