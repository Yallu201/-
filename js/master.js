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
		setFont_();
		setFontSize(100);
//        setFontSize_(200); 
        $('#sliderC').css("height",100);
        $('#sliderAB').css("width",100);
        $('#sliderG').css("width",50);
        $('#sliderDE').css("height",50);
    }
	
			
		/* sec1 slider */
		$('#sliderW_').slider({
			formatter: function(value) {
				return value + ' px';
			}
		}).on("slide", function(e) {
			setFont_();
		});
		$('#sliderG_').slider({
			formatter: function(value) {
				return (50-value) + ' px';
			},orientation: 'vertical'
            ,tooltip_position:'right'
		}).on("slide", function(e) {
			setFont_();
		});
		$('#sliderAB_').slider({
			formatter: function(value) {
				return '( a : b ) = ( ' +value + ' : ' + (100-value) +' )';
			},tooltip_position:'top'
		}).on("slide", function(e) {
			setFont_();
		});
		$('#sliderDE_').slider({
			formatter: function(value) {
				return '( d : e ) = ( ' +value + ' : ' + (100-value) +' )';
			},orientation: 'vertical'
            ,tooltip_position:'right'
		}).on("slide", function(e) {
			setFont_();
		});
		$('#sliderC_').slider({
			formatter: function(value) {
				return '( d + e : c ) = ( 1.00 : ' + ((100-value)/50).toFixed(2) +' )';
			}
            ,orientation: 'vertical'
            ,tooltip_position:'right'
		}).on("slide", function(e) {
			setFont_();
			var size = 450;
			var C = (100-parseInt(sliderC_.value))<<1;
			var cde = 100 + C;
			var de_height = (100/cde) * size;
			var c_height = (C/cde) * size;
            $('#sliderDE_').css("height",de_height).css("margin-bottom",c_height);
		});
		/* sec1 slider */
		
		/* sec4 slider */
		$('#sliderW').slider({
			formatter: function(value) {
				return value + ' px';
			}
		}).on("slide", function(e) {
			setFont();
		});
		$('#sliderG').slider({
			formatter: function(value) {
				return value + ' px';
			}
		}).on("slide", function(e) {
			setFont();
		});
		$('#sliderAB').slider({
			formatter: function(value) {
				return '( a : b ) = ( ' +value + ' : ' + (100-value) +' )';
			},tooltip_position:'bottom'
		}).on("slide", function(e) {
			setFont();
		});
		$('#sliderDE').slider({
			formatter: function(value) {
				return '( d : e ) = ( ' +value + ' : ' + (100-value) +' )';
			},orientation: 'vertical'
            ,tooltip_position:'right'
		}).on("slide", function(e) {
			setFont();
		});
		$('#sliderC').slider({
			formatter: function(value) {
				return '( d + e : c ) = ( 1.00 : ' + ((100-value)/50).toFixed(2) +' )';
			}
            ,orientation: 'vertical'
            ,tooltip_position:'left'
		}).on("slide", function(e) {
			setFont();
			var size = parseInt(sliderS.value);
			var C = (100-parseInt(sliderC.value))<<1;
			var cde = 100 + C;
			var de_height = (100/cde) * size;
			var c_height = (C/cde) * size;
            $('#sliderDE').css("height",de_height).css("margin-bottom",c_height);
		});
		
		$('#sliderS').slider({
			formatter: function(value) {
				return value + ' px';
			}
		}).on("slide", function(e) {
			setFontSize(e.value);
            $('#sliderC').css("height",e.value);
            $('#sliderAB').css("width",e.value);
            $('#sliderG').css("width",e.value>>1).css("left",e.value>>2).css("bottom",e.value + 10);
			var C = (100-parseInt(sliderC.value))<<1;
			var cde = 100 + C;
			var de_height = (100/cde) * e.value;
			var c_height = (C/cde) * e.value;
            $('#sliderDE').css("height",de_height).css("margin-bottom",c_height);
		});
		/* sec4 slider */