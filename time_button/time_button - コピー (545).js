function exec545(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output545").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor175( newColor ) {
    document.getElementById('a024').style.backgroundColor = newColor;
  }

  function changeBoxColors175( newColor ) {
    document.getElementById('drop24').style.backgroundColor = newColor;
  }
