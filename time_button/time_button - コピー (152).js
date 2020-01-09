function exec152(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output152").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor50( newColor ) {
    document.getElementById('b007').style.backgroundColor = newColor;
  }

  function changeBoxColors50( newColor ) {
    document.getElementById('drop43').style.backgroundColor = newColor;
  }
