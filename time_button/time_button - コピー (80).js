function exec80(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output80").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor27( newColor ) {
    document.getElementById('c004').style.backgroundColor = newColor;
  }

  function changeBoxColors27( newColor ) {
    document.getElementById('drop75').style.backgroundColor = newColor;
  }
