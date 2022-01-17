let arr = ["Nguyễn Văn A", "Nguyễn Văn B"];

function Add() {
    let name = document.getElementById('name').value;
    arr.push(name);
    alert("Đã thêm: " + name);

}

function Delete() {
    arr.pop();
}


function Display() {
    let list = '';
    for (let i = 0; i < arr.length; i++) {
        list += arr[i] + "</br>";
    }
    document.getElementById("result").innerHTML = list;
}