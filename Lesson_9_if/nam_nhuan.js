
function check(){
    let year = +document.getElementById("year").value;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
          if (year % 400 == 0) {
            document.getElementById("result").innerHTML = year + " LÀ năm nhuận";
          } else {
            document.getElementById("result").innerHTML = year + " KHÔNG là năm nhuận";
          }
        } else {
            document.getElementById("result").innerHTML = year + " LÀ năm nhuận";
        }
    } else {
        document.getElementById("result").innerHTML = year + " KHÔNG là năm nhuận";
    }
}


// function check() {
//     let year = +document.getElementById("year").value;
//     if (year % 4 == 0  && year % 100 !=0) {
//         document.getElementById("result").innerHTML = year + " LÀ năm nhuận"; 
//     } else if (year % 100 == 0  && year % 400 !=0) {
//         document.getElementById("result").innerHTML = year + " KHÔNG là năm nhuận"; 
//     } else if (year % 100 == 0  && year % 400 ==0) {
//         document.getElementById("result").innerHTML = year + " LÀ năm nhuận"; 
//     } else {
//         document.getElementById("result").innerHTML = year + " KHÔNG là năm nhuận";
//     }
// }
