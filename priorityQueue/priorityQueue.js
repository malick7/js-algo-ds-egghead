//create a priority Q by using a high priority queue and a low priority q
const { createQueue } = require('../queues/index');

function createPriorityQueue() {

    //create 2 Q's in closure
    const lowPriorityQ = createQueue();
    const highPriorityQ = createQueue();

    return { 
        //add or enqueue - we'll add to highpriority Q if isHighpriority is true
        enqueue(item, isHighpriority = false){
            isHighpriority ? highPriorityQ.enqueue(item) : lowPriorityQ.enqueue(item);
        },
        //remove or dequeue - all high priority items are dequed first
        dequeue(){
            if(!highPriorityQ.isEmpty()){
                return highPriorityQ.dequeue();
            }
            return lowPriorityQ.dequeue();
        },
        //peek
        peek(){
            if(!highPriorityQ.isEmpty()){
                return highPriorityQ.peek();
            }
            return lowPriorityQ.peek();
        },
        //length
        get length(){
            return highPriorityQ.length + lowPriorityQ.length;
        },
        //isEmpty
        isEmpty(){
            //return (highPriorityQ.length + lowPriority.length) === 0;
            return (
                highPriorityQ.isEmpty() && lowPriority.isEmpty()
            );
        }
    }
}

const q = createPriorityQueue();

q.enqueue('A fix here')
q.enqueue('A bug there')
q.enqueue('A new feature')

q.dequeue()
q.enqueue('Emergency task!', true)
console.log(q.dequeue())
console.log(q.peek())

exports.createPriorityQueue = createPriorityQueue

