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
}());


var dataRender = (function(){
    return {
        init(ele) {
            this.$inp = $(ele);
            this.search = this.$inp.next().children();
            this.listBox = $('.main_product_ul');
            console.log(this.listBox);
            this.data()
            this.event();
        },
        event() {
            var _this = this;
            this.search.click(function(){
                // $.ajax({url:"static/json/data.json",success:function(result){
                //     console.log(result[1].goods_tag);
                //     _this.data();
                // }});
                _this.data();   
            })
        },
        data() {
            var _this = this;
            $.ajax({url:"static/json/data.json",success:function(result){
                console.log(result[1].goods_tag);
                $.each(result,function(i,item){
                    var $li = $('<li></li>'),
                    $a = $('<a href="details_page.html"></a>'),
                    $ul1 = $('<ul class="show_box"></ul>'),
                    $str = $('<strong class="contrast"><img src="static/images/duibi.png"/>对比</strong>'),
                    $ul2 = $('<ul class="product_show"></ul>'),
                    $p1 = $('<p class="xh"></p>'),
                    $p2 = $('<p class="product_title"></p>'),
                    $p3 = $('<p class="product_price"><i>￥</i></p>')
                    for(var j=0;j<result[i].img.length;j++){
                        let $li1 = $('<li></li>'),
                        $img = $('<img class="products" src=""/>');
                        var url = result[i].img[j]; 
                        $img.attr('src',url);
                        $li1.append($img);
                        $ul1.append($li1);
                    }
                    for(let l = 0;l<result[i].img.length;l++){
                        let $li2 = $('<li class="smallimg"></li>'),
                        $img = $('<img src=""/>');
                        var url1 = result[i].img[l];
                        $img.attr('src',url1);
                        $li2.append($img);
                        $ul2.append($li2);
                    }
                    $p1.text(result[i].name);
                    $p2.text(result[i].goods_tag);
                    $p3.text(result[i].skuprice);
                    _this.listBox.append($li);
                    $li.append($a);
                    $a.append($ul1);
                    $a.append($str);
                    $a.append($ul2);
                    $a.append($p1,$p2,$p3);
                })
            }});
        }
    }
}())

// var phone = (function(){
//     return {
//         init() {
//             this.phone = $('.phone');
//             this.event();
//         },
//         event() {
//             var _this = this;
//         }
//     }
// }())