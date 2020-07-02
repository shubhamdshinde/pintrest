

let src=document.querySelectorAll('img');
src = Array.from(src).map(img => img.src);
console.log(src);
let message={
    cmd:"DOWNLOAD",
    images:src
}
chrome.runtime.sendMessage(JSON.stringify(message),function(response){
    console.log(response);
});

