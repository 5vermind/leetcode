function minCostII(costs: number[][]): number {
    const dp = Array.from(costs)

    for(let i = 1; i < costs.length; i++){
        for(let j = 0; j < costs[0].length; j++){
            const min = costs[i - 1].filter((_, k) => k !== j)
            dp[i][j] += Math.min(...min) 
        }
    }

    console.log(dp)

    return Math.min(...dp[dp.length - 1])
};

/**

dp[i][k] = min(dp[i-1][^k]) + costs[i][k]





 */