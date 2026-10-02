const h1 = document.querySelector('.container h1');

function main(){
    while(1) {
        data = new Date();

        h1.innerHTML = data
        await(1000);
    }
}
//main();