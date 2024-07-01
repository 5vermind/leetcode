class Heap<T> {
  heap: {value: T, frequency: number}[]
  constructor() {
    this.heap = []
  }
  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }
  getLeftChildIndex(index: number): number {
    return index * 2 + 1
  }
  getRightChildIndex(index: number): number {
    return index * 2 + 2
  }
  heapifyUp(index: number): void {
    let currentIndex = index

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex)

      if (this.heap[currentIndex].frequency < this.heap[parentIndex].frequency) {
        ;[this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex]
        ]
        currentIndex = parentIndex
      } else {
        break
      }
    }
  }
  heapifyDown(index: number): void {
    let currentIndex = index

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex)
      const rightChildIndex = this.getRightChildIndex(currentIndex)
      let smallestIndex = currentIndex

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].frequency < this.heap[smallestIndex].frequency
      ) {
        smallestIndex = leftChildIndex
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].frequency < this.heap[smallestIndex].frequency
      ) {
        smallestIndex = rightChildIndex
      }

      if (smallestIndex !== currentIndex) {
        ;[this.heap[currentIndex], this.heap[smallestIndex]] = [
          this.heap[smallestIndex],
          this.heap[currentIndex]
        ]
        currentIndex = smallestIndex
      } else {
        break
      }
    }
  }
  insert(value: T, frequency: number): void {
    this.heap.push({value, frequency})
    this.heapifyUp(this.heap.length - 1)
  }
  extractMin(): {value: T, frequency: number} | null {
    if (this.heap.length === 0) {
      return null
    }
    const min = this.heap[0]

    if (this.heap.length > 1) {
      const lastValue = this.heap.pop() as {value: T, frequency: number}

      this.heap[0] = lastValue
      this.heapifyDown(0)
    } else {
      this.heap.pop()
    }

    return min
  }
  peek(): {value: T, frequency: number} | null {
    if (this.heap.length === 0) {
      return null
    }

    return this.heap[0]
  }
  size(): number {
    return this.heap.length
  }
  isEmpty(): boolean {
    return this.heap.length === 0
  }
}

function topKFrequent(nums: number[], k: number): number[] {
    const counter = new Map<number, number>()

    nums.forEach((num)=>{
        if(!counter.has(num)) counter.set(num, 1)
        else counter.set(num, (counter.get(num) || 0) + 1)
    })

    const uniqueNums = Array.from(counter.keys())

    console.log(uniqueNums)
    console.log(counter)

    const heap = new Heap<number>()

    uniqueNums.forEach((num)=>{
        const frequency = counter.get(num) || 0
        if(heap.size() !== k){
            heap.insert(num, frequency)
        }
        else {
            const root = heap.peek()
            if((root?.frequency || 0) < frequency){
                heap.extractMin()
                heap.insert(num, frequency)
            }
        }
    })
    console.log(heap.heap)

    return heap.heap.map(i=>i.value)
};