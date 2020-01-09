function exec622(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output622").innerHTML=ToDay;//指定した場所に表示させる
  }

      function changeBoxColor200( newColor ) {
        document.getElementById('b027').style.backgroundColor = newColor;
      }
