function exec247(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output247").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor81( newColor ) {
    document.getElementById('e011').style.backgroundColor = newColor;
  }
