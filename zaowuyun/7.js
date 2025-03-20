// node .\7.js 运行

class Scheduler {
  constructor(){
    this.count = 2
    this.queue = []
    this.run = []
  }
  add(task){
    this.queue.push(task)

    this.runTask()
  }
  runTask(){
    while(this.run.length < this.count && this.queue.length > 0){
      const itemTask = this.queue.shift()
      const promise = itemTask().then(() => {
        this.run.splice(this.run.indexOf(promise), 1)

        this.runTask()
      })
      this.run.push(promise)
    }
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => {
    return timeout(time).then(()=>{
      console.log(order)
    })
  })
}


addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')