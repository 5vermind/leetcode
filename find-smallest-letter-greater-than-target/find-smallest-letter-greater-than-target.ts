function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0, right = letters.length - 1
    
    while(left <= right){
        const mid = left + ~~((right - left) / 2)

        console.log(letters[mid], target, letters[mid].localeCompare(target))
        
        if(letters[mid].localeCompare(target) <= 0) left = mid + 1
        else right = mid - 1
    }

    console.log(left, right)


    return left === letters.length ? letters[0] : letters[left]
};