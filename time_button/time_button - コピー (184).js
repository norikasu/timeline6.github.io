function exec184(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output184").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor61( newColor ) {
    document.getElementById('e008').style.backgroundColor = newColor;
  }

  function changeBoxColors61( newColor ) {
    document.getElementById('drop147').style.backgroundColor = newColor;
  }
