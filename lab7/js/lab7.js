function onLoad() {
    
     let numbers = [5,6,7,8];

    numbers = numbers.map((x) => {
        let results = x + 4;
        return results
     });

    console.log(numbers);
}