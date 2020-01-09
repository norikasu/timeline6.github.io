function exec351(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output351").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor115( newColor ) {
    document.getElementById('c016').style.backgroundColor = newColor;
  }

  function changeBoxColors115( newColor ) {
    document.getElementById('drop85').style.backgroundColor = newColor;
  }
