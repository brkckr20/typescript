function Returner<T>(param:T) {
    return param;
}

const c = Returner(2 as number);

function createHeader<T extends object | [string,any][] >(param : T) {
    const headers = new Headers();
    if (Array.isArray(param)) {
        headers.set(param[0][0],param[0][1])
    }
}

createHeader(
    [
        ['Content-Type', 'application/json'],
        ['Content-Type', true],
    ]
)

createHeader<{'Content-Type':string}>({
"Content-Type" : "lorem"
})



interface Todo{
    userId :number,
    id :number,
    title :string,
    completed :boolean,
};


const resp = await makeFetch<Todo>("https://jsonplaceholder.typicode.com/todos/1");
const ts = useTimestamp(resp);

console.log(ts);

async function makeFetch<T extends object | any[] >(input: RequestInfo, init?: RequestInit) {
    
    const response = await fetch(input, init);
    return await response.json() as T;
}


function useTimestamp<T extends object>(obj: T) {
    return {
        ...obj,
        createdAt: Date.now()
    }
 }

export {}