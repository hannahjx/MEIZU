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
            this.$xzxh = $('.xhbox .box-active');
            this.name = this.$xzxh.html();
            this.$carbtn = $('.car-btn');
            this.data = []; 
            this.event();
        },
        event() {
            var _this = this;
            this.$xhbox.on('click','div',function(){
                $(this).addClass('box-active').siblings().removeClass();
                _this.$xzxh = $('.xhbox .box-active');
                _this.name = _this.$xzxh.html();               
            })
            this.$reduce.on('click',function(){
                let num = Number(_this.$num.val());
                num --;
                if(num <= 0){
                    num = 0;
                }
                _this.$num.val(num);
                _this.getData();
            })
            this.$push.on('click',function(){
                let num = Number(_this.$num.val());
                num ++;
                _this.$num.val(num);
                _this.getData();
            })
            this.$carbtn.on('click',function(){
                $('.alert').css('display','flex');
            })
            $('.car-close').on('click',function(){
                $('.alert').css('display','none');
            })
        },
        getData() {
            var _this = this;
            $.ajax({
                url: "static/json/data.json",
                success: function (res) {
                    for(var i = 0;i<res.length;i++){
                        if(res[i].name == _this.name){
                            res[i].count = Number($('.sl').val());
                            _this.data.pop();
                            _this.data.push(res[i]);
                        }
                    }
                    console.log(_this.data);
                    _this.setItem(_this.data);
                }
            });
        },
        setItem(data) {
            
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
            // debugger
            for(var i = 0;i<shopList.length;i++){
                console.log(shopList[i][0].id);
                if(data[0].id == shopList[i][0].id){
                    shopList[i][0].count = data[0].count;
                    break;
                }
            }
            if(i == shopList.length){
                shopList.push(data);
            }
            localStorage.shopList = JSON.stringify(shopList);
            console.log(shopList);
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
}());


var shop = (function(){
    return {
        init() {
            this.$xh = $('.xhbox .box-active');
            // console.log(this.$xh);
            this.event();
        },
        event() {
            var _this = this;
            
        }
    }
}())