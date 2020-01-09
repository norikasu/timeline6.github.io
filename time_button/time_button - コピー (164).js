function exec164(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output164").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor54( newColor ) {
    document.getElementById('f007').style.backgroundColor = newColor;
  }
