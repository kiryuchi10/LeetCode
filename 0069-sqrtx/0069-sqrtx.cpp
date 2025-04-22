class Solution {
public:
    int mySqrt(int x) {
        if ( x < 2) return x;
        long r = x >> 1;
        while (r * r > x)
            r = (r + x / r) >> 1;
        return static_cast<int>(r);
    }
};