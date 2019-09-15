function matrixcells(R, C, r0, c0) {
    let tempArr = [];
    let results = [];
    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++) {
            let dt = Math.abs(r0 - i) + Math.abs(c0 - j);
            tempArr.push({
                distance: dt,
                coordinates: [i,j]
        });
        }
    }
    tempArr.sort( (a,b) => a.distance - b.distance);
    for(let k = 0; k < tempArr.length; k++) {
        results.push(tempArr[k].coordinates);
    }
    return results;
}

console.log(matrixcells(2,3,1,2));