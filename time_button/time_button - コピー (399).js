function exec399(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output399").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor130( newColor ) {
    document.getElementById('c018').style.backgroundColor = newColor;
  }

  function changeBoxColors130( newColor ) {
    document.getElementById('drop87').style.backgroundColor = newColor;
  }
