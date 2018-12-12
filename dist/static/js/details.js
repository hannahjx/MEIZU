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