//alert(1);
utools.onPluginReady(() => {
	var key = "";
    utools.setSubInput(({text}) => {
        key = text;	    
    }, '你想搜啥啊？')
  //   window.addEventListener('keydown', (event) => {
  //   	var key = event.which || event.keyCode || event.charCode;
		// if (key == 13) {
		// 	// utools.ubrowser.goto('https://google.com/search?q='+text).run({ width: 1000, height: 600 });
		// 	utools.ubrowser.goto('https://baidu.com/search?q='+text).run({ width: 1000, height: 600 });
		// 	alert("1="+text)
		// }	        
  //   })
	window.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            // utools.ubrowser.goto('https://www.baidu.com/s?wd='+key).run({ width: 1000, height: 600 });           
            utools.ubrowser.goto('https://google.com/search?q='+key).run({ width: 1000, height: 600 });
            // window.open('https://www.baidu.com/s?wd='+key);            
        }
    })

})