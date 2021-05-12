import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class ListGraph {
    private ArrayList<ArrayList<Integer>> listGraph;
    // 그래프 초기화
    public ListGraph(int initSize) {
        this.listGraph = new ArrayList<ArrayList<Integer>>(); // 그래프 생성
        for(int i = 0; i < initSize + 1; i++) {
            listGraph.add(new ArrayList<Integer>());
        }
    }
    // 그래프 값할당
    public void init(int [][] edge) {
      for (int i = 0 ; i < edge.length ; i ++) {
        this.put(edge[i][0], edge[i][1]);
      }
    }

    // 그래프 return
    public ArrayList<ArrayList<Integer>> getGraph() {
        return this.listGraph;
    }
    // 그래프의 특정 노드 return
    public ArrayList<Integer> getNode(int i) {
        return this.listGraph.get(i);
    }
    // 그래프 추가 (양방향)
    public void put(int x, int y) {
        listGraph.get(x).add(y);
        listGraph.get(y).add(x);
    }

    //입력된 값에서 제일 멀리 떨어진 노드 개수 구하기
    public int lastNodeNumber(int i) {
      int result = 0;
      // i node에 대한 각 레벨 노드
      List<List<Integer>> depth = new ArrayList<List<Integer>>();
      //  현재 레밸 저장용
      List<Integer> currentLevel;
      //임시 저장소 및 중복 저장 X
      Set<Integer> temp = new HashSet<Integer>();
      //i에 대해 연결된 애들 저장
      List<Integer> connect = new ArrayList<Integer>();
      //i를 위한 list 생성
      depth.add(new ArrayList<Integer>());
      //i저장
      depth.get(result).add(i);
      //마지막 depth에 사이즈가 0이면 더이상 갈 곳 없음
      while(depth.get(result).size() != 0) {
        currentLevel = depth.get(result);
        for(int idx = 0 ; idx < currentLevel.size() ; idx++) {
          //이미 연결될경우 무시
          if(connect.contains(currentLevel.get(idx))) {
            continue;
          } else {

            connect.add(currentLevel.get(idx));
          }
          //만약 depth size가 추가가 안되었을때 여기 리팩토링 가능할듯? 이게 왜 여기있지?
          if(depth.size() == result+1) {
            depth.add(new ArrayList<Integer>());
          }
          //임시 저장
          temp.addAll(listGraph.get(currentLevel.get(idx)));

        }
        //임시저장한 값중 이전에 connect된 값이 있으면 삭제
        temp.removeAll(connect);
        //뎁스에 저장
        depth.get(result+1).addAll(temp);
        result++;
      }
      //마지막 뎁스는 텅 비어있으므로 -> 생각해보니 마지막 뎁스를 지우면되네
      return depth.get(result - 1).size();
    }
}

class Graph {
    public int solution(int n, int[][] edge) {
        int answer = 0;
        ListGraph adjList = new ListGraph(n);
        adjList.init(edge);
        answer = adjList.lastNodeNumber(1);
        return answer;
    }
}
