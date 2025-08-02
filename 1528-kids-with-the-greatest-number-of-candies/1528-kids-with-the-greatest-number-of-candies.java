class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        //List <Boolean> means it will be list of boolean type object 0 or 1 , or fasle or true?
        List <Boolean> result = new ArrayList<>();
        // what does ArrayList<>() do? ist there anything like it to make object?
        int max = 0;
        for (int candy : candies) {
            // int candy : candies mean getting each of candies for every different candy input into the for loop?
            if (candy > max) {
                max = candy; // reinitialize max 
            }
        }

        for (int candy : candies) {
            result.add(candy + extraCandies >= max);
        }

        return result;
    }
}