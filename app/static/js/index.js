var swiper=(function(){
    var timer=null;
    // var width=null;
    return{
        init(ele){
            this.showIndex=0;
            this.$banners=$(ele);
            this.$lunbo=this.$banners.children('.lunbo');
            this.$imgAll=this.$lunbo.find('li');
            this.$btns=$('.banner_btn').find('li');
            console.log(this.$btns);
            //克隆
            this.firstimg= this.$imgAll.first();
            this.lastimg=this.$imgAll.last();
            this.$lunbo.append(this.firstimg.clone());
            this.$lunbo.prepend(this.lastimg.clone());
            width=this.$banners.width();
            console.log(width);
            // this.$lunbo.css('left',-width*2);
           
            this.event();

        },
        event(){
            var _this=this;
            _this.$btns.on('click',function(){
				clearInterval(timer);
				_this.showIndex=$(this).index();
				console.log(_this.showIndex);
				// _this.showImages(showIndex);
				// _this.autoPlay(showIndex);
			})	
        },
        showImage(){

        },
        autoPlay(){

        }
    }
}())
swiper.init('.banners');