function mySqrt(x: number): number {
    if(x < 2) return x

    let num = 0
    let pivot

    let left = 2
    let right = ~~(x / 2)
    
    while(left <= right){
        const pivot = left + (~~((right - left) / 2)) // 오버플로우 예방
        num = pivot * pivot
        if(num > x) right = pivot - 1
        else if(num < x) left = pivot + 1
        else return pivot
    }
    return right
};