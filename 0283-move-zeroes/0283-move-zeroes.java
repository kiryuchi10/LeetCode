class Solution {
    public void moveZeroes(int[] nums) {
        int lastNoneZeroFindAt = 0;

        for (int i =0; i < nums.length; i++){
            // read list at index i
            if (nums[i] != 0) {
              int temp = nums[lastNoneZeroFindAt];
              nums[lastNoneZeroFindAt] = nums[i];
              nums[i] = temp;
              lastNoneZeroFindAt++;

            } 
        }
    }
}

