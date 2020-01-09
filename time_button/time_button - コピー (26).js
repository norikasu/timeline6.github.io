function exec26(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output26").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor9( newColor ) {
    document.getElementById('a002').style.backgroundColor = newColor;
    }

    function changeBoxColors9( newColor ) {
      document.getElementById('drop2').style.backgroundColor = newColor;
      }
