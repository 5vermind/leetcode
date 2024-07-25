/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: (version: number) => boolean ) {
    return function(n: number): number {
        let left = 1, right = n
        
        while(left < right){
            const middle = left + ~~((right - left) / 2)
            if(isBadVersion(middle)) right = middle
            else left = middle + 1
        }
        
        return left
    };
};