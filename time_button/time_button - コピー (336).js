function exec336(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output336").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor110( newColor ) {
    document.getElementById('f015').style.backgroundColor = newColor;
  }

  function changeBoxColors110( newColor ) {
    document.getElementById('drop185').style.backgroundColor = newColor;
  }
