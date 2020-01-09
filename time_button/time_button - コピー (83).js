function exec83(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output83").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor28( newColor ) {
    document.getElementById('d004').style.backgroundColor = newColor;
  }

  function changeBoxColors28( newColor ) {
    document.getElementById('drop109').style.backgroundColor = newColor;
  }
