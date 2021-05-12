import java.util.Arrays;

class Solution {
  public static int[] solution(int[] progresses, int[] speeds) {
      int[] answer = {};
      int left = 0;
      int day = 1;
      int point = 0;
      int index = 0;
      answer = Arrays.copyOf(answer, answer.length+1);
      while(true) {

        if(progresses[index]+ (speeds[index] * day) >= 100) {
          if(point == 0) {
            answer = Arrays.copyOf(answer, answer.length+1);
          }
          answer[point] += 1;
        } else {
          answer = Arrays.copyOf(answer, answer.length+1);
          left = 100 - (progresses[index] + (speeds[index] * day));
          day = day + (int)Math.ceil(left / speeds[index]);
          answer[point] +=1;
          point += 1;
        }
        index +=1;
        if(index == progresses.length) {
          break;
        }
      }
      // for(int i = 0 ; i < progresses.length ; i++) {
      //   if(progresses[i] + (speeds[i] * day) < 100) {
      //     point++;
      //     answer = Arrays.copyOf(answer, answer.length+1);
      //     left = 100 - progresses[i];
      //     day = (day + (int)Math.ceil(left / speeds[i]));
      //     answer[point] = answer[point] + 1;
      //     System.out.println("answer[point] : " + answer[point]);
      //   } else {
      //     answer[point] = answer[point] + 1;
      //   }
      // }
      return answer;
  }

  public static void main(String[] args) {
    int[] i = {95, 90, 99, 99, 80, 99};
    int[] x = {1,1,1,1,1,1};
    int[] answer = Solution.solution(i, x);

    for (int index = 0 ; index < answer.length ;index ++) {
      System.out.println(answer[index]);
    }
  }
}

