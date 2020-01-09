function exec370(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output370").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor120( newColor ) {
    document.getElementById('a017').style.backgroundColor = newColor;
  }

  function changeBoxColors120( newColor ) {
    document.getElementById('drop17').style.backgroundColor = newColor;
  }
