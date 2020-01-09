function exec653(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output653").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor211( newColor ) {
    document.getElementById('h028').style.backgroundColor = newColor;
  }

  function changeBoxColors211( newColor ) {
    document.getElementById('drop268').style.backgroundColor = newColor;
  }
