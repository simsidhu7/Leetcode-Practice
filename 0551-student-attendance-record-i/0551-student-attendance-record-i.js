/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absent = 0;
    let late = 0;
    let award = true;
for (let i=0; i<s.length; i++){
    if (s[i] === 'A'){
        absent++;
    }
    if (s[i] === 'L'){
        late++;
    } else{
        late = 0;
    }
    if (absent >=2 || late >=3){
       award = false;
    }

}
    return award;
};

