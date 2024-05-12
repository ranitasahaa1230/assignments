const freq = (arr, M) => {
    const hm = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (hm.has(arr[i])) {
            let tmp = hm.get(arr[i]);
            hm.set(arr[i], tmp + 1);
        } else {
            hm.set(arr[i], 1);
        }
    }

    for (const v of M) {
        if (hm.has(v)) {
            console.log(hm.get(v));
        } else {
            console.log(0);
        }
    }
}

freq([2, 8, 9, 8, 8, 2, 11], ([2, 8]));
