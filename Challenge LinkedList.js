class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail= null;
    }
    append(node){
        const newNode = new Node(node);

        if (!this.head){
            this.head = newNode;
        }else{
            this.tail.next =newNode;
        }
        this.tail= newNode;
    }

    peek(value, current= this.head) {
        if (this.head === null){
            return false;
        }
        if(current !==null){
            if (current.value ===value){
                return true;
            }else{
                return this.peek(value,current.next)
            }
        }
        return false;
    }
    size(curren =this.head, acum=1){
        if (this.head ===null){
            return 0;
        }
        if(curren.next !== null){
            return this.size(current.next, acum = acum+1)
        }
        return acum;
    }
    remove(value, current= this.head){
        if (this.head ===null){
            return false;
        }
        if (this.head.value ===value){
            return this.head = this.head.next
        }
        if (current.next  !== null){
            if (current.next.value ===value){
                current.next = current.next.next;
                return true
            }else{
                return this.remove(value, current.next)
            }
        }
    }
    print(){
        let node = this.head;
        while (node!= null){
            console.log(`${node.value.toString()}`);
            node= node.next
        }
    }
}

class task{
    constructor(title, description, points){
        this.title = title;
        this.description = description;
        this.points = points;
    }
    
    toString(){
        return `Title: ${this.title}, Description: ${this.description}, Points: ${this.points}`;
    }
}

const task1 = new task("Complete Math Homework", "Finish all exercises from chapter 5 by tomorrow", 20);
const task2 = new task("Write Essay", "Compose a 1000-word essay on climate change", 30);
const task3 = new task("Clean the Garage", "Organize tools and declutter storage area", 15);
const task4 = new task("Prepare Presentation", "Gather data and create slides for Monday's meeting", 25);
const task5 = new task("Exercise Routine", "Complete 30 minutes of cardio and strength training", 10);

const list1 = new LinkedList();

list1.append(task1);
list1.append(task2);
list1.append(task3);
list1.append(task4);
list1.append(task5);

list1.print();