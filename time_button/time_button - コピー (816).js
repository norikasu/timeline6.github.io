function exec816(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output816").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor264( newColor ) {
    document.getElementById('e035').style.backgroundColor = newColor;
    }
