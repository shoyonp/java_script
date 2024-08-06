const nums = [32,4,3,5,6,7,8,44,3,4,54];
let bignumber = 0 ;
for(let i =0 ; i< nums.length ; i++){
    if(nums[i] > bignumber){
        bignumber = nums[i]
    }
}


console.log(bignumber)

