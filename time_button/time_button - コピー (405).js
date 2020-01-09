function exec405(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output405").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor132( newColor ) {
    document.getElementById('e018').style.backgroundColor = newColor;
  }

  function changeBoxColors132( newColor ) {
    document.getElementById('drop155').style.backgroundColor = newColor;
  }
