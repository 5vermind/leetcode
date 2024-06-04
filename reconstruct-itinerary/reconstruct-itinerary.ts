function findItinerary(tickets: string[][]): string[] {
    const graph = new Map<string, string[]>()

    tickets.forEach(([from, to])=>{
        if(!graph.has(from)) graph.set(from, [to])
        else {
            graph.get(from).push(to)
        }
        if (!graph.has(to)) {
            graph.set(to, []);
        }
    })

    graph.forEach((value)=>{
        value.sort()
    })

    const route = []

    console.log(graph)

    const dfs = (node: string) => {
        const destList = graph.get(node) || []

        while(destList.length > 0){
            const next = destList.shift()
            dfs(next)
        }
        route.push(node)
    }

    dfs("JFK")

    console.log(route)

    return route.reverse()
};