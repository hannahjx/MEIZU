var click = (function () {
    var $checkAll = $('.check-all');
    var $allInput = $('.check-ge');
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            
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
                    //    有一个没有被选中
                    if (!$(this).prop('checked')) {
                        // 让全选按钮不被选中
                        $checkAll.prop('checked', false);

                        flag = false;
                        // 终止each循环
                        return
                    }
                })
                if (flag) $('.check-all').prop('checked', true);
            })
        },
    }
}())

function fn() {
    var $divAll = document.querySelectorAll('.amount');
    var $close = document.querySelectorAll('.edit');
    console.log($divAll[0].previousElementSibling.innerHTML.slice(1));
    return (function () {
        for (let i = 0; i < $divAll.length; i++) {
            let num=0;
            var $jia = $divAll[i].querySelector('.push');
            var $clear = $divAll[i].querySelector('.reduce');
            $jia.onclick = function () {
                num = this.parentNode.querySelector('#inp').value;
                num++;
                this.parentNode.querySelector('#inp').value=num;
                $divAll[0].nextElementSibling.innerHTML = '￥'+ Number($divAll[0].previousElementSibling.innerHTML.slice(1))*num;
            }
            $clear.onclick = function () {
                num = this.parentNode.querySelector('#inp').value;
                num--;
                if(num <= 1){
                    num = 1;
                }
                this.parentNode.querySelector('#inp').value=num;
                $divAll[0].nextElementSibling.innerHTML = '￥'+ Number($divAll[0].previousElementSibling.innerHTML.slice(1))*num;
            }
            $close[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }())
}
fn();