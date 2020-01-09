function exec686(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output686").innerHTML=ToDay;//指定した場所に表示させる
  }

      function changeBoxColor221( newColor ) {
        document.getElementById('b030').style.backgroundColor = newColor;
      }
