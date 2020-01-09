function exec775(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output775").innerHTML=ToDay;//指定した場所に表示させる
  }

    function changeBoxColor250( newColor ) {
      document.getElementById('g033').style.backgroundColor = newColor;
    }
