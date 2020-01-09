function exec86(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output86").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor29( newColor ) {
    document.getElementById('e004').style.backgroundColor = newColor;
  }

  function changeBoxColors29( newColor ) {
    document.getElementById('drop143').style.backgroundColor = newColor;
  }
