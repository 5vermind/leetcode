class UnionFind {
    root: number[]
    rank: number[]
    constructor(length: number){
        this.root = Array.from({length}, (_, i)=>i)
        this.rank = Array.from({length}, _=>1)
    }
    find(x: number){
        if(x !== this.root[x]){
            this.root[x] = this.find(this.root[x])
        }
        return this.root[x]
    }
    union(x: number, y:number){
        const rootX = this.find(x)
        const rootY = this.find(y)

        if(rootX !== rootY){
            if(this.rank[rootX] > this.rank[rootY]){
                this.root[rootY] = rootX
            }
            else if(this.rank[rootX] < this.rank[rootY]){
                this.root[rootX] = rootY
            }
            else {
                this.root[rootY] = rootX
                this.rank[rootX] += 1
            }
            return true
        }
        return false
    }

}


function minCostConnectPoints(points: number[][]): number {
    const n = points.length
    const allEdges = []

    for(let currNode = 0; currNode < n; ++currNode){
        for(let nextNode = currNode + 1; nextNode < n; ++nextNode){
            let weight = Math.abs(points[currNode][0] - points[nextNode][0]) + 
                         Math.abs(points[currNode][1] - points[nextNode][1]);
            allEdges.push([weight, currNode, nextNode])
        }
    }

    allEdges.sort((a, b)=>a[0] - b[0])

    const uf = new UnionFind(n)
    let mstCost = 0
    let edgesUsed = 0

    for(let i = 0; i < allEdges.length && edgesUsed < n - 1; ++i){
        let [weight, node1, node2] = allEdges[i]

        if(uf.union(node1, node2)){
            mstCost += weight
            edgesUsed ++
        }
    }

    return mstCost
};