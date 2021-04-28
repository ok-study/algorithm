import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class Algorithm0421 {
    public static void main(String[] args) throws Exception {
        // int[] progresses = {93, 30, 55};
        // int[] speeds = {1, 30, 5}; // [2, 1]
        int[] progresses = {95, 90, 99, 99, 80, 99};
        int[] speeds = {1, 1, 1, 1, 1, 1}; // [1,3,2]
        
        System.out.println(Arrays.toString(new Solution().solution(progresses, speeds)));
    }
}

class Solution {
    public Solution() {}

    public int[] solution(int[] progresses, int[] speeds) {
        Queue<Integer> queue = new LinkedList<Integer>();
        List<Integer> list = new ArrayList<Integer>();

        for(int i=0; i<progresses.length; i++) {
            int daysToComplete = (int) Math.ceil((100 - progresses[i]) / (double)speeds[i]);
            if(!queue.isEmpty() && queue.peek() < daysToComplete) {
                list.add(queue.size());
                queue.clear();
            }
            queue.add(daysToComplete);
        }
        list.add(queue.size());
        
        int[] answer = new int[list.size()];
        for(int i=0; i<list.size(); i++) {
            answer[i] = list.get(i);
        }

        return answer;
    }
}