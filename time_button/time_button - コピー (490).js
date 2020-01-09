function exec490(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output490").innerHTML=ToDay;//指定した場所に表示させる
  }

    function changeBoxColor157( newColor ) {
      document.getElementById('g021').style.backgroundColor = newColor;
    }
