function exec652(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output652").innerHTML=ToDay;//指定した場所に表示させる
  }

    function changeBoxColor210( newColor ) {
      document.getElementById('d028').style.backgroundColor = newColor;
    }
