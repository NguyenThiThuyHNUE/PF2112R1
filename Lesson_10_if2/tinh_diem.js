function tinh_diem() {
    let toan = +document.getElementById("toan").value;
    let van = +document.getElementById("van").value;
    let anh = +document.getElementById("anh").value;
    let kv = document.getElementById("kv").value;
    let tong = toan + van + anh;
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