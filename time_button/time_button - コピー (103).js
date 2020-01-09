function exec103(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output103").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor34( newColor ) {
    document.getElementById('b005').style.backgroundColor = newColor;
  }

  function changeBoxColors34( newColor ) {
    document.getElementById('drop41').style.backgroundColor = newColor;
  }
