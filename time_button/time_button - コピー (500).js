function exec500(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output500").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor160( newColor ) {
    document.getElementById('b022').style.backgroundColor = newColor;
  }
