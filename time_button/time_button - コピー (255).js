function exec255(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output255").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor84( newColor ) {
    document.getElementById('h011').style.backgroundColor = newColor;
  }
