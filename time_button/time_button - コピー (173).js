function exec173(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output173").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor57( newColor ) {
    document.getElementById('a008').style.backgroundColor = newColor;
  }

  function changeBoxColors57( newColor ) {
    document.getElementById('drop8').style.backgroundColor = newColor;
  }
