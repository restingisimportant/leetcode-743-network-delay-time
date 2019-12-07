const {networkDelayTime, createGraph} = require('./networkDelayTime')

describe('createGraph', () => {
    test('One items', ()=> {
        const times = [[2,1,1]];
        const graphs = createGraph(times)
        const results = {
            2:[[1,1]]
        }
        expect(graphs).toEqual(results)
    })

    test('Two items', ()=> {
        const times = [[2,1,1],[2,3,2]];
        const graphs = createGraph(times)
        const results = {
            2:[[1,1],[3,2]]
        }
        expect(graphs).toEqual(results)
    })

    test('Three items, diffrent two origin', ()=> {
        const times = [[2,1,1],[2,3,2],[3,4,1]];
        const graphs = createGraph(times)
        const results = {
            2:[[1,1],[3,2]],
            3:[[4,1]]
        }
        expect(graphs).toEqual(results)
    })     
})

describe(('network delay time'), () => {
    test('One direct node', () => {
        const times = [[2,1,1]];
        const N = 2;
        const K = 2;
    
        const result = networkDelayTime(times, N, K)
    
        expect(result).toEqual(1)
    });

    test('Many nodes', () => {
        const times = [[1,2,1],[2,3,7],[1,3,4],[2,1,2]];
        const N = 4;
        const K = 1;
    
        const result = networkDelayTime(times, N, K)
    
        expect(result).toEqual(-1)
    });    
    
    // test('Two direct node with different time', () => {
    //     const times = [[2,1,1],[2,3,2]];
    //     const N = 2;
    //     const K = 2;
    
    //     const result = networkDelayTime(times, N, K)
    
    //     expect(result).toEqual(2)
    // });
})

