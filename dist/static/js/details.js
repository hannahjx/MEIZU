var xuanze = (function(){
    return {
        init(ele) {
            this.$ele = $(ele);
            this.$xh =this.$ele.find('dl');
            this.$xhbox = this.$xh.find('dd');
            this.$btnAll = this.$xhbox.find('div');
            this.$reduce = this.$xh.last().find('.reduce');
            this.$num = this.$xh.last().find('input');
            this.$push = this.$xh.last().find('.push');
            this.event();
        },
        event() {
            var _this = this;
            this.$xhbox.on('click','div',function(){
                $(this).addClass('box-active').siblings().removeClass();
            })
            this.$reduce.on('click',function(){
                let num = Number(_this.$num.val());
                num --;
                if(num <= 1){
                    num = 1;
                }
                _this.$num.val(num);
            })
            this.$push.on('click',function(){
                let num = Number(_this.$num.val());
                num ++;
                _this.$num.val(num);
            })
        }
    }
}());

var stick = (function(){
    return {
        init(ele) {
            this.$title = $(ele);
            this.event();
        },
        event() {
            var _this = this;
            $(window).on('scroll',function(){
                if($(window).scrollTop() >= 80){
                    _this.$title.css('top',0);
                }else{
                    _this.$title.css('top',80);
                }
            })
        }
    }
}())

var main_img=(function(){
    return{
        init(ele){
            this.$main_img=$(ele);
            this.$big_img=this.$main_img.find('.big_img');
            this.$small_img=this.$main_img.find('.small_img');
            this.$bigAll=this.$big_img.find('a');
            this.$smallAll=this.$small_img.find('div');
            this.$magnifier=this.$big_img.find('.magnifier');
            this.$amplification=this.$main_img.find('.amplification');
            this.$bigimages=this.$amplification.find('.bigimages');
            this.img = this.$amplification.find('img'); 
            console.log(this.img);
            this.event();
        },
        event(){
            var _this=this;
            this.$small_img.on('click','div',function(e){
                e.preventDefault();
                var index = $('.active').index($(this));
                console.log($(this).siblings());
                $(this).css("boxShadow","0px 15px 22px -14px #000");
                $(this).siblings().css("boxShadow","none");
                _this.$bigAll.eq(index).css({'zIndex':9,'opacity':1}).siblings().css({'zIndex':10,'opacity':0});
                _this.$bigimages.eq(index).css('display','block').siblings().css('display','none')
            })
            //放大镜------------------------------------------------------------------------------
            this.$big_img.on('mouseenter',function(e) {
                // 放大镜显示
                _this.$magnifier.css("display",'block');
                // 展示大图片显示
                _this.$amplification.css("display",'block');
              })
              //---------------------------------------------------
            this.$big_img.on("mouseleave",function(e) {
                _this.$magnifier.css("display",'none');
                _this.$amplification.css("display",'none');
            })
            this.$big_img.on('mousemove',function(e){
                e=e||window.event;
                e.preventDefault();
                e.stopPropagation();
                _this.$magnifier.css("display",'block');
                var x = e.clientX - this.offsetLeft - _this.$magnifier.width() / 2;
                var y = e.clientY - this.offsetTop - _this.$magnifier.height()/2 +$(window).scrollTop();
                // 获取小方块移动的最大坐标
                var maxL = $(this).width() -  _this.$magnifier.width(),
                maxT = $(this).height() - _this.$magnifier.height();
                if(x >= maxL) {
                  x = maxL
                } else if(x <=0 ) {
                  x = 0;
                }
                if(y >= maxT) {
                  y = maxT;
                } else if( y <= 0 ) {
                  y = 0;
                }
                _this.$magnifier.css('left',x);
                _this.$magnifier.css('top',y);

                // 移动大图片的位置， 放大三倍
                _this.img.css('left',-3*x);
                _this.img.css('top',-3*y);
                // img.style.left = -3 * x + 'px';
                // img.style.top = -3 * y + 'px';
            })
        }
    }
}())