
function fn() {
    var $divAll = document.querySelectorAll('.amount');
    var $close = document.querySelectorAll('.edit');
    return (function () {
        for (let i = 0; i < $divAll.length; i++) {
            let num=0;
            var $jia = $divAll[i].querySelector('.push');
            var $clear = $divAll[i].querySelector('.reduce');
            $jia.onclick = function () {
                num = this.parentNode.querySelector('#inp').value;
                num++;
                this.parentNode.querySelector('#inp').value=num;
                $divAll[i].nextElementSibling.innerHTML = '￥'+ Number($divAll[i].previousElementSibling.innerHTML.slice(1))*num;
            }
            $clear.onclick = function () {
                num = this.parentNode.querySelector('#inp').value;
                num--;
                if(num <= 1){
                    num = 1;
                }
                this.parentNode.querySelector('#inp').value=num;
                $divAll[i].nextElementSibling.innerHTML = '￥'+ Number($divAll[i].previousElementSibling.innerHTML.slice(1))*num;
            }
            $close[i].onclick = function(){
                this.parentNode.remove();
                let data = localStorage.shopList;
                data = JSON.parse(data);
                localStorage.shopList = JSON.stringify(data.splice(i,1));
            }
        }
    }())
}


var showlist = (function(){
    var $ul = document.querySelector('.showlist');
    return {
        init() {
            this.event();
            this.getData();
        },
        event() {
            var _this = this;
        },
        getData() {
            var data = localStorage.shopList || '[]';
            data = JSON.parse(data);
            this.data = data;
            this.showData(data);
            fn();
            var $checkAll = $('.check-all');
            var $allInput = $('.check-ge');
            $('.sett-btn').click(function(){
                alert('没钱还想买东西？');
            })
            $checkAll.click(function () {
                if ($(this).prop('checked')) {
                    $allInput.prop('checked', 'true');
                } else {
                    $allInput.prop('checked', false);
                }
            })
            $allInput.click(function () {
                var flag = true;
                $allInput.each(function (i) {
                    if (!$(this).prop('checked')) {
                        $checkAll.prop('checked', false);
                        flag = false;
                        return
                    }
                })
                if (flag) $('.check-all').prop('checked', true);
            })
            tot();
        },
        showData(data) {
            // $ul.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                var $li = document.createElement('li');
                $li.className = 'item';
                $li.i = i;
                $li.innerHTML =
                    `
                        <div class="showdata">
                            <input type="checkbox" checked="checked" class="check-ge">
                            <a href=""><img src="${data[i].img[0]}" alt=""></a>
                            <div>
                                <h3>${data[i].name}</h3>
                                <p>全网通公开版 远山白 6G+64G</p>
                            </div>
                        </div>
                        <div class="price">${data[i].price}</div>
                        <div class="amount">
                            <button class="reduce">-</button>
                            <input type="text" name="amt" id="inp" value="${data[i].count}">
                            <button class="push">+</button>
                        </div>
                        <div class="he">￥${Number(data[i].price.slice(1))*Number(data[i].count)}</div>
                        <div class="edit">--<i><img src="static/images/close.png" alt=""></i></div>
                `;
                $ul.appendChild($li);
            }
        }
    }
}())

function tot(){
    var $total = $('.car-total');
            var $subtotal = $('.he');
            var tot = 0;
            for(var y=0;y<$subtotal.length;y++){
                var st = Number($($subtotal[y]).html().slice(1));
                tot += st;
            }
            tot = '￥ ' + tot;
            $total.html(tot);
} 