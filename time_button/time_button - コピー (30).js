function exec30(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output30").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor10( newColor ) {
    document.getElementById('b002').style.backgroundColor = newColor;
    }

    function changeBoxColors10( newColor ) {
      document.getElementById('drop38').style.backgroundColor = newColor;
    }
