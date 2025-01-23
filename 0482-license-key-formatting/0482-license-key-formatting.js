/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.replaceAll('-','').toUpperCase().split('');
    let result = [];
    let counter=0;

    for (let i=s.length-1;i>=0;i--){
        result.push(s[i])
        counter++
        if (counter===k && i!=0){
            result.push('-')
            counter=0
        }
    }
    return result.reverse().join('')
    }
