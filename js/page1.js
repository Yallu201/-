	/* 슬라이더 객체*/

	var sliderW_ = document.getElementById("sliderW_");
	var sliderAB_ = document.getElementById("sliderAB_");
	var sliderC_ = document.getElementById("sliderC_");
	var sliderDE_ = document.getElementById("sliderDE_");
	var sliderG_ = document.getElementById("sliderG_");
	  
	/* 슬라이더 작동시 setFont() 함수 호출 */
	sliderW_.addEventListener("input", function(e) {setFont_();});
	sliderDE_.addEventListener("input", function(e) {setFont_();});
	sliderC_.addEventListener("input", function(e) {setFont_();});
	sliderAB_.addEventListener("input", function(e) {setFont_();});
	sliderG_.addEventListener("input", function(e) {setFont_();});

	/* 각 글자별 획 list*/
	var bu 		= document.getElementsByClassName("bu");
	var bun		= document.getElementsByClassName("bun");
	var ii		= document.getElementsByClassName("ii");
	var jeon	= document.getElementsByClassName("jeon");
	var che		= document.getElementsByClassName("che");
	var ga		= document.getElementsByClassName("ga");
	var doil	= document.getElementsByClassName("doil");
	var ddae	= document.getElementsByClassName("ddae");

	var temp1	= document.getElementsByClassName("temp1");
	var temp2	= document.getElementsByClassName("temp2");
	var temp3	= document.getElementsByClassName("temp3");
	var temp4	= document.getElementsByClassName("temp4");
	var temp5	= document.getElementsByClassName("temp5");
	var temp6	= document.getElementsByClassName("temp6");
	var temp7	= document.getElementsByClassName("temp7");

	/*각 글자별 획 개수*/
	var s_bu 	= bu.length;
	var s_bun	= bun.length;
	var s_ii	= ii.length;
	var s_jeon	= jeon.length;
	var s_che	= che.length;
	var s_ga	= ga.length;
	var s_doil	= doil.length;
	var s_ddae	= ddae.length;

	function setFont_(){
		var W = parseInt(sliderW_.value);// width
		var A = parseInt(sliderAB_.value);
		var C = 100-parseInt(sliderC_.value);
		var D = parseInt(sliderDE_.value);
		var G = 50 - parseInt(sliderG_.value);// Gap

		setFont_bu  (W,A,C<<1,D,G);
		setFont_bun	(W,A,C<<1,D,G);
		setFont_ii	(W,A,C<<1,D,G);
		setFont_jeon(W,A,C<<1,D,G);
		setFont_che	(W,A,C<<1,D,G);
		setFont_ga	(W,A,C<<1,D,G);
		setFont_doil(W,A,C<<1,D,G);
		setFont_ddae(W,A,C<<1,D,G);
		
		setStructure1(A,C<<1,D,G);
		setStructure2(A,C<<1,D,G);
		setStructure3(A,C<<1,D,G);
		setStructure4(A,C<<1,D,G);
		setStructure5(A,C<<1,D,G);
		setStructure6(A,C<<1,D,G);
		setStructure7(A,C<<1,D,G);
	}
	
	function setStructure1(a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		
		temp1[0].setAttribute('x',0);
		temp1[0].setAttribute('y',0);
		temp1[0].setAttribute('width',ra - g);
		temp1[0].setAttribute('height',rd - g -(g>>1));
		
		temp1[1].setAttribute('x',0);
		temp1[1].setAttribute('y',rd + (g>>1));
		temp1[1].setAttribute('width',ra - g);
		temp1[1].setAttribute('height',re - g -(g>>1));
		
		temp1[2].setAttribute('x',ra + g);
		temp1[2].setAttribute('y',0);
		temp1[2].setAttribute('width',800 - ra - g);
		temp1[2].setAttribute('height',800 - rc - g);
		
		temp1[3].setAttribute('x',0);
		temp1[3].setAttribute('y',800 - rc + g);
		temp1[3].setAttribute('width',800);
		temp1[3].setAttribute('height',rc - g);
	}
	function setStructure2(a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		var rc = c<<3;
		var rd = d<<3;
		var re = e<<3;
		
		temp2[0].setAttribute('x',0);
		temp2[0].setAttribute('y',0);
		temp2[0].setAttribute('width',800);
		temp2[0].setAttribute('height',rd - g);
		
		temp2[1].setAttribute('x',0);
		temp2[1].setAttribute('y',rd + g);
		temp2[1].setAttribute('width',800);
		temp2[1].setAttribute('height',re - g);
	}

	function setStructure3(a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		var rc = c<<3;
		var rd = d<<3;
		var re = e<<3;
		
		temp3[0].setAttribute('x',0);
		temp3[0].setAttribute('y',0);
		temp3[0].setAttribute('width',ra - g);
		temp3[0].setAttribute('height',800);
		
		temp3[1].setAttribute('x',ra + g);
		temp3[1].setAttribute('y',0);
		temp3[1].setAttribute('width',rb - g);
		temp3[1].setAttribute('height',800);
	}

	function setStructure4(a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		/*
		temp1[0].setAttribute('x',0);
		temp1[0].setAttribute('y',0);
		temp1[0].setAttribute('width',ra - g);
		temp1[0].setAttribute('height',rd - g -(g>>1));
		
		temp1[1].setAttribute('x',0);
		temp1[1].setAttribute('y',rd + (g>>1));
		temp1[1].setAttribute('width',ra - g);
		temp1[1].setAttribute('height',re - g -(g>>1));
		*/
		temp4[0].setAttribute('x',0);
		temp4[0].setAttribute('y',0);
		temp4[0].setAttribute('width',800);
		temp4[0].setAttribute('height',rd - g -(g>>1));
		
		temp4[1].setAttribute('x',0);
		temp4[1].setAttribute('y',rd + (g>>1));
		temp4[1].setAttribute('width',800);
		temp4[1].setAttribute('height',re - g -(g>>1));
		
		temp4[2].setAttribute('x',0);
		temp4[2].setAttribute('y',800 - rc + g);
		temp4[2].setAttribute('width',800);
		temp4[2].setAttribute('height',rc - g);
	}
	function setStructure5(a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		var rc = c<<3;
		var rd = d<<3;
		var re = e<<3;
		
		temp5[0].setAttribute('x',0);
		temp5[0].setAttribute('y',0);
		temp5[0].setAttribute('width',ra - g);
		temp5[0].setAttribute('height',rd - g);
		
		temp5[1].setAttribute('x',0);
		temp5[1].setAttribute('y',rd + g);
		temp5[1].setAttribute('width',ra - g);
		temp5[1].setAttribute('height',re - g);
		
		temp5[2].setAttribute('x',ra + g);
		temp5[2].setAttribute('y',0);
		temp5[2].setAttribute('width',rb - g);
		temp5[2].setAttribute('height',800);
	}
	function setStructure6(a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		
		temp6[0].setAttribute('x',0);
		temp6[0].setAttribute('y',0);
		temp6[0].setAttribute('width',ra - g);
		temp6[0].setAttribute('height',rd - g -(g>>1));
		
		temp6[1].setAttribute('x',0);
		temp6[1].setAttribute('y',rd + (g>>1));
		temp6[1].setAttribute('width',ra - g);
		temp6[1].setAttribute('height',re - g -(g>>1));
		
		temp6[2].setAttribute('x',ra + g);
		temp6[2].setAttribute('y',0);
		temp6[2].setAttribute('width',800 - ra - g);
		temp6[2].setAttribute('height',800 - rc - g);
		
		temp6[3].setAttribute('x',0);
		temp6[3].setAttribute('y',800 - rc + g);
		temp6[3].setAttribute('width',800);
		temp6[3].setAttribute('height',rc - g);
	}
	function setStructure7(a,c,d,g){
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		
		temp7[0].setAttribute('x',0);
		temp7[0].setAttribute('y',0);
		temp7[0].setAttribute('width',ra - g);
		temp7[0].setAttribute('height',800 - rc - g);
		
		temp7[1].setAttribute('x',ra + g);
		temp7[1].setAttribute('y',0);
		temp7[1].setAttribute('width',800 - ra - g);
		temp7[1].setAttribute('height',800 - rc - g);
		
		temp7[2].setAttribute('x',0);
		temp7[2].setAttribute('y',800 - rc + g);
		temp7[2].setAttribute('width',800);
		temp7[2].setAttribute('height',rc - g);
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

	function setFontSize_(val){
		var words = document.getElementsByClassName("word_svg_");

		for(var i=0;i<words.length;i++){
			if(i===5){
				words[i].setAttribute("width",val*1.1875);
			}else{
				words[i].setAttribute("width",val);	
			}
			words[i].setAttribute("height",val);

		}
	}
