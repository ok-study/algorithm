function solution(jobs) {
    const length = jobs.length;
    let answer = 0,
        total = 0,
        runtime, i, j, item;

    while(jobs.length) {
        //실행시간마다 초기화
        runtime = 1000; //최대 1000
        let index;
        for(i = 0 ; i < jobs.length ; i ++) {
            //대기시간이 총 시간보다 같거나 작은거 찾기
            if(jobs[i][0] <= total) {
                //걔중 제일 runTime짧은거 찾기
                if(jobs[i][1] < runtime) {
                    index = i;
                    runtime = jobs[i][1];
                }
            }
        }

        if(index !== undefined) {
            item = jobs.splice(index, 1);
            total += item[0][1];
            answer += total - item[0][0];
        //없으면 남은놈중 대기시간 젤 짧은애 선정하기
        } else {
            let wait = jobs[0][0];
            for( j = 0 ; j < jobs.length; j++) {
                if(jobs[j][0] < wait) {
                    wait = jobs[j][0];
                }
            }
            total = wait;
        }
    }
    return parseInt(answer/length);
}

solution(jobs);