let recursiveCount = (num) => {
    console.log(num);
    
    if (!num <= 0) {
        recursiveCount(num - 1);
    }

}

recursiveCount(7);
