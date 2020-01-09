function exec276(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output276").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor90( newColor ) {
    document.getElementById('b013').style.backgroundColor = newColor;
  }

  function changeBoxColors90( newColor ) {
    document.getElementById('drop48').style.backgroundColor = newColor;
  }
