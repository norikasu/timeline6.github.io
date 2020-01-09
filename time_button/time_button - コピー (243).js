function exec243(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output243").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor80( newColor ) {
    document.getElementById('d011').style.backgroundColor = newColor;
  }
