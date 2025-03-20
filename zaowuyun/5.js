// node .\5.js 运行

function dispatch(str) {

  let hasCalledWaitFirst = false
  let isPrinted = false

  if(!hasCalledWaitFirst){
    console.log(str)
    isPrinted = true
  }

  const liner = {

    async waitFirst(time) {
      hasCalledWaitFirst = true
      await new Promise((resolve) => setTimeout(resolve, time * 1000))
      console.log(`${time}秒后`)
      console.log(str)
      return this
    },

    println(string){
      console.log(string)
      return this
    },

    async wait(time){
      await new Promise((resolve) => setTimeout(resolve, time * 1000))
      console.log(`${time}秒后`)
      return this
    }
  }

  return liner
}


// 5.1
{
  dispatch('a')
}

// 5.2
{
  dispatch('a').println('b')
}

// 5.3
{
  (async ()=> {
    (await dispatch('a').wait('3')).println('b')
  })()
}

// 5.4
{
  (async ()=> {
    (await dispatch('a').waitFirst('3')).println('b')
  })()
}