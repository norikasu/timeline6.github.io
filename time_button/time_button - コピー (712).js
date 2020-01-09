function exec712(){
  var today=new Date();//今日の日付を取得
  var ToDay=(today.getMonth()+1)+"/"+today.getDate()+" "+today.getHours()+":"+today.getMinutes();//表示する内容
  document.getElementById("output712").innerHTML=ToDay;//指定した場所に表示させる
  }

    function changeBoxColor230( newColor ) {
      document.getElementById('c031').style.backgroundColor = newColor;
    }

    function changeBoxColors230( newColor ) {
      document.getElementById('drop100').style.backgroundColor = newColor;
    }
