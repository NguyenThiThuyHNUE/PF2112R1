function year() {
    let year = document.getElementById("year").value;
    let can = year % 10;
    let chi = year % 12;
    let nam_can = "";
    let nam_chi = "";
    
    //Tính can
    switch (can) {
        case 0:
            nam_can = "Canh";
            break;
        case 1:
            nam_can = "Tân";
            break;
        case 2:
            nam_can = "Nhâm";
            break;
        case 3:
            nam_can = "Quý";
            break;
        case 4:
            nam_can = "Giáp";
            break;
        case 5:
            nam_can = "Ất";
            break;
        case 6:
            nam_can = "Bính";
            break;
        case 7:
            nam_can = "Đinh";
            break;
        case 8:
            nam_can = "Mậu";
            break;
        case 9:
            nam_can = "Kì";
            break;              
    }
    // Tính chi
    switch (chi) {
        case 0:
            nam_chi = "Thân";
            break;
        case 1:
            nam_chi = "Dậu";
            break;
        case 2:
            nam_chi = "Tuất";
            break;
        case 3:
            nam_chi = "Hợi";
            break;
        case 4:
            nam_chi = "Tý";
            break;
        case 5:
            nam_chi = "Sửu";
            break;
        case 6:
            nam_chi = "Dần";
            break;
        case 7:
            nam_chi = "Mão";
            break;
        case 8:
            nam_chi = "Thìn";
            break;
        case 9:
            nam_chi = "Tỵ";
            break;
        case 10:
            nam_chi = "Ngọ";
            break; 
        case 11:
            nam_chi = "Mùi";
            break;              
    }
    let lunar_year = nam_can + " " + nam_chi;
    document.getElementById("result").innerHTML = lunar_year;
}