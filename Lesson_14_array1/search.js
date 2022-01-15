
let element = prompt("Nhập số: "); 
let arr = [1,2,3,4,5,6,7,8,9,10];
let flag = false;
for(let i = 0; i < arr.length; i++) {
    if (element ==  arr[i]) {
        flag = true;
        break;
    } 
}

if(flag) {
    document.write("Có tồn tại")
} else {
    document.write("Không tồn tại")
}