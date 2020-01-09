function exec122(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output122").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor41( newColor ) {
    document.getElementById('a006').style.backgroundColor = newColor;
  }

  function changeBoxColors41( newColor ) {
    document.getElementById('drop6').style.backgroundColor = newColor;
  }
