function whosPaying(names) {
    
    let peoples = names;
    
    let indexPay = Math.floor(Math.random() * peoples.length);
    
    console.log(`${peoples[indexPay]} is going to buy lunch today`);    
}
whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);