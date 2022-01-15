
function dao_nguoc() {
    let arr = [1,2,3,4,5,6];
    let first = 0;
    let last = arr.length - 1;
    for (first; first < last; first++, last--) {
        let b = arr[first]; 
        arr[first] = arr[last];
        arr[last] = b; 
    }
    document.write(arr);
    
}