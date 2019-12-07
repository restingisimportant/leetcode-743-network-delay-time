const createGraph = (times) =>  times.reduce((map, [startNumber, endNumber, time])=> ({...map, ...{[startNumber]: (map[startNumber] || []).concat([[endNumber,time]])} }),{})

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = function(times, N, K) {
    const graphs = createGraph(times)
    const distances = [...Array(N).keys()].reduce((map, key) => ({...map,[key+1]: Infinity}) ,{})
    const dfs = (node, elapsed) => {
        if(elapsed >= distances[node]){
            return;
        }

        distances[node] = elapsed;

        if(!graphs[node]){
            return;
        }

        const sortedNode = graphs[node].sort((a,b)=> a[1] > b[1] ? -1 : 1)
        for(let [nextNode, time] of sortedNode){
            dfs(nextNode, elapsed + time)
        }                
    }
    dfs(K, 0)
    const answer = Math.max(...Object.values(distances))
    return answer === Infinity ? - 1 : answer
};

module.exports = {networkDelayTime, createGraph}