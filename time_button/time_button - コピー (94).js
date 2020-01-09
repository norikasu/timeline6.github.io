function exec94(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output94").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor31( newColor ) {
    document.getElementById('g004').style.backgroundColor = newColor;
  }
