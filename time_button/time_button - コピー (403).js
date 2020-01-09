function exec403(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output403").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor131( newColor ) {
    document.getElementById('d018').style.backgroundColor = newColor;
  }
