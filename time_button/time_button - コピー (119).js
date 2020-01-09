function exec119(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output119").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor40( newColor ) {
    document.getElementById('h005').style.backgroundColor = newColor;
  }

  function changeBoxColors40( newColor ) {
    document.getElementById('drop245').style.backgroundColor = newColor;
  }
