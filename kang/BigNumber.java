import java.util.Arrays;
import java.util.stream.Collectors;

public class BigNumber {
  public static void main(String[] args) {
    int[] numbers = {6,10,2};
    String answer = Arrays.asList(numbers).stream()
      .map(i -> String.valueOf(i))
      .sorted((a,b) -> Integer.parseInt(b+a)*1 - Integer.parseInt(a+b)*1)
      .collect(Collectors.joining(","));
    
  }
}
