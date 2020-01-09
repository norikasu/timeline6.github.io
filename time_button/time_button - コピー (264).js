function exec264(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output264").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor87( newColor ) {
    document.getElementById('g012').style.backgroundColor = newColor;
  }
