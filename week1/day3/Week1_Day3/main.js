function printFirstTen(){
    let sequence = [0,1];
    console.log(sequence[0]);
    console.log(sequence[1]);
    for(let i = 2; i < 10; ++i){
        sequence[i]= sequence[i-1] + sequence[i-2];
        console.log(sequence[i]); 
    }
}
printFirstTen();
    