	/*
	1. 매커니즘은 모르겠으나 부'본'이 가능한 문제(불가능해야 하는데)
	3. 지읒 곡률 문제(지읒이 가로로 길어질 경우(보통 세로로 긺)에는 세로가 지읒의 곡률이 되어야 됨) (if(지읒 width>지읒 height){지읒 r=지읒 height};)
	4. a/b 비율이 지나치게 극단적인 경우 그림이 망가지는데 제한조건이 필요할 듯(아마 아직 안 넣은 것 같긴 하나)
	5.d/e/c 비율 조절하는 게 힘든데 d/e 슬라이더 하나랑 a/c 슬라이더로 나누는 게 좋을 것 같음...어려우려나...ㅎㅎ;;
	6. 지읒 지율이 작아지면 꼬여버림
	
	*/
    /* 초기화 */
	window.onload = function(){
        setFont();
        setFontSize();
    }
	/* 슬라이더 객체*/  
	var sliderS = document.getElementById("sliderS");
	var sliderW = document.getElementById("sliderW");
	var sliderAB = document.getElementById("sliderAB");
	var sliderC = document.getElementById("sliderC");
	var sliderDE = document.getElementById("sliderDE");
	var sliderG = document.getElementById("sliderG");
	  
	/* 슬라이더 작동시 setFont() 함수 호출 */
	sliderS.addEventListener("input", function(e) {setFontSize();});
	sliderW.addEventListener("input", function(e) {setFont();});
	sliderDE.addEventListener("input", function(e) {setFont();});
	sliderC.addEventListener("input", function(e) {setFont();});
	sliderAB.addEventListener("input", function(e) {setFont();});
	sliderG.addEventListener("input", function(e) {setFont();});

	/* 각 글자별 획 list*/
	var bu 		= document.getElementsByClassName("bu");
	var bun		= document.getElementsByClassName("bun");
	var ii		= document.getElementsByClassName("ii");
	var jeon	= document.getElementsByClassName("jeon");
	var che		= document.getElementsByClassName("che");
	var ga		= document.getElementsByClassName("ga");
	var doil	= document.getElementsByClassName("doil");
	var ddae	= document.getElementsByClassName("ddae");

	/*각 글자별 획 개수*/  
	var s_bu 	= bu.length;
	var s_bun	= bun.length;
	var s_ii	= ii.length;
	var s_jeon	= jeon.length;
	var s_che	= che.length;
	var s_ga	= ga.length;
	var s_doil	= doil.length;
	var s_ddae	= ddae.length;


	function setFont(){
		var W = parseInt(sliderW.value);// width
		var A = parseInt(sliderAB.value);
		var C = 100-parseInt(sliderC.value);
		var D = parseInt(sliderDE.value);
		var G = parseInt(sliderG.value);// Gap

		setRatioA(A);
		setRatioB(100-A);
		setRatioC(C);
		setRatioD(D);
		setRatioE(100-D);
        setRatioF(100-C);

		setFont_bu  (W,A,C<<1,D,G);
		setFont_bun	(W,A,C<<1,D,G);
		setFont_ii	(W,A,C<<1,D,G);
		setFont_jeon(W,A,C<<1,D,G);
		setFont_che	(W,A,C<<1,D,G);
		setFont_ga	(W,A,C<<1,D,G);
		setFont_doil(W,A,C<<1,D,G);
		setFont_ddae(W,A,C<<1,D,G);

	}

	function setFont_bu(w,a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		/*
		var ra = a<<3;
		var rb = b<<3;
		var rc = c<<3;
		*/
		var rd = d<<3;
		var re = e<<3;
		var w_ = w>>1;
		
		/* ㅂ */

		bu[0].points[0].x = w_;

		bu[0].points[1].x = w_;
		bu[0].points[1].y = rd - g - w_;

		bu[0].points[2].x = 800 - w_;
		bu[0].points[2].y = rd - g - w_;

		bu[0].points[3].x = 800 - w_;

		bu[1].setAttribute("y1",((rd - g)>>1) - w_);
		bu[1].setAttribute("y2",((rd - g)>>1) - w_);

		/* ㅂ */
		/* ㅜ */
		bu[2].setAttribute("y1", rd + g + w_);
		bu[2].setAttribute("y2", rd + g + w_);

		bu[3].setAttribute("y2", rd + g + w_);

		/* ㅜ */
		for(var i=0;i<s_bu;i++){
			bu[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_bun (w,a,c,d,g){// d e c
		var b = 100-a;
		var e = 100-d;
		/*
		var ra = a<<3;
		var rb = b<<3;
		*/
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		
		/* ㅂ */
		bun[0].points[0].x = w_;
		bun[0].points[1].x = w_;
		bun[0].points[1].y = rd - g - w_;
		bun[0].points[2].x = 800 - w_;
		bun[0].points[2].y = rd - g - w_;
		bun[0].points[3].x = 800 - w_;
		
		bun[1].setAttribute("y1",((rd - g)>>1) - w_);
		bun[1].setAttribute("y2",((rd - g)>>1) - w_);
        console.log("ㅂ 가운데 y");
        console.log(((rd - g)>>1) - w_);
		/* ㅂ */
		/* ㅜ */
		bun[2].setAttribute("y1", rd + g + w_);
		bun[2].setAttribute("y2", rd + g + w_);

		bun[3].setAttribute("y2", rd + g + w_);
		bun[3].setAttribute("y1", 800 - g - rc);

		/* ㅜ */
		/* ㄴ */
		bun[4].points[0].x = w_;
		bun[4].points[0].y = 800 - rc + g;
		
		bun[4].points[1].x = w_;
		bun[4].points[1].y = 800 - w_;
		
		bun[4].points[2].x = 800;
		bun[4].points[2].y = 800 - w_;
		/* ㄴ */
		
		for(var i=0;i<s_bun;i++){
			bun[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_ii	 (w,a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		/*
		var rc = c<<3;
		var rd = d<<3;
		var re = e<<3;
		*/
		var w_ = w>>1;
		
		/*
<rect class="cls-1 ii" x="50" y="50" width="300" height="700" rx="150"/>
<line class="cls-1 ii" x1="750" x2="750" y2="800"/>
		*/
		/* ㅇ */
		ii[0].setAttribute("x",w_);
		ii[0].setAttribute("y",w_);
		ii[0].setAttribute("width",ra - w - g);
		ii[0].setAttribute("height",800 - w);
		ii[0].setAttribute("rx",(ra - (w))>>1);
		/* ㅇ */
		/* ㅣ */
		ii[1].setAttribute("x1",800 - w_);
		ii[1].setAttribute("x2",800 - w_);
		/* ㅣ */
		
		
		for(var i=0;i<s_ii;i++){
			ii[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_jeon(w,a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		/*
		 <polyline class="cls-1 jeon" points="50 400 50 750 800 750"/>
		 
		 <line class="cls-1 jeon" x1="400" y1="200" x2="800" y2="200"/>
		 <line class="cls-1 jeon" x1="750" x2="750" y2="400"/>
		 
		 <line class="cls-1 jeon" y1="50" x2="400" y2="50"/>
		 <path class="cls-1 jeon" d="M0,350H0c110.46,0,200-89.54,200-200V0"/>
		 <path class="cls-1 jeon" d="M400,350h0c-110.46,0-200-89.54-200-200V0"/>
		*/
		/* ㅈ */
		jeon[3].setAttribute("y1",w_);
		jeon[3].setAttribute("x2",ra - g);
		jeon[3].setAttribute("y2",w_);
		
		jeon[4].setAttribute("d","M0,"+(800-rc-g-w_)+"H0c110.46,0,"+((ra-g)>>1)+"-89.54,"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		jeon[5].setAttribute("d","M"+(ra-g)+","+(800-rc-g-w_)+"h0c-110.46,0-"+((ra-g)>>1)+"-89.54-"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		/* ㅈ */
		/* ㅓ */
		jeon[1].setAttribute("x1",ra + g);
		jeon[1].setAttribute("y1",(800-rc)>>1);
		
		jeon[1].setAttribute("x2",800);
		jeon[1].setAttribute("y2",(800-rc)>>1);
		
		jeon[2].setAttribute("x1",800 - w_);
		jeon[2].setAttribute("x2",800 - w_);
		jeon[2].setAttribute("y2",800 - rc);
		/* ㅓ */
		/* ㄴ */
		jeon[0].points[0].x = w_;
		jeon[0].points[0].y = 800 - rc + g;
		
		jeon[0].points[1].x = w_;
		jeon[0].points[1].y = 800 - w_;
		
		jeon[0].points[2].x = 800;
		jeon[0].points[2].y = 800 - w_;
		/* ㄴ */
		for(var i=0;i<s_jeon;i++){
			jeon[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_che (w,a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		
		/*
		 //ㅊ
		 <line class="cls-1 che" y1="200" x2="400" y2="200" stroke-width="100"/>
		 <path class="cls-1 che" d="M0,750H0c110.46,0,200-89.54,200-200V0" stroke-width="100"/>
		 <path class="cls-1 che" d="M400,750h0c-110.46,0-200-89.54-200-200V0" stroke-width="100"/>
		 
		 //ㅔ
		 <line class="cls-1 che" x1="400" y1="400" x2="600" y2="400" stroke-width="100"/>
		 <line class="cls-1 che" x1="550" x2="550" y2="800" stroke-width="100"/>
		 <line class="cls-1 che" x1="750" x2="750" y2="800" stroke-width="100"/>
		*/
		/* ㅊ */
		che[0].setAttribute("x2",ra - g);
		che[1].setAttribute("d","M0,"+(800-w_)+"H0c110.46,0,"+((ra-g)>>1)+"-89.54,"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		che[2].setAttribute("d","M"+(ra-g)+","+(800-w_)+"h0c-110.46,0-"+((ra-g)>>1)+"-89.54-"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		/* ㅊ */
		/* ㅔ */
		che[3].setAttribute("x1",ra + g);
		che[3].setAttribute("x2",ra + g + (rb>>1));
		
		che[4].setAttribute("x1",ra + g + (rb>>1) - w_);
		che[4].setAttribute("x2",ra + g + (rb>>1) - w_);
		
		che[5].setAttribute("x1",800-w_);
		che[5].setAttribute("x2",800-w_);
		/* ㅔ */
		
		for(var i=0;i<s_che;i++){
			che[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_ga	 (w,a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		var rc = c<<3;
		var rd = d<<3;
		var re = e<<3;
		var w_ = w>>1;
		
		/*
		 <polyline  points="0 50 350 50 350 800" 		/>
		 
		 <line 		x1="750" x2="750" y2="800" 			/>
		 <line 		x1="800" y1="400" x2="950" y2="400"	/>
		 */
		/*ㄱ*/
		ga[0].points[0].y = w_;
		
		ga[0].points[1].x = ra -w_ -g;
		ga[0].points[1].y = w_;
		
		ga[0].points[2].x = ra -w_ -g;
		/*ㄱ*/
		/*ㅏ*/
		ga[1].setAttribute("x1",800-w_);
		ga[1].setAttribute("x2",800-w_);
		
		ga[2].setAttribute("x1",800-w_);
		/*ㅏ*/
		
		for(var i=0;i<s_ga;i++){
			ga[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_doil(w,a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		
		/*
		 <polyline points="400  50 
		 					50  50 
							50 150 
						   400 150 "/>
		 <line y1="350" x2="400" y2="350"				/>
		 <line x1="200" y1="200" x2="200" y2="400" 		/>
		 <line x1="750" x2="750" y2="400"				/>
		 <polyline points="   0 450 
		 					750 450 
							750 600 
							 50 600 
							 50 750 
							800 750" />
		 */
		/*ㄷ*/
		doil[0].points[0].x = ra - g;
		doil[0].points[0].y = w_;
		
		doil[0].points[1].x = w_;
		doil[0].points[1].y = w_;
		
		doil[0].points[2].x = w_;
		doil[0].points[2].y = rd - w_;
		
		doil[0].points[3].x = ra - g;
		doil[0].points[3].y = rd - w_;
		/*ㄷ*/
		/*ㅗ*/
		
		doil[1].setAttribute("y1",800 - rc - g - w_);
		
		doil[1].setAttribute("x2",ra - g);
		doil[1].setAttribute("y2",800 - rc - g - w_);
		
		doil[2].setAttribute("x1",(ra-g)>>1);
		doil[2].setAttribute("y1",rd + g);
		doil[2].setAttribute("x2",(ra-g)>>1);
		doil[2].setAttribute("y2",800 - rc - g - w_);
		/*ㅗ*/
		/*
		<line x1="750" x2="750" y2="400"				/>
		 <polyline points="   0 450 
		 					750 450 
							750 600 
							 50 600 
							 50 750 
							800 750" />
		*/
		/* ㅣ */
		doil[3].setAttribute("x1",800 - w_);
		doil[3].setAttribute("x2",800 - w_);
		doil[3].setAttribute("y2",800 - rc - g);
		/* ㅣ */
		/* ㄹ */
		doil[4].points[0].y = 800 - rc + w_ + g ;
		
		doil[4].points[1].x = 800 - w_ ;
		doil[4].points[1].y = 800 - rc + w_ + g ;
		
		doil[4].points[2].x = 800 - w_;
		doil[4].points[2].y = 800 - (rc>>1) + (g>>1);
        
		doil[4].points[3].x = w_;
		doil[4].points[3].y = 800 - (rc>>1) + (g>>1);
		
		doil[4].points[4].x = w_;
		doil[4].points[4].y = 800 - w_;
		
		doil[4].points[5].y = 800 - w_;
		
		/* ㄹ */
		for(var i=0;i<s_doil;i++){
			doil[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_ddae(w,a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		var rc = c<<3;
		var rd = d<<3;
		var re = e<<3;
		var w_ = w>>1;
		
		/*
		
		 <polyline points="200  50 
		                    50  50 
		                    50 750 
		                   200 750" />
		 <polyline points="400  50 
		                   250  50 
		                   250 750 
		                   400 750" />
		 
		 <line  x1="450" x2="450" y2="800" />
		 <line  x1="750" x2="750" y2="800" />
		 <line  x1="450" y1="400" x2="750" y2="400" />
		*/
		/*ㄸ*/
			ddae[0].points[0].x = (ra>>1) - g;
			ddae[0].points[0].y = w_;

			ddae[0].points[1].x = w_;
			ddae[0].points[1].y = w_;

			ddae[0].points[2].x = w_;
			ddae[0].points[2].y = 800 - w_;

			ddae[0].points[3].x = (ra>>1) - g;
			ddae[0].points[3].y = 800 - w_;


			ddae[1].points[0].x = ra - g;
			ddae[1].points[0].y = w_;

			ddae[1].points[1].x = (ra>>1)+w_;
			ddae[1].points[1].y = w_;

			ddae[1].points[2].x = (ra>>1)+w_;
			ddae[1].points[2].y = 800 - w_;

			ddae[1].points[3].x = ra - g;
			ddae[1].points[3].y = 800 - w_;
		/*ㄸ*/
		/*ㅐ*/
		ddae[2].setAttribute("x1",ra + g + w_);
		ddae[2].setAttribute("x2",ra + g + w_);
		
		ddae[3].setAttribute("x1",800 - w_);
		ddae[3].setAttribute("x2",800 - w_);
		
		ddae[4].setAttribute("x1",ra + g + w_);
		ddae[4].setAttribute("x2",800 - w_);
		/*ㅐ*/
		for(var i=0;i<s_ddae;i++){
			ddae[i].setAttribute("stroke-width",w);
		}
	}  

	function setRatioA(value){
		var item = document.getElementsByClassName("ra");
		var size = item.length;
		for(var i=0;i<size;i++){
			item[i].style.flex = value;
		}
	}  
	function setRatioB(value){
		var item = document.getElementsByClassName("rb");
		var size = item.length;
		for(var i=0;i<size;i++){
			item[i].style.flex = value;
		}
	}
	function setRatioC(value){
		var item = document.getElementsByClassName("rc");
		var size = item.length;
		for(var i=0;i<size;i++){
			item[i].style.flex = value;
		}
	}
	function setRatioD(value){
		var item = document.getElementsByClassName("rd");
		var size = item.length;
		for(var i=0;i<size;i++){
			item[i].style.flex = value;
		}
	}
	function setRatioE(value){
		var item = document.getElementsByClassName("re");
		var size = item.length;
		for(var i=0;i<size;i++){
			item[i].style.flex = value;
		}
	}
	function setRatioF(value){
		var item = document.getElementsByClassName("rf");
		var size = item.length;
		for(var i=0;i<size;i++){
			item[i].style.flex = value;
		}
	}  
	function setFontSize(){
		var size = parseInt(sliderS.value);
		var words = document.getElementsByClassName("word_svg");
		
		for(var i=0;i<words.length;i++){
			if(i===5){
				words[i].setAttribute("width",size*1.1875);
			}else{
				words[i].setAttribute("width",size);	
			}
			words[i].setAttribute("height",size);
			
		}
	}