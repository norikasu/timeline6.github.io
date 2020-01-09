function exec441(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output441").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor142( newColor ) {
    document.getElementById('h019').style.backgroundColor = newColor;
  }
