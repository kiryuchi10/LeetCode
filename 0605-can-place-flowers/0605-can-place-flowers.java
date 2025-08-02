class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        // adjacent space next to planted index cannot be planted
        //
        int count = 0;
        for (int i = 0; i < flowerbed.length; i++){
            if (flowerbed[i] == 0) {
                 boolean empty_left = (i == 0 || flowerbed[i - 1] == 0);
            boolean empty_right = (i == flowerbed.length - 1 || flowerbed[i + 1] == 0);
               // count from left?
              // count from right? to see adjacent spot plantable?
                if (empty_left && empty_right){
                    flowerbed[i] = 1;
                    count++;
                }

            }
        }
        return count >= n;
    }
}