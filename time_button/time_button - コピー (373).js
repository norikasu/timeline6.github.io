function exec373(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output373").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor121( newColor ) {
    document.getElementById('b017').style.backgroundColor = newColor;
  }
