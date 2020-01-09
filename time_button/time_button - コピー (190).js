function exec190(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output190").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor63( newColor ) {
    document.getElementById('g008').style.backgroundColor = newColor;
  }

  function changeBoxColors63( newColor ) {
    document.getElementById('drop213').style.backgroundColor = newColor;
  }
