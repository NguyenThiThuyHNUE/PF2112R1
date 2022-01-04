        
    let tank = document.getElementById("tank");
    let boom = document.getElementById("boom");
    let top_boom = parseInt(boom.style["top"]);
    let left_boom = parseInt(boom.style["left"]);

    function moveUp() {
        let top_tank = parseInt(tank.style["top"]); //0
        let left_tank = parseInt(tank.style["left"]);
        tank.style["top"] =  top_tank - 19 + "px"; //-19

        top_tank = parseInt(tank.style["top"]); 
        left_tank = parseInt(tank.style["left"]);

        if (top_tank == top_boom && left_tank == left_boom) {
            tank.style.backgroundImage = "url('https://media.istockphoto.com/vectors/boom-effect-vector-id916028398')"
            tank.style.zIndex = 1;
        }
    }


    function moveDown() {
        let top_tank = parseInt(tank.style["top"]);
        let left_tank = parseInt(tank.style["left"]);
        tank.style["top"] =  top_tank + 19 + "px";
        top_tank = parseInt(tank.style["top"]);
        left_tank = parseInt(tank.style["left"]);

        if (top_tank == top_boom && left_tank == left_boom) {
            tank.style.backgroundImage = "url('https://media.istockphoto.com/vectors/boom-effect-vector-id916028398')"
            tank.style.zIndex = 1;
        }
    }

    function moveLeft() {
        let top_tank = parseInt(tank.style["top"]);
        let left_tank = parseInt(tank.style["left"]);
        tank.style["left"] =  left_tank - 19 + "px";

        top_tank = parseInt(tank.style["top"]);
        left_tank = parseInt(tank.style["left"]);

        if (top_tank == top_boom && left_tank == left_boom) {
            tank.style.backgroundImage = "url('https://media.istockphoto.com/vectors/boom-effect-vector-id916028398')"
            tank.style.zIndex = 1;
        }
    }

    function moveRight() {
        let top_tank = parseInt(tank.style["top"]);
        let left_tank = parseInt(tank.style["left"]);
        tank.style["left"] =  left_tank + 19 + "px";
        top_tank = parseInt(tank.style["top"]);
        left_tank = parseInt(tank.style["left"]);

        if (top_tank == top_boom && left_tank == left_boom) {
            tank.style.backgroundImage = "url('https://media.istockphoto.com/vectors/boom-effect-vector-id916028398')"
            tank.style.zIndex = 1;
        }
    }



    // function explosion() {
    //     let top_tank = parseInt(tank.style["top"]);
    //     let left_tank = parseInt(tank.style["left"]);
    //     let top_boom = ParseInt(boom.style["top"]);
    //     let left_boom = ParseInt(boom.style["left"]);
    //     if (top_tank == top_boom && left_tank == left_boom) {
    //         document.getElementById("tank").style.backgroundImage="https://media.istockphoto.com/vectors/boom-effect-vector-id916028398"
    //     }
    // }
    



  


    