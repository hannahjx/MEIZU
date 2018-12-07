var swiper=(function(){
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
            }, 500)
        },
        autoPlay(index){
            var _this = this;
            this.index = index || 0
            clearInterval(timer);
            timer = setInterval(function(){
                _this.index++               
                _this.showImage(_this.index);
            },1000)
        }
    }
}())
swiper.init('.banners');