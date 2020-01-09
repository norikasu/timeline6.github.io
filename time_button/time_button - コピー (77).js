function exec77(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output77").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor26( newColor ) {
    document.getElementById('b004').style.backgroundColor = newColor;
  }

  function changeBoxColors26( newColor ) {
    document.getElementById('drop40').style.backgroundColor = newColor;
  }
