function exec23(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output23").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor8( newColor ) {
    document.getElementById('h001').style.backgroundColor = newColor;
    }

    function changeBoxColors8( newColor ) {
      document.getElementById('drop241').style.backgroundColor = newColor;
      }
