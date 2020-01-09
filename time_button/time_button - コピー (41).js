function exec41(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output41").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor14( newColor ) {
    document.getElementById('f002').style.backgroundColor = newColor;
  }

  function changeBoxColors14( newColor ) {
    document.getElementById('drop174').style.backgroundColor = newColor;
  }
