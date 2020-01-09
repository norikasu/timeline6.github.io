function exec107(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output107").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor36( newColor ) {
    document.getElementById('d005').style.backgroundColor = newColor;
  }

  function changeBoxColors36( newColor ) {
    document.getElementById('drop110').style.backgroundColor = newColor;
  }
