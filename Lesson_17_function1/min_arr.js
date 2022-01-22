function minArray(arr) {
    if(arr.length == 0)
        return -1;
    let min = arr[0];
    let index_min = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
            index_min = i;
        }
    }
    return index_min;
}
let arr1 = [1,8,-1,6,0];
let min = minArray(arr1);
alert(min);