import java.util.*
import kotlin.collections.ArrayList

fun solution(n: Int, edge: Array<IntArray>): Int {
    var answer = 0
    val linkedList = ArrayList<ArrayList<Int>>()

    //인접리스트 만들기
    for (i in 0..n) {
        linkedList.add(ArrayList())
    }

    for (array in edge) {
        val x = array[0]
        val y = array[1]

        linkedList[x].add(y)
        linkedList[y].add(x)
    }

    //방문확인과 동시에 노드까지 걸린 거리를 담을 배열, n번 노드의 정보도 담기위해 n+1개
    val distance = IntArray(n + 1)
    val queue = LinkedList<Int>()
    var distanceMax = 0

    queue.add(1)
    distance[1] = 0

    while (queue.isNotEmpty()) {
        val current = queue.poll()

        for (i in linkedList[current].indices) {
            //다음 차례 예정 노드
            val next = linkedList[current][i]

            //next 노드에 방문한적이 있는지 확인하여 미방문시 queue에 추가함
            //미방문일 경우에 next노드 거리에 current노드의 거리 +1 을 함
            if (distance[next] == 0) {
                distance[next] = distance[current] + 1
                if (distance[next] > distanceMax) {
                    distanceMax = distance[next]
                }
                queue.add(next)
            }
        }
    }

    //1은 출발점이기 때문에 제외하여 idx 2부터 distance 내에 최고 거리와 같은 거리를 가진 개체의 갯수를 셈
    for (j in 2 until distance.size) {
        if (distance[j] == distanceMax) {
            answer++
        }
    }
    return answer
}
