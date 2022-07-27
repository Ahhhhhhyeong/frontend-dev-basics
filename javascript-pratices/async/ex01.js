const fetch = function(params, callback) {
// 비동기 code: file system 접근, network, SQL To DB, setTimeout

setTimeout(() => {
    if(param === 'param-data'){
        callback(null, 'ok');
    } else{
        callback(new Error('fail'), null);
    }

}, 2000);
}


// readFile(option, function(error, data){/** callback */})

// test01: success
fetch('param-error', function(error, data){
    if(error){
        console.error(error);
        return;
    }
    
    console.log(data);
    asyncFunction1("", function(error, data){
        setInterval({
            
        },2000);
    })
});

console.log("wait......");
