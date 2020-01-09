function exec297(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output297").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor97( newColor ) {
    document.getElementById('a014').style.backgroundColor = newColor;
  }

  function changeBoxColors97( newColor ) {
    document.getElementById('drop14').style.backgroundColor = newColor;
  }
