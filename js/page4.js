
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
    var dark	= document.getElementsByClassName("dark");
	var kong	= document.getElementsByClassName("kong");
	var pot		= document.getElementsByClassName("pot");
	var hum		= document.getElementsByClassName("hum");
	var chin	= document.getElementsByClassName("chin");
	var zip		= document.getElementsByClassName("zip");
	var sa		= document.getElementsByClassName("sa");

	/*각 글자별 획 개수*/
    var s_dark	= dark.length;
	var s_kong	= kong.length;
	var s_pot	= pot.length;
	var s_hum	= hum.length;
	var s_chin	= chin.length;
	var s_zip	= zip.length;
	var s_sa	= sa.length;

	function setFont(){
		var W = parseInt(sliderW.value);// width
		var A = parseInt(sliderAB.value);
		var C = 100-parseInt(sliderC.value);
		var D = parseInt(sliderDE.value);
		var G = parseInt(sliderG.value);// Gap

		setFont_dark(W,A,C<<1,D,G);
		setFont_kong(W,A,C<<1,D,G);
		setFont_pot	(W,A,C<<1,D,G);
		setFont_hum	(W,A,C<<1,D,G);
		setFont_chin(W,A,C<<1,D,G);
		setFont_zip	(W,A,C<<1,D,G);
		setFont_sa	(W,A,C<<1,D,G);
	}
    function setFont_dark(w,a,c,d,g){// a,b,c
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		
		/*ㄷ*/
		dark[0].points[0].x = ra - g;
		dark[0].points[0].y = w_;
		
		dark[0].points[1].x = w_;
		dark[0].points[1].y = w_;
		
		dark[0].points[2].x = w_;
		dark[0].points[2].y = 800 - rc - w_ - g;
		
		dark[0].points[3].x = ra - g;
		dark[0].points[3].y = 800 - rc - w_ - g;
		/*ㄷ*/
		/*ㅏ*/
		dark[1].setAttribute("x1",800-w_);
		dark[1].setAttribute("y1",800-rc-g);
		dark[1].setAttribute("x2",800-w_);
		
		dark[2].setAttribute("x1",800-w_);
		dark[2].setAttribute("y1",(800-rc-g)>>1);
		dark[2].setAttribute("y2",(800-rc-g)>>1);
		/*ㅏ*/
		/* ㄹ */
		dark[3].points[0].y = 800 - rc + w_ + g ;
		
		dark[3].points[1].x = 400 - w_ - g;
		dark[3].points[1].y = 800 - rc + w_ + g ;
		
		dark[3].points[2].x = 400 - w_ - g;
		dark[3].points[2].y = 800 - (rc>>1) + (g>>1);
        
		dark[3].points[3].x = w_;
		dark[3].points[3].y = 800 - (rc>>1) + (g>>1);
		
		dark[3].points[4].x = w_;
		dark[3].points[4].y = 800 - w_;
		
		dark[3].points[5].x = 400 - g;
		dark[3].points[5].y = 800 - w_;
		
		/* ㄹ */
		/*ㄱ*/
		dark[4].points[0].x = 400 + g;
		dark[4].points[0].y = 800 - rc + w_ + g;
		
		dark[4].points[1].x = 800 -w_;
		dark[4].points[1].y = 800 - rc + w_ + g;
		
		dark[4].points[2].x = 800 -w_;
		/*ㄱ*/
		for(var i=0;i<s_dark;i++){
			dark[i].setAttribute("stroke-width",w);
		}
	}
	function setFont_kong(w,a,c,d,g){// c,d,e
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		
		/*ㅋ*/
		kong[0].points[0].y = w_;
		
		kong[0].points[1].x = 800 - w_;
		kong[0].points[1].y = w_;
		
		kong[0].points[2].x = 800 - w_;
		kong[0].points[2].y = rd - g;
		
		kong[1].setAttribute("y2",(rd - g)>>1);
		kong[1].setAttribute("y1",(rd - g)>>1);
		/*ㅋ*/
		/*ㅗ*/
		
		kong[2].setAttribute("y1",rd + g);
		kong[2].setAttribute("y2",800 - rc - g - w_);
		
		kong[3].setAttribute("y1",800 - rc - g - w_);
		kong[3].setAttribute("y2",800 - rc - g - w_);
		/*ㅗ*/
		/* ㅇ */
		kong[4].setAttribute("x",w_);
		kong[4].setAttribute("y",800 - rc + w_ + g);
		kong[4].setAttribute("width",800 - w);
		kong[4].setAttribute("height",rc - w - g);
		kong[4].setAttribute("rx",(rc - w)>>1);
		/* ㅇ */
		for(var i=0;i<s_kong;i++){
			kong[i].setAttribute("stroke-width",w);
		}
	}
	function setFont_pot(w,a,c,d,g){// c,d,e
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		
		/*ㅍ*/
		pot[0].setAttribute("x1",0);
		pot[0].setAttribute("y1",w_);
		pot[0].setAttribute("x2",ra - g);
		pot[0].setAttribute("y2",w_);
		
		pot[1].setAttribute("x1",0);
		pot[1].setAttribute("y1",800 - rc - w_ - g);
		pot[1].setAttribute("x2",ra - g);
		pot[1].setAttribute("y2",800 - rc - w_ - g);
		
		pot[2].setAttribute("x1",(ra-g)>>2);
		pot[2].setAttribute("y1",w_);
		pot[2].setAttribute("x2",(ra-g)>>2);
		pot[2].setAttribute("y2",800 - rc - w_ - g);
		
		pot[3].setAttribute("x1",((ra-g)>>2)*3);
		pot[3].setAttribute("y1",w_);
		pot[3].setAttribute("x2",((ra-g)>>2)*3);
		pot[3].setAttribute("y2",800 - rc - w_ - g);
		/*ㅍ*/
		/*
	<line y1="50" x2="400" y2="50"/>
	<line y1="350" x2="400" y2="350"/>
	<line x1="100" y1="50" x2="100" y2="350"/>
	<line x1="300" y1="50" x2="300" y2="350"/>

	<line x1="750" x2="750" y2="400"/>
	<line x1="800" y1="200" x2="900" y2="200"/>

	<polyline points="800 450 50 450 50 750 800 750"/>
	<line x1="800" y1="600" x2="50" y2="600"/>
		*/
		/*ㅏ*/
		pot[4].setAttribute("x2",800-w_);
		pot[4].setAttribute("x1",800-w_);
		pot[4].setAttribute("y2",800-rc-g);
		
		pot[5].setAttribute("x1",800-w_);
		pot[5].setAttribute("y1",(800-rc-g)>>1);
		pot[5].setAttribute("y2",(800-rc-g)>>1);
		/*ㅏ*/
		/*ㅌ*/
		pot[6].points[0].x = 800;
		pot[6].points[0].y = 800 - rc + w_ + g;
		pot[6].points[1].x = w_;
		pot[6].points[1].y = 800 - rc + w_ + g;
		pot[6].points[2].x = w_;
		pot[6].points[2].y = 800 - w_;
		pot[6].points[3].x = 800;
		pot[6].points[3].y = 800 - w_;
		
		pot[7].setAttribute("y1",800 - ((rc-g)>>1));
		pot[7].setAttribute("x2",0);
		pot[7].setAttribute("y2",800 - ((rc-g)>>1));
		/*ㅌ*/
		for(var i=0;i<s_pot;i++){
			pot[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_hum(w,a,c,d,g){// c,d,e
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		
		
		/*ㅎ*/
		hum[0].setAttribute("x1",400);
		hum[0].setAttribute("y1",0);
		hum[0].setAttribute("x2",400);
		hum[0].setAttribute("y2",(rd-g)>>2);
		
		hum[1].setAttribute("x1",0);
		hum[1].setAttribute("y1",(rd-g)>>2);
		hum[1].setAttribute("x2",800);
		hum[1].setAttribute("y2",(rd-g)>>2);
		
		hum[2].setAttribute("x",w_);
		hum[2].setAttribute("y",((rd-g)>>1)-w_);
		hum[2].setAttribute("width",800 - w);
		hum[2].setAttribute("height",(rd>>1) - g);
		hum[2].setAttribute("rx",(rd - w)>>2);
		/*ㅎ*/
		
		/* ㅜ */
		hum[3].setAttribute("y1", rd + g + w_);
		hum[3].setAttribute("y2", rd + g + w_);

		hum[4].setAttribute("y2", rd + g + w_);
		hum[4].setAttribute("y1", 800 - g - rc);
		/* ㅜ */
		/*
		<line x1="400" x2="400" y2="50"/>
		<line y1="50" x2="800" y2="50"/>
		<rect x="50" y="100" width="700" height="75" rx="37.5"/>
		
		<line y1="225" x2="800" y2="225"/>
		<line x1="400" y1="400" x2="400" y2="225"/>
		
		<rect x="50" y="450" width="700" height="300"/>
		*/
		/*ㅁ*/
		hum[5].setAttribute("x",w_);
		hum[5].setAttribute("y",800 - rc + w_ + g);
		hum[5].setAttribute("width",800 - w);
		hum[5].setAttribute("height",rc - w - g);
		/*ㅁ*/
		for(var i=0;i<s_hum;i++){
			hum[i].setAttribute("stroke-width",w);
		}
	}
	function setFont_chin(w,a,c,d,g){// c,d,e
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
	<line y1="100" x2="400" y2="100"/>
	<path d="M200,0V150c0,110.46-89.54,200-200,200H0"/>
	<path d="M200,0V150c0,110.46,89.54,200,200,200h0"/>
	<line x1="750" x2="750" y2="400"/>
	<polyline points="50 400 50 750 800 750"/>
	 */
		/*ㅊ*/
		chin[0].setAttribute("x2",ra - g);
		chin[0].setAttribute("y1",(800-rc-g)>>2);
		chin[0].setAttribute("y2",(800-rc-g)>>2);
		
		chin[1].setAttribute("d","M0,"+(800-rc-g-w_)+"H0c110.46,0,"+((ra-g)>>1)+"-89.54,"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		chin[2].setAttribute("d","M"+(ra-g)+","+(800-rc-g-w_)+"h0c-110.46,0-"+((ra-g)>>1)+"-89.54-"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		
		/*ㅊ*/
		/* ㅣ */
		chin[3].setAttribute("x1",800 - w_);
		chin[3].setAttribute("x2",800 - w_);
		chin[3].setAttribute("y2",800 - rc - g);
		/* ㅣ */
		/* ㄴ */
		chin[4].points[0].x = w_;
		chin[4].points[0].y = 800 - rc + g;
		
		chin[4].points[1].x = w_;
		chin[4].points[1].y = 800 - w_;
		
		chin[4].points[2].x = 800;
		chin[4].points[2].y = 800 - w_;
		/* ㄴ */
		for(var i=0;i<s_chin;i++){
			chin[i].setAttribute("stroke-width",w);
		}
	}
	function setFont_zip(w,a,c,d,g){// c,d,e
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
		var cde = c+d+e;
		var rc = (c/cde)*800;
		var rd = (d/cde)*800;
		var re = (e/cde)*800;
		var w_ = w>>1;
		
		/* ㅈ */
		zip[0].setAttribute("y1",w_);
		zip[0].setAttribute("x2",ra - g);
		zip[0].setAttribute("y2",w_);
		
		zip[1].setAttribute("d","M0,"+(800-rc-g-w_)+"H0c110.46,0,"+((ra-g)>>1)+"-89.54,"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		zip[2].setAttribute("d","M"+(ra-g)+","+(800-rc-g-w_)+"h0c-110.46,0-"+((ra-g)>>1)+"-89.54-"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		/* ㅈ */
		/* ㅣ */
		zip[3].setAttribute("x1",800 - w_);
		zip[3].setAttribute("x2",800 - w_);
		zip[3].setAttribute("y2",800 - rc - g);
		/* ㅣ */
		/* ㅂ */

		zip[4].points[0].x = w_;
		zip[4].points[0].y = 800 - rc + g;
		
		zip[4].points[1].x = w_;
		zip[4].points[1].y = 800 - w_;

		zip[4].points[2].x = 800 - w_;
		zip[4].points[2].y = 800 - w_;

		zip[4].points[3].x = 800 - w_;
		zip[4].points[3].y = 800 - rc + g;

		zip[5].setAttribute("x1",w_);
		zip[5].setAttribute("y1",800 - (rc>>1) + (g>>1) - w_);
		zip[5].setAttribute("x2",800 - w_);
		zip[5].setAttribute("y2",800 - (rc>>1) + (g>>1) - w_);

		/* ㅂ */
		/*
	<line y1="50" x2="400" y2="50"/>
	<path d="M200,0V150c0,110.46-89.54,200-200,200H0"/>
	<path d="M200,0V150c0,110.46,89.54,200,200,200h0"/>

	<line x1="750" x2="750" y2="400"/>

	<polyline points="50 400 50 750 750 750 750 400"/>
	<line x1="50" y1="550" x2="750" y2="550"/>
		*/
		/**/
		for(var i=0;i<s_zip;i++){
			zip[i].setAttribute("stroke-width",w);
		}
	}

	function setFont_sa(w,a,c,d,g){// c,d,e
		var b = 100-a;
		var e = 100-d;
		
		var ra = a<<3;
		var rb = b<<3;
//		var rc = c<<2;
//		var rd = d<<3;
//		var re = e<<3;
		var w_ = w>>1;
		
		/* ㅅ */
		sa[0].setAttribute("d","M0,"+(800-w_)+"H0c110.46,0,"+((ra-g)>>1)+"-89.54,"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		sa[1].setAttribute("d","M"+(ra-g)+","+(800-w_)+"h0c-110.46,0-"+((ra-g)>>1)+"-89.54-"+((ra-g)>>1)+"-"+((ra-g)>>1)+"V0");
		/* ㅅ */
		/*
		<path d="M200,0V550c0,110.46-89.54,200-200,200H0"/>
		<path d="M200,0V550c0,110.46,89.54,200,200,200h0"/>
		<line x1="750" x2="750" y2="800"/>
		<line x1="900" y1="400" x2="800" y2="400"/>
		*/
		/*ㅏ*/
		sa[2].setAttribute("x1",800-w_);
		sa[2].setAttribute("x2",800-w_);
		
		sa[3].setAttribute("x2",800 -w_);
		/*ㅏ*/
		
		for(var i=0;i<s_sa;i++){
			sa[i].setAttribute("stroke-width",w);
		}
	}

	function setFontSize(val){
		var size = parseInt(val);
		var words = document.getElementsByClassName("word_svg");

		for(var i=0;i<words.length;i++){
			if(i===0 || i===2 || i===6){
				words[i].setAttribute("width",size*1.125);
			}else{
				words[i].setAttribute("width",size);	
			}
			words[i].setAttribute("height",size);

		}
	}
