const OS=require('os')

const user=OS.userInfo();

console.log(user);


// current os 

const currentOs={
    name:OS.type(),
    totalMem:OS.totalmem(),

    freeMem:OS.freemem(),
    release:OS.release()
}

console.log(currentOs);