var minEatingSpeed = function(piles, H) {
    let l = 0,  r = Math.max.apply(Math,piles)+1;
    let h = 0;
    let m = 0;

    while(l<r) {
      console.log("l:",l,"r",r)
      h=0;
      m = l + Math.floor((r-l)/2);
      piles.forEach((p) => {
        h += Math.ceil(p/m);
      });
      console.log("h",h)
      console.log("m",m)

      if(h<=H) {
        r = m;
      } else {
        l = m+1;
      }
    }
    return l;
};

console.log(minEatingSpeed([30,11,23,4,20],6));
