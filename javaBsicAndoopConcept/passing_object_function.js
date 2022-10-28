function yourFunction(args){
    let defaults = {opt1: true, opt2: 'something'};
    let params = {...defaults, ...args}; // right-most object overwrites 
    console.log(params.opt1);}