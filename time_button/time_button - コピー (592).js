function exec592(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output592").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor191( newColor ) {
    document.getElementById('a026').style.backgroundColor = newColor;
  }

  function changeBoxColors191( newColor ) {
    document.getElementById('drop26').style.backgroundColor = newColor;
  }
