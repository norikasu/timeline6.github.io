function exec315(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output315").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor103( newColor ) {
    document.getElementById('g014').style.backgroundColor = newColor;
  }

  function changeBoxColors103( newColor ) {
    document.getElementById('drop218').style.backgroundColor = newColor;
  }
