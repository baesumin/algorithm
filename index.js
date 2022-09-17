let answer = []
let alpha = ['A', 'E', 'I', 'O', 'U'];
function solution(word) {
    for(let i=1;i<=5;i++){
        dfs(0,i)
    }
    answer.sort()
    // for(let i=0;i<50;i++){
    //     console.log(answer[i])
    // }
    return answer.indexOf(word)
    
}
function dfs(dist,num,arr=[]){
    if(dist===num){
        answer.push(arr.join(''))
    }else{
        for(let i=0;i<alpha.length;i++){
            arr.push(alpha[i])
            dfs(dist+1,num,arr)
            arr.pop()
        }
    }
}
solution('A')