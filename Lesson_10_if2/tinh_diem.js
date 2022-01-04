function tinh_diem() {
    let toan = +document.getElementById("toan").value;
    let van = +document.getElementById("van").value;
    let anh = +document.getElementById("anh").value;
    let kv = document.getElementById("kv").value;
    let tong = toan + van + anh;
    // switch (kv) {
    //     case "1":
    //         tong += 0.75;
    //         document.getElementById("result").innerHTML = "Điểm đại học khối D của bạn là: " + tong;
    //         break;
    //     case "2NT":
    //         tong += 0.5;
    //         document.getElementById("result").innerHTML = "Điểm đại học khối D của bạn là: " + tong;
    //         break;
    //     case "2":
    //         tong += 0.25;
    //         document.getElementById("result").innerHTML = "Điểm đại học khối D của bạn là: " + tong;
    //         break;
    //     case "3":
    //         document.getElementById("result").innerHTML = "Điểm đại học khối D của bạn là: " + tong;
    //         break;
    // }
    switch (kv) {
        case "1":
            tong += 0.75;
            break;
        case "2NT":
            tong += 0.5;
            break;
        case "2":
            tong += 0.25;
            break;
        case "3":
            break;
    }
    document.getElementById("result").innerHTML = "Điểm đại học khối D của bạn là: " + tong;
}