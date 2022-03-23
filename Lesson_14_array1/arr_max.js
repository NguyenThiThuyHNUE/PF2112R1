// let arr = [1, 3, -5, 6, 0, 8, 4];
// let max = arr[0];
// let index = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//         index = i;
//     }
// }
// document.write("Số lớn nhất trong mảng là " + max + "<br>" + "Vị trí thứ: " + index)



let arr = new Array(1, 3, -5, 6, 0, 8, 4);
let max = arr[0];
let index;
for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
        index = i;
    }
}
document.write("Mảng  "+arr+" có:" +"</br>"+"số lớn nhất trong mảng là " + max + "<br>" + "Vị trí thứ: " + index)