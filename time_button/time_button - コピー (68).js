function exec68(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output68").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor23( newColor ) {
    document.getElementById('h003').style.backgroundColor = newColor;
  }

  function changeBoxColors23( newColor ) {
    document.getElementById('drop208').style.backgroundColor = newColor;
  }
