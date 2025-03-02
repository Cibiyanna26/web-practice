const add = (a, b) => {
  return a + b;
};

const mul = (a,b) =>{
    return a*b;
}

const fetchData = (callback) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let name= "cibi"
            let error = false
            callback(name, error)
            resolve("finished")
        }, 100);
    })
}


module.exports = 
    {
        add,
        mul,
        fetchData
    };