/*
* 문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

* 제한 조건
n은 2이상 1000000이하의 자연수입니다.

* 입출력 예
n	result
10	4
5	3

* 입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

/* 처음 시도했던 코드 => 시간 초과 */
function solution(n) {
    let arr1 = [];
    let arr2 = [];
    let i = 2;
    while(i <= n) {
        for(let j = 1; j <= n; j++) {
            if(j % i === 0) {
                arr1.push(j);
            }
            if(arr1.length === 2) {
                arr2.push(i);
            }
        }
      i++;
      arr1 = []; // 초기화
    }
    return arr2.length;
}

/* 에라토스테네스의 체의 방법 이용 */
function solution(n) {
    let arr = new Array(n + 1).fill(true);
    arr[0] = false;
    arr[1] = false;
    
    for(let i = 2; i * i <= n; i++) {
        if(arr[i]) {
            for(let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    const result = arr.filter((num) => num == true)
    return result.length
}
