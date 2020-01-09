function exec14(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output14").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor5( newColor ) {
    document.getElementById('e001').style.backgroundColor = newColor;
  }

  function changeBoxColors5( newColor ) {
    document.getElementById('drop140').style.backgroundColor = newColor;
  }
