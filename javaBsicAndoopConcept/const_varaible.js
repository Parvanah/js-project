//declare and initialize an array of const  
    const employee = {   
        fname: "Annie",   
        lname: "Roy",   
        age: 22,   
        profession: "Web Developer"  
    };   
        
    document.write(employee);   
        
    // This can be done with const array  
    employee.fname = "Emmy";   
    employee.lname = "Jackson";   
    employee.Age = 24;   
    employee.profession = "QA Analyst";   
        
    document.write(employee);   
      
    // This cannot be possible with const array   
    /* const employee = {   
         "fname": "Emmy",   
         "lname": "Jackson",   
         "age": 24,   
         "profession": "QA Analyst"   
    }  */  