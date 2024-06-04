function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph = new Map<number, number[]>()

    edges.forEach(([from, to])=>{
        if(!graph.has(from)) graph.set(from, [to])
        else graph.get(from).push(to)
        if(!graph.has(to)) graph.set(to, [from])
        else graph.get(to).push(from)
    })

    const queue: number[] = []
    const visited = new Set<number>()

    queue.push(source)

    while(queue.length !== 0){
        const node = queue.shift()
        if(node === destination) return true

        graph.get(node).forEach(i=>{
            if(!visited.has(i)){
                visited.add(i)
                queue.push(i)
            }
        })
    }

    return false
};