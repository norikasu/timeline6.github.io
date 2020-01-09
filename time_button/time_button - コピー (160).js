function exec160(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output160").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor53( newColor ) {
    document.getElementById('e007').style.backgroundColor = newColor;
  }

  function changeBoxColors53( newColor ) {
    document.getElementById('drop146').style.backgroundColor = newColor;
  }
