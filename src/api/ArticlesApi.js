const delay = 1000; //Add n seconds delay to simulate server-side round-trip
const articles = [{
        id: 1,
        title: 'C# Fundamentals',
        description: 'A detailed description',
        author :  'Scott Allen',
        publishDate : new Date(2010,5,12),
        loadedDate :  new Date(2012,6,12)
    },
    {
        id: 2,
        title: 'F# Fundamentals',
        description: 'A detailed description about F#',
        author :  'John Papa',
        publishDate : new Date(2010,5,12),
        loadedDate :  new Date(2012,6,12)
    }
];

class ArticlesApi{
    
    static getAll(){
        return new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve(Object.assign([], articles));
            }, delay);
        });
    }
}

export default ArticlesApi;