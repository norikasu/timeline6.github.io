function exec35(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output35").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor12( newColor ) {
    document.getElementById('d002').style.backgroundColor = newColor;
  }

  function changeBoxColors12( newColor ) {
    document.getElementById('drop107').style.backgroundColor = newColor;
  }
