function recursiva(max) {
    if(max >= 10000) return;
    max++;
    console.log(max)
    recursiva(max)
}

recursiva(0);