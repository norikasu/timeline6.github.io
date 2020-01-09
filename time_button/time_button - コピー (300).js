function exec300(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output300").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor98( newColor ) {
    document.getElementById('b014').style.backgroundColor = newColor;
  }

  function changeBoxColors98( newColor ) {
    document.getElementById('drop49').style.backgroundColor = newColor;
  }
