function exec632(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output632").innerHTML=ToDay;//指定した場所に表示させる
  }

  function changeBoxColor204( newColor ) {
    document.getElementById('f027').style.backgroundColor = newColor;
  }

  function changeBoxColors204( newColor ) {
    document.getElementById('drop197').style.backgroundColor = newColor;
  }
