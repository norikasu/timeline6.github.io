function exec281(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output281").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor91( newColor ) {
    document.getElementById('c013').style.backgroundColor = newColor;
  }
