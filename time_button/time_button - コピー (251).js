function exec251(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output251").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor83( newColor ) {
    document.getElementById('g011').style.backgroundColor = newColor;
  }

  function changeBoxColors83( newColor ) {
    document.getElementById('drop215').style.backgroundColor = newColor;
  }
