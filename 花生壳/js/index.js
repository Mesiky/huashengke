$(function(){
	$('#header .oray').hover(function(){
		$(this).css('backgroundPosition','left bottom');
	},function(){
		$(this).css('backgroundPosition','left top');
	});
	//banner
	var num=0;
	var flag=false;
	var timer;
	//让全部圆点恢复
	function round(){
		for(var i=0;i<$('.round li').length;i++){
			$('.round li').css('backgroundPosition','right top');
	}
}
	$('#banner li').eq(num).css({
		opacity:100,
		filter:'alpha(opacity=100)'
	});
	//创建圆点
	for(var i=0;i<$('#banner .img li').length;i++){
		$('#banner .round').append('<li></li>');
		$('#banner .round li').get(i).index=i;//给圆点添加属性值
	}
	//圆点位置居中
	$('#banner .round').css('left',($(window).innerWidth()-$('#banner .round').width())/2+'px');
	$('#banner .round li').eq(num).css('backgroundPosition','left top');
	//手动轮播
	$('.btn_r').click(function(){
		next();
	})
	$('.btn_l').click(function(){
		if(!flag){	//当flag还没执行到回调函数的时候都是true，所以不会再执行
			flag=true;//
		round();	
		$('.img li').eq(num).animate({
				opacity:0
		});
		num--;
		if(num<0) num=$('.img li').length-1;
		$('.img li').eq(num).animate({
				opacity:100
		},function(){
			flag=false;
		})
		$('.round li').eq(num).css('backgroundPosition','left top');

	}
	})
	//圆点
	$('.round li').click(function(){	
		if(num==this.index) return;
		round();
		$('.img li').eq(num).animate({
				opacity:0
		});
		$('.img li').eq(this.index).animate({
				opacity:100
		});
		$('.round li').eq(this.index).css('backgroundPosition','left top')
		num=this.index;

	})
	//自动轮播
	timer=setInterval(next,3000);
	//鼠标覆盖
	$('#banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(next,3000);
	})
	function next(){
			if(!flag){	//当flag还没执行到回调函数的时候都是true，所以不会再执行
				flag=true;//
				round();	
				$('.img li').eq(num).animate({
						opacity:0
				});
				num++;
				if(num>$('.img li').length-1) num=0;
				$('.img li').eq(num).animate({
						opacity:100
				},function(){
					flag=false;//当动画执行完毕后才让flag是false
				})//所以在动画还没执行完毕之前是不会再执行
			$('.round li').eq(num).css('backgroundPosition','left top');

			}
		}
	//鼠标覆盖banner的效果
	$('.btn .btn_l').hover(function(){
		$(this).css('backgroundPosition','left bottom');
	},function(){
		$(this).css('backgroundPosition','left top');
	})
	$('.btn .btn_r').hover(function(){
		$(this).css('backgroundPosition','right bottom');
	},function(){
		$(this).css('backgroundPosition','right top');
	})
	//给每个li元素添加一个识别属性(小图标和大图链接)
	for(var i=0;i<$('#body li').length;i++){
		$('#body li ').get(i).index=i;
	}
	//覆盖改变字体颜色
	$('#body>div').eq(0).css('display','block');
	$('#body li').hover(function(){
		$('#body strong').css('color','#666');
		$(this).find('strong').css('color','#ff0042');
		$('#body>div').css('display','none');
		$('#body>div').eq(this.index).css('display','block');
	},function(){

	})
	//覆盖改变字体颜色（body2）
	$('#body2 li').hover(function(){
		$(this).find('strong').css('color','#ff0042');
	},function(){
		$('#body2 strong').css('color','#666');
	})
	//消息轮播器
	var num=0;
	setInterval(function(){
		$('.information ul').animate({
			top:-30+'px'
		},1000,function(){
			$('.information li:first').insertAfter($('.information li:last'));
			$(this).css('top',0);			
		})

	},3000)


	// 设置遮罩位置居中
	$('#login').css({
		'left':($(window).innerWidth()-$('#login').width())/2+'px',
		'top':($(window).innerHeight()-$('#login').height())/2+'px'
	});
	//设置遮罩宽高
	$('#cover').css({
		'width':$(window).innerWidth()+'px',
		'height':$(document).height()+'px'
	});
	$('.login_f').click(function(){
		$('#login').css('display','block');
		$('#cover').css('display','block');
	})
	//关闭登陆窗口
	$('#login .close').click(function(){
		$('#login').css('display','none');
		$('#cover').css('display','none');
	})	
})