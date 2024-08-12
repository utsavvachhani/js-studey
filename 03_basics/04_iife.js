// IImmediately Invoked Function (IIFE)

(function code(){
    // name IIFE
    console.log(`DB CONNECTION`);
})();

( (name) => {
    console.log(`DB CONNECTION Two ${name}`);
})(`utsav`);