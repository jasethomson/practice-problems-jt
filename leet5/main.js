var balancedStringSplit = function(s) {
    let l  = 0;
    let r = 0;
    let output =0;
    for(let strIndex = 0; strIndex < s.length; strIndex++){
        let tmp = s[strIndex];
        if(tmp === "R"){
            r++;
        } else {
            l++;
        }
        if(l===r){
            output++;
            r=0;
            l=0;
        }
    }
    return output;
};
