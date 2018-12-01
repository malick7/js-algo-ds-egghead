//Queues - FIFO

//factory function that returns a Queue
function createQueue() {

    const queue = []; //a array in closure to hold elements

    return{
        //add or enqueue
        enqueue(item){
            queue.unshift(item);
        },
        //remove or dequeue
        dequeue(){
            if (queue.length === 0) {
                return undefined
            }
            return queue.pop();
        },
        //peek
        peek(){
            if (queue.length === 0) {
                return undefined
            }
            return queue[queue.length-1]; //item that is to be removed last
        },
        //length
        get length(){
            return queue.length;
        },
        //isEmpty
        isEmpty(){
            return queue.length === 0;
        },
        //getQueue
        getQueue(){
            return JSON.stringify(queue);
        }
    }
}

const q = createQueue();
console.log(q.isEmpty());
q.enqueue(1);q.enqueue(2);q.enqueue(3);q.enqueue(4);q.enqueue(5);
console.log(q.getQueue() + " Length = " + q.length );
q.dequeue();q.dequeue();
console.log(q.getQueue() + " Length = " + q.length );
console.log(q.peek());

exports.createQueue = createQueue;

// module.exports = {
//     createQueue
// }