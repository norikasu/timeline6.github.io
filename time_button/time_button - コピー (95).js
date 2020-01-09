function exec95(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output95").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor32( newColor ) {
    document.getElementById('h004').style.backgroundColor = newColor;
  }

  function changeBoxColors32( newColor ) {
    document.getElementById('drop244').style.backgroundColor = newColor;
  }
