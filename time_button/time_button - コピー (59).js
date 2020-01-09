function exec59(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output59").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor20( newColor ) {
    document.getElementById('d003').style.backgroundColor = newColor;
  }

  function changeBoxColors20( newColor ) {
    document.getElementById('drop108').style.backgroundColor = newColor;
  }
