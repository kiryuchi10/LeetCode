class Solution {
    public String gcdOfStrings(String str1, String str2) {
        //three condtions
        //two matching, three matching and nothing matching
        // strings are not empty 
        if (!(str1 + str2).equals(str2 + str1)) return ""; //if not equal return empty string
        // why equal no same pattern exist? explain?
        int gcdLen = gcd(str1.length(),str2.length()); // gcd() ?
        return str1.substring(0, gcdLen);
    }
     private int gcd(int a, int b) {
        return b == 0 ? a : gcd(b, a % b); // recursion if 0 (true), false redo
    }
}