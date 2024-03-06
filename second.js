console.log("WK1-Exercise02");
function SelectionSort(A) {
    for (let i =0; i < A.length; i++) {
        let min = i;
        for (let j = i+1; j < A.length; j++) {
            if (A[j] < A[min]) {
                min = j;
            }
        }
        let tmp = A[i];
        A[i] = A[min];
        A[min] = tmp;
    }
    return A;
}
let a = [10, 15, 21, 3, 7];
console.log(SelectionSort(a));