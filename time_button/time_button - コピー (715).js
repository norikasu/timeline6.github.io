function exec715(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output715").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor231( newColor ) {
    document.getElementById('d031').style.backgroundColor = newColor;
  }

  function changeBoxColors231( newColor ) {
    document.getElementById('drop134').style.backgroundColor = newColor;
  }
