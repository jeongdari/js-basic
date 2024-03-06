function BubbleSort(A) {
    for (let i= 0; i < A.length; i++) {
        for (j = 0; j < A.length -1; j++) {
            if (A[j] > A[j+1]) {
                let tmp = A[j];
                A[j] = A[j+1];
                A[j+1] = tmp;
            }
               
        }
    }
    return A;
}
let a = [10, 15, 21, 3, 7, 99, 100, 25];
console.log(BubbleSort(a));