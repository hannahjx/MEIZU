//头部（导航条）区域
var nav_swiper=(function(){
    return{
        init(ele){
            this.$nav=$(ele);
            this.$logo=this.$nav.find('.logo');
            this.$logo1=this.$nav.find('.logo1');
            this.$nav_list=$('.nav_list');
            this.$hover_list=$('.hover_list');
            this.$ul_bg=$('.ul_bg');
            this.$search=$('.search');
            this.$icon_wd=$('.icon-wd');
            this.$icon_gwc=$('.icon-gwc');
            // this.liAll=this.$nav_list.find('li');
            this.event();
        },
        event(){
            var _this=this;
            this.$nav_list.on('mouseenter','li',function(){
                _this.$logo.css('display','none');
                _this.$logo1.css('display','block');
                _this.$search.css('border','solid 1px #999');
                _this.$icon_wd.css('color','#000');
                _this.$icon_gwc.css('color','#999');
                _this.$icon_gwc.find('i').css('color','#fff');
                if($(this).attr('class')== 'APPstor'){
                    _this.$ul_bg.css('height',274);
                }else{
                    _this.$ul_bg.css('height',274);
                }
                console.log(_this.$hover_list.eq(4));
                _this.$nav_list.find('a').css('color','#000');
                _this.$hover_list.find('a').css('color','#000');
                $(this).find('a').css('color','#00C3F5');
                $(this).find('ul').css('height',274);
                $(this).find('.hover_list li').css({'display':'block','zIndex':99});
                $(this).siblings().find('.hover_list li').css({'display':'none','zIndex':1});
            })
            this.$ul_bg.on('mouseleave',function(){
                _this.$logo1.css('display','none');
                _this.$logo.css('display','block');
                _this.$search.css('border','solid 1px #fff');
                _this.$icon_wd.css('color','#fff');
                _this.$icon_gwc.css('color','#fff');
                _this.$ul_bg.css('height',0);
                _this.$nav_list.find('a').css('color','#fff');
                _this.$hover_list.css('height',0);
                _this.$hover_list.find('a').css('color','#000');
                $(this).find('.hover_list li').css('display','none');
            })
        }
    }
}())
nav_swiper.init('.nav');
//banner区域
var banner_swiper=(function(){
    var timer = null;
    var showWidth = null;
    return{
        init(ele){
            this.showIndex=0;
            this.$banners=$(ele);
            showWidth=this.$banners.width();
            this.$lunbo=this.$banners.children('.lunbo');
            this.$imgAll=this.$lunbo.find('li');
            this.$btns=$('.banner_btn').find('li');
            console.log(this.$btns);
            //克隆
            this.firstimg= this.$imgAll.first();
            this.lastimg=this.$imgAll.last();
            this.$lunbo.append(this.firstimg.clone().css("zIndex",1));
            this.$lunbo.prepend(this.lastimg.clone().css("zIndex",8));
            this.$lunbo.css('left',-showWidth);      
            this.event();
            this.autoPlay(this.index);
        },
        event(){
            var _this=this;
            // _this.$btns.on('click','li',function(){
			// 	_this.showIndex=$(this).index();
			// 	console.log(_this.showIndex);
			// 	// _this.showImages(showIndex);
			// 	// _this.autoPlay(showIndex);
            // })
            this.$btns.on('click', function () {
                var index = $(this).index();
                // clearInterval(timer)
                console.log(index);
                _this.showImage(index);
                _this.index = index;
                _this.autoPlay(index);
            })	
        },
        showImage: function (index = 0) {
            if (index >= this.$btns.length) {
                index = 0;
                this.$lunbo.css('left', 0);
            } else if (index < 0) {
                index = this.$tipBoxLiALl.length - 1;
                this.$lunbo.css('left', -showWidth * (index + 2));
            }
            this.index = index;
            this.$btns.eq(index).addClass('btns').siblings().removeClass('btns');
            this.$lunbo.animate({
                left: -showWidth * (index + 1)
            }, 800)
        },
        autoPlay(index){
            var _this = this;
            this.index = index || 0
            clearInterval(timer);
            timer = setInterval(function(){
                _this.index++               
                _this.showImage(_this.index);
            },5000)
        }
    }
}())
banner_swiper.init('.banners');