class UnionFind{
    root: number[]
    rank: number[]
    constructor(size: number){
        this.root = Array.from({length: size}, (_, i)=>i)
        this.rank = Array.from({length: size}, _=>1)
    }
    find(x:number): number{
        if(x === this.root[x]){
            return x
        }
        this.root[x] = this.find(this.root[x])
        return this.root[x]
    }
    union(x:number, y:number){
        const rootX = this.find(x)
        const rootY = this.find(y)
        if(rootX !== rootY){
            if(this.rank[rootX] > this.rank[rootY]){
                this.root[rootY] = rootX
            }
            else if(this.rank[rootY] > this.rank[rootX]){
                this.root[rootX] = rootY
            }
            else {
                this.root[rootY] = rootX
                this.rank[rootX] += 1
            }
        }
    }
    connected(x:number, y:number){
        return this.find(x) === this.find(y)
    }
    provinces(){
        const uniqueRoots = new Set<number>();
        for (let i = 0; i < this.root.length; i++) {
            // This ensures that we are accessing the fully path-compressed root
            uniqueRoots.add(this.find(i));
        }
        return uniqueRoots.size;
    }
}

function findCircleNum(isConnected: number[][]): number {
    const unionFind = new UnionFind(isConnected.length)
    
    isConnected.forEach((row, i)=>{
        row.forEach((val, j)=>{
            if(val===1 && i!==j && !unionFind.connected(i, j)){
                unionFind.union(i, j)
            }
        })
    })
    
    return unionFind.provinces()
};