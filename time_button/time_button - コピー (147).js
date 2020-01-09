function exec147(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output147").innerHTML=ToDay;//指定した場所に表示させる
  }

    function changeBoxColor1280( newColor ) {
      document.getElementById('entire3').style.backgroundColor = newColor;
      }
