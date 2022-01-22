let star1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
let star2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]

function check_star(star) {
    let index_star1 = 0;
    let result = "";
    for (let i = 0; i < star1.length; i++) {
        if (star == star1[i]) {
            index_star1 = i;
            for(let j = 0; j < star2.length; j++) {
                if (index_star1 == j) {
                    result = star2[j];
                    return result;
                } else {
                    result = "Không tìm thấy chòm sao"
                    return result;
                }
            }
        } else {
            result = "Không tìm thấy sao";
            return result;
        }
    }

}
let star = prompt("Nhập vào ngôi sao: ")
document.write(check_star(star));