


document.addEventListener('DOMContentLoaded',function(){
    setInitialStateOfButton(getScrap(),document.getElementById('scrap'));
    document.getElementById('scrap').addEventListener('click',function(){
        console.log(`current State : ${getScrap()}`);
        toggleState(getScrap(),document.getElementById('scrap'));
    });

});


function setInitialStateOfButton(state,buttonId){
   if(state){
       buttonId.innerText="ON"
   }else{
       buttonId.innerText="OFF"
   }
}


function toggleState(state,buttonId){
    console.log(state);
  if(state){
      console.log("setting false false");
      chrome.runtime.sendMessage(JSON.stringify({cmd:'TOGGLESTATE',state:false}))
      buttonId.innerText="OFF";
  }else{
      console.log("setting true");
      chrome.runtime.sendMessage(JSON.stringify({cmd:'TOGGLESTATE',state:true}))
      buttonId.innerText="ON"
  } 
}


function getScrap(){
    return chrome.extension.getBackgroundPage().scrap;
}

 