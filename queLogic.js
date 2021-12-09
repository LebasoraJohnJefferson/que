var start = document.getElementById('start')
var end = document.getElementById('end')
var content = document.getElementById('content')
var front_content = document.getElementById('front_content')
var rear_content = document.getElementById('rear_content')
var rear = 0
var front = 0
var count = 0
var tempo = 0
var max_index = 6
var loop_length = 10
var front_class = []
var rear_class = []
let duration = 1000
let queArray = new Array();



const movement_duration = () =>{
    return  Math.floor(Math.random() * loop_length)
}

const pointer = (node)=>{
    if(node>=max_index){
        node = 0 
    }
    return node
}


const Enqueue = (front) =>{
    if(queArray[front]==undefined){
        if(count%3.5 == 0){
            queArray[front] = movement_duration()
            front+=1
        }
    }
    return front = pointer(front)
}

const Dequeue = (rear,count) =>{
    if(queArray[rear] != undefined && count == queArray[rear]){
        queArray[rear]=undefined
        rear+=1
        tempo = 1
    }
    return rear = pointer(rear)
}


start.addEventListener('click',()=>{
    animate = setInterval(()=>{
        content.innerHTML = `
                <td>status</td>
                <td>${queArray[0]}</td>
                <td>${queArray[1]}</td>
                <td>${queArray[2]}</td>
                <td>${queArray[3]}</td>
                <td>${queArray[4]}</td>
                <td>${queArray[5]}</td>`

        for(let i = 0; i <queArray.length; i++){
            front_class[i] = 'no_background'
            rear_class[i] = 'no_background'
        }

        front_class[front] = 'green'
        rear_class[rear] = 'red'

        front_content.innerHTML= `
                <td>Front: ${front}</td>
                <td class=${front_class[0]}></td>
                <td class=${front_class[1]}></td>
                <td class=${front_class[2]}></td>
                <td class=${front_class[3]}></td>
                <td class=${front_class[4]}></td>
                <td class=${front_class[5]}></td>`
        rear_content.innerHTML= `
                <td>Rear: ${rear}</td>
                <td class=${rear_class[0]}></td>
                <td class=${rear_class[1]}></td>
                <td class=${rear_class[2]}></td>
                <td class=${rear_class[3]}></td>
                <td class=${rear_class[4]}></td>
                <td class=${rear_class[5]}></td>`
        front = Enqueue(front)
        rear = Dequeue(rear,count)
        count+=1
        if(tempo){
            count = 0
            tempo=0
        }
        console.log(count)
        console.log(queArray)
    },duration)
})

end.addEventListener('click',()=>{ 
    clearInterval(animate)
    clearInterval(deleting)
 })
