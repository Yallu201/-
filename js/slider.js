		/* header float effect*/
		var header = $('#header');
		var square = $('#header>.square');
		var scrollBefore = 0;
		var scrollDown = false;
		window.addEventListener('scroll',function(e){
			if(scrollBefore < window.scrollY){scrollDown = true;}
			else{scrollDown = false;}
//			/* page 1 */
//			if(scrollY == 0){
//				header.css('color','#000').fadeIn(1250);
//				square.css('background','#000');
//			}else if(scrollY > 0 && scrollY < 880){
//				header.css('color','#fff').fadeOut('fast');
//				square.css('background','#fff');
//			}
//			/* page 2 */
//			else if(scrollY < 1196 && scrollY >= 880){
//				header.css('color','#fff').fadeIn(1250);
//				square.css('background','#fff');
//			}else if(scrollY >= 1196 && scrollY < 2091){
//				header.css('color','#000').fadeOut('fast');
//				square.css('background','#000');
//			}
//			/* page 3 */
//			else if(scrollY < 2255 && scrollY >= 2091){
//				header.css('color','#000').fadeIn(1250);
//				square.css('background','#000');
//			}else if(scrollY < 3040 && scrollY >= 2255){
//				header.css('color','#fff').fadeOut('fast');
//				square.css('background','#fff');
//			}
//			/* page 4 */
//			else if(scrollY >= 3040){
//				header.css('color','#fff').fadeIn(1250);
//				square.css('background','#fff');
//			}
			
			/* 색깔만 변경 */
			if(scrollDown){
				if(scrollY < 1280){
					header.css('color','#fff')
					square.css('background','#fff');
				}else if(scrollY < 2360){
					header.css('color','#000')
					square.css('background','#000');
				}else if(scrollY <= 3440){
					header.css('color','#fff')
					square.css('background','#fff');
				}
			}else{
				if(scrollY == 0){
					header.css('color','#000')
					square.css('background','#000');
				}else if(scrollY < 1080){
					header.css('color','#fff')
					square.css('background','#fff');
				}else if(scrollY < 2160){
					header.css('color','#000')
					square.css('background','#000');
				}else if(scrollY <= 3240){
					header.css('color','#fff')
					square.css('background','#fff');
				}
			}
			scrollNow = window.scrollY;
		});
		/* header float effect*/

		/* tag button*/
		function moveTo(pageNo){
			scrollTo(1080*pageNo,1250);
		}
		// c = element to scroll to or top position in pixels
		// e = duration of the scroll in ms, time scrolling
		// d = (optative) ease function. Default easeOutCuaic
		function scrollTo(c,e,d){d||(d=easeOutCuaic);var a=document.documentElement;
		if(0===a.scrollTop){var b=a.scrollTop;++a.scrollTop;a=b+1===a.scrollTop--?a:document.body}
		b=a.scrollTop;0>=e||("object"===typeof b&&(b=b.offsetTop),
		"object"===typeof c&&(c=c.offsetTop),function(a,b,c,f,d,e,h){
		function g(){0>f||1<f||0>=d?a.scrollTop=c:(a.scrollTop=b-(b-c)*h(f),
		f+=d*e,setTimeout(g,e))}g()}(a,b,c,0,1/e,20,d))};
		function easeOutCuaic(t){t--;return t*t*t+1;}
		/* tag button*/