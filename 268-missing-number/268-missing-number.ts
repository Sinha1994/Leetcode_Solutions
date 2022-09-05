function missingNumber(nums: number[]): number {
        let xor = 0^nums[0],j=1;
        for(let i=1;i<nums.length;i++,j++){
            xor = xor ^ (j ^ nums[i]);
        }
        xor = xor ^ j;
        return xor;
};