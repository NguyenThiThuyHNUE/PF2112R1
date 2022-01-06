function xem_gia() {
    let product = document.getElementById("product").value;
    switch (product) {
        case "Ổi":
            document.getElementById("result").innerHTML = "20000 VNĐ/kg";
            break;
        case "Dưa Hấu":
            document.getElementById("result").innerHTML = "20000 VNĐ/kg";
            break;
        case "Táo":
            document.getElementById("result").innerHTML = "30000 VNĐ/kg";
            break;
        case "Xoài":
            document.getElementById("result").innerHTML = "30000 VNĐ/kg";
            break;
        case "Cam":
            document.getElementById("result").innerHTML = "40000 VNĐ/kg";
            break;
        case "Chôm Chôm":
            document.getElementById("result").innerHTML = "40000 VNĐ/kg";
            break;
        case "Măng Cụt":
            document.getElementById("result").innerHTML = "50000 VNĐ/kg";
            break;
        default:
            document.write("Vui lòng nhập lại sản phẩm");
    }
}