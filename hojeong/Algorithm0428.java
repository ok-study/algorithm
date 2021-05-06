import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;

// 가장 먼 노드
// https://programmers.co.kr/learn/courses/30/lessons/49189
/* 
    노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 
    1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.
*/
public class Algorithm0428 {
    public static void main(String[] args) {
        int n = 6;
        int[][] edge = {{3,6}, {4,3}, {3,2}, {1,3}, {1,2}, {2,4}, {5,2}}; // return 3;

        System.out.println(new Solution0428().solution(n, edge));
    }
    
}
class Solution0428 {
    public Solution0428() {}

    public int solution(int n, int[][] edge) {
        int answer = 0;
        // 인접 리스트
        ArrayList<ArrayList<Integer>> adjList = new ArrayList<ArrayList<Integer>>();
        // 그래프 탐색용 큐
        Queue<Integer> q = new LinkedList<Integer>();
            
        // 인접리스트 초기화
        for (int value = 0; value < n; value++) {
            adjList.add(new ArrayList<Integer>());
        }
        
        for (int value = 0; value < edge.length; value++) {
            // 배열 인덱스로 써먹게 -1 함
            int h = edge[value][0] - 1;
            int t = edge[value][1] - 1;
            // 무방향 그래프니까 양 방향 다 넣음
            adjList.get(h).add(t);
            adjList.get(t).add(h);
        }
        
        // 각 노드의 루트노드로부터의 거리를 담을 배열
        int[] count = new int[n];
        // 배열 초기화
        Arrays.fill(count, 0);
        // 루트 노드는 거리가 1
        count[0] = 1;
        // 초기노드 큐에 넣고
        q.add(0);
        int key = 0;
        
        // 인접리스트 순회하면서 현재 거리 = 선행노드의 거리 + 1함. value: 인접리스트 중 key 키를 가지는 value
        while(!q.isEmpty()) {
            key = q.poll();
            for(int value: adjList.get(key)) {
                if(count[value] == 0) {
                    count[value] = count[key] + 1;
                    q.add(value);
                }
            }
        }
        
        // 배열 내 최대값 찾고
        int max = Arrays.stream(count).max().getAsInt();
        // 최대값 갯수 세고
        answer = (int) Arrays.stream(count).filter(c -> c == max).count();
        return answer;
    }
    
}