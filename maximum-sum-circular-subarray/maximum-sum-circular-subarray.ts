function maxSubarraySumCircular(nums: number[]): number {
    let max = -Infinity
    let min = Infinity
    let total = 0

    let curMax = 0
    let curMin = 0

    for(const num of nums){
        curMax = Math.max(curMax + num, num)
        max = Math.max(curMax, max)

        curMin = Math.min(curMin + num, num)
        min = Math.min(curMin, min)
        total += num
    }

    if(total === min) return max

    return Math.max(max, total - min)
};
