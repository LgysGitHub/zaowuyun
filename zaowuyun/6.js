// node .\6.js 运行

const sumFn = (s) => {
  const stack = [1]
  let sign = 1

  let sum = 0
  const len = s.length

  let i = 0
  while(i < len){
    if(s[i] == ' '){
      i++
    }else if(s[i] == '+'){
      sign = stack[stack.length - 1]
      i++
    }else if(s[i] == '-'){
      sign = -stack[stack.length - 1]
      i++
    }else if(s[i] == '('){
      stack.push(sign)
      i++
    }else if(s[i] == ')'){
      stack.pop()
      i++
    }else{
      let num = 0
      while(i < len && !isNaN(Number(s[i])) && s[i] !== ' '){
        num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt()
        i++
      }
      sum += num * sign
    }
  }
  console.log(sum)
  return sum
}

sumFn('1+1')
sumFn('2-1')