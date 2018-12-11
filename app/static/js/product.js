var main=(function(){
    return{
        init(ele){
            this.$main=$(ele);
            this.$product_show=this.$main.find('.product_show');
            this.$show_box=this.$main.find('.show_box');
            this.$boxliAll=this.$show_box.find('li');
            this.$liAll= this.$product_show.find('li');
            this.event();
        },
        event(){
            var _this=this;
            this.$product_show.on('click','li',function(e){
                e.preventDefault();
                var index = $('.smallimg').index($(this));
                console.log(index);
                _this.$liAll.eq(index).css('border','solid 1px #bdbdbd').siblings().css('border','none');
                _this.$boxliAll.eq(index).css('zIndex',9).siblings().css('zIndex',1);
            })
        }
    }
}())
