function exec44(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output44").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor15( newColor ) {
    document.getElementById('g002').style.backgroundColor = newColor;
  }

  function changeBoxColors15( newColor ) {
    document.getElementById('drop207').style.backgroundColor = newColor;
  }
