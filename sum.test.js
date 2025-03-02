const {add, mul, fetchData} =  require('./sum.js');

test("the name is cibi", (done)=>{

    function callback(error, data){
        if(error){
            done(data)
        }else{
            try{
                expect(data).toBe("cibi")
                done()
            }catch(err){
                done(err)
            }
        }
    }

    fetchData(callback)
})