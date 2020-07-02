var scrap = false;

/**
 * 
 * @param {Object} opt 
 */
function download(url){
    let opt={
        url:url
    }

    chrome.downloads.download(opt,function(downloadId){
        console.log(downloadId);
        console.log("Download Started");
    });
}


function downloadAll(images){
    images.forEach(element => {
        download(element);
    });
}

/**
 * 
 * @param {boolean} state 
 */
function setState(state){
    console.log(`inside State function ${state}`)
    scrap=state;
}


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    message=JSON.parse(message);
    console.log(message);

    switch(message.cmd){
        case 'TOGGLESTATE' :
            console.log("setting state")
            setState(message.state);
            break;
        case 'DOWNLOAD' :
            console.log(`Inside Download switch checking status ${scrap}`)
            if(scrap){
                downloadAll(message.images);
            }
            
            break;
        default :
            break; 
    }
    
});



