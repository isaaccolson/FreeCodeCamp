public class Solution {
    public int NumJewelsInStones(string J, string S) {
        var totalJewels = 0;
        foreach(char jewel in J){
            foreach (char stone in S){
                if(jewel == stone){
                    totalJewels++;
                }
        }
    }
         return totalJewels;
}

    //9 min and 36 sec

}
