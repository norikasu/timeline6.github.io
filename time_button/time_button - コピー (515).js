function exec515(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output515").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor165( newColor ) {
    document.getElementById('g022').style.backgroundColor = newColor;
  }
