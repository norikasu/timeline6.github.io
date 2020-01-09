function exec146(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output146").innerHTML=ToDay;//指定した場所に表示させる
  }

    function changeBoxColor1279( newColor ) {
      document.getElementById('entire2').style.backgroundColor = newColor;
      }
