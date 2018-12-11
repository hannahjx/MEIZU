var checkInput_in=(function (){
    var $number_down=document.querySelector('#number_down');
    var $number_list=document.querySelector('.number_list');
    var $yz=document.querySelector('.yz_in');
    var $yz2=document.querySelector('.yz2');
    var $box=document.querySelector('.box');
    var $form=document.querySelector('.form');
    var $error1=document.querySelector('.error1');
    var $error2=document.querySelector('.error2');
    var $error3=document.querySelector('.error3');
    var $username=document.querySelector('.txt');
    var $sub=document.querySelector('.sub_in');
    var $yzmbox=document.querySelector('.yzmbox');
    var $yzm=document.querySelector('.yzm');
    var $yzm_word=document.querySelector('.yzm_word');
    var $yzm_num=document.querySelector('.yzm_num');
    var $num=document.querySelector('.num');
    var $sign_up=document.querySelector('.sign_up');
    var $close=document.querySelectorAll('.right');
    return{
        init(){
            this.event();
        },
        event(){
            var _this=this;
            var flag = true;
                $number_down.onclick=function(){
                    if(flag){
                        $box.style.display == 'block'
                        move($box,{width:300,height:200},500);
                        flag = false;
                    }
                    else if(!flag){                     
                        move($box,{width:0,height:0},500,function(){
                            $box.style.display == 'none';
                            flag = true;
                        })
                    }
                }
                document.onmousedown=function(){
                    if(!flag){                     
                        move($box,{width:0,height:0},500,function(){
                            $box.style.display == 'none';
                            flag = true;
                        })
                    }
                }
                $form['tel'].onfocus = function(){
                    $yzmbox.style.display = 'block';
                    $yz.style.display = 'block';
                }
                $form['tel'].onblur=function(){
                    var reg=/^1[3456789]\d{9}$/;
                    let user=this.value;
                    if(reg.test(this.value)){
                        sendAjax('../server/php/sign_in.php',{data:{
                            username:user
                        }}).then(res =>{
                            res = JSON.parse(res);                        
                            if(res.code==0){
                                $error1.style.display = 'block';
                            }else{
                                $error3.style.display = 'block';
                                $error3.querySelector('span').style.background = "rgb(70, 225, 203)";
                                $error3.querySelector('span').style.color = "#fff";
                                $error3.querySelector('span').style.border = '#fff';
                                $form['onsubmit'] = 'return';
                                return false;
                            }
                            console.log(res);
                        })
                    }else{
                        $error1.style.display='block';
                        $error2.style.display='none';
                    }
                    if(this.value==''){
                        $error2.style.display='block';
                        $error1.style.display='none';
                    }
                }
                $form['tel'].oninput=function(){
                    if(this.value!=''){
                        $error1.style.display="none";
                        $error2.style.display='none';
                        // $error3.style.display='none';
                    }
                }
                $yzm.oninput=function(){
                    if(reg.test(this.value)){
                    }else{
                        $error1.style.display='none';
                        $error2.style.display='none';
                        // $error3.style.display='block';
                    }
                }
                $yzm_word.onclick=function(){
                    var num=60;
                    $yzm_word.style.display='none';
                   $yzm_num.style.display='block';
                   var timer2 = setTimeout(function(){
                       var str = "0123456789";
                        var num = '';
                        for(let i = 0;i<6;i++){
                            var a = Math.floor(Math.random()*str.length);
                            num += a;
                        }
                        $yzm.value = num;
                   },2000);
                   var timer=setInterval(_=>{
                        num--;
                        $num.innerHTML=Number(num);
                        if(num==0){
                            clearInterval(timer);
                            $yzm_word.style.display='block';
                            $yzm_word.innerHTML="重新获取验证码";
                            $yzm_num.style.display='none';
                        }
                   },1000);
                   
                }
                $sign_up.onclick=function(e){
                    var target=e.target||e.srcElement;
                    if(target.className=='right'){
                        target.parentNode.parentNode.style.display='none';
                    }
                }
                $yz.onclick=function(){
                    $yz2.style.display='block';
                    move($yz2,{width:255,height:42},200);
                }
                $sub.onclick=function(){
                    location.href = "http://localhost:8888/MEIZU/app/index.html";
                }
                    
            
        }
    }
}())
