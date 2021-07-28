function solution(number, k) {
    const length = number.length - k
    const stack = [];

    number.split('').map(ch => {
        while(stack.length > 0 && stack[stack.length - 1] < ch && k > 0) {
            k--;
            stack.pop();
        }
        stack.push(ch);
    })

    return stack.slice(0, length).join('')
}