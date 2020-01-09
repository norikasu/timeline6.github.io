function exec284(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output284").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor92( newColor ) {
    document.getElementById('d013').style.backgroundColor = newColor;
  }
