
function permu(arr) {
    return arr.reduce(
      function(tempArr, x) {
        let results = [];

        tempArr.forEach(function(v) {
        for (let i = v.length; i >= 0; i--) {
            let nv = [].concat(v);
            nv.splice(i, 0, x);
            results.push(nv);
        }
        });
        return results;
    },
    [[]]
    );
}
console.log(permu([0,1,2]));


function permu(a) {
    return a.reduce(
      function(list, element) {
        var newlist = [];
  
        list.forEach(function(seq) {
          for (var i = seq.length; i >= 0; i--) {
            var newseq = [].concat(seq);
            newseq.splice(i, 0, element);
            newlist.push(newseq);
          }
        });
        return newlist;
      },
      [[]]
    );
  }
  
  