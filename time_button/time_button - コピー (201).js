function exec201(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output201").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor66( newColor ) {
    document.getElementById('b009').style.backgroundColor = newColor;
  }

  function changeBoxColors66( newColor ) {
    document.getElementById('drop45').style.backgroundColor = newColor;
  }
