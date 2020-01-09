function exec700(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output700").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor226( newColor ) {
    document.getElementById('g030').style.backgroundColor = newColor;
  }

  function changeBoxColors226( newColor ) {
    document.getElementById('drop234').style.backgroundColor = newColor;
  }
