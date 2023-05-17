function compress(st) {
    let result = "";
    let count = 1;
    
    for (let i = 0; i <= st.length; i++) {
      if (st[i] === st[i - 1]) {
        count++;
      } else {
        result += (count > 1 ? count : "") + st[i - 1];
        count = 1;
      }
    }
    
    return result;
  }
  
 let st = "aabbcde"
 console.log(compress(st))