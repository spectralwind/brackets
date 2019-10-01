module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    for (let n = 0; n < bracketsConfig.length; n += 1) {
      const currentBr = str[i];
      const lastBr = stack[stack.length - 1];
      const openBr = bracketsConfig[n][0];
      const closeBr = bracketsConfig[n][1];
      
      if (currentBr === openBr) {
        if (lastBr === closeBr) {
          stack.pop();
        } else stack.push(currentBr); 
      } else if (currentBr === closeBr) {
          if (stack.length > 0) {
            if (lastBr === openBr) {
              stack.pop();
            }
          } else return false;
        }
    }
  }
  return stack.length === 0;
}
