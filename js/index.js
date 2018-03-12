//轮播效果
{
    let imgs=document.querySelectorAll(".banner_img li");
    let pagers=document.querySelectorAll(".banner_lunbo li");
    let banner=document.querySelector("#banner");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");

    pagers.forEach(function(ele,index){
       ele.onclick=function(){
            for(var i=0;i<imgs.length;i++){
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele pagers[index]
            this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
       }
   });
   let n=0;
   let t=setInterval(move,3000);
   function move(){
        n++;
        if(n===imgs.length){
            n=0;
        }
        if(n<0){
            n=imgs.length-1;
        }
        for(var i=0;i<imgs.length;i++){
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,3000);
    };
    //点击切换下一张
    let flag=true;//左右点击图片不会换的太快
    next.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    };
    prev.onclick=function(){
        if(flag){
            flag=false;
            n=n-2;
            move();
        }
    };
    imgs.forEach(function (ele,index) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    })
}
//闪购部分效果
{
    const prev=document.querySelector(".danpin_anniu1");
    const next=document.querySelector(".danpin_anniu2");
    const inner=document.querySelector(".danpin_xia_zong");
    let n=0;//代表要往左边移动几屏
    next.onclick=function () {
        n++;
        prev.classList.remove("disabled");
        if(n===2){
            this.classList.add("disabled");
        }
        if(n===3){
            n=2;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    };
    prev.onclick=function () {
        n--;
        next.classList.remove("disabled");
        if(n===0){
            prev.classList.add("disabled");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-992*n+"px";
    }
}
//智能效果
{
    const contentList=document.querySelectorAll(".zhineng");
    contentList.forEach(function(ele){
        content(ele);
    });
    function content(parent){
        var btns=parent.querySelectorAll(".zhineng_top_wenzi_you span");
        var cons=parent.querySelectorAll(".zhineng .jiadian_bottom");
        for(let i=0;i<cons.length;i++){
            btns[i].onmouseenter=function(){
            for(let j=0;j<cons.length;j++){
            btns[j].classList.remove(".zhineng_top_wenzi_you[span=span1]");            
            cons[j].style.zIndex="";
        }
        cons[i].style.zIndex=10;        
    }    
    }    
    }
}
// 为你推荐
{
    const prev=document.querySelector(".tuijian_danpin_anniu1");
    const next=document.querySelector(".tuijian_danpin_anniu2");
    const inner=document.querySelector(".tuijianxia_zong");
    let n=0;//代表要往左边移动几屏
    next.onclick=function () {
        n++;
        prev.classList.remove("disabled");
        if(n===2){
            this.classList.add("disabled");
        }
        if(n===3){
            n=2;
            return;
        }
        inner.style.marginLeft=-1240*n+"px";
    };
    prev.onclick=function () {
        n--;
        next.classList.remove("disabled");
        if(n===0){
            prev.classList.add("disabled");
        }
        if(n===-1){
            n=0;
            return;
        }
        inner.style.marginLeft=-1240*n+"px";
    }
}
//内容
{
    function fengzhuang(parent){
        let prev=parent.querySelector(".neirong_xia_prev");
        let next=parent.querySelector(".neirong_xia_next");
        let inner=parent.querySelector(".neirong_xia_inner");
        let pager=parent.querySelectorAll(".neirong_item6_lunbo");
        let n=0;
        next.onclick=function () {
            n++;
            if(n===pager.length){
                n=pager.length-1;
                return;
            }
            inner.style.marginLeft=n*-296+"px";
            pager[n].classList.add("neirong_item6_lunbo_active");
            pager[n-1].classList.remove("neirong_item6_lunbo_active");
            obj=pager[n];
        };
        prev.onclick=function () {
            n--;
            if(n<0){
                n=0;
                return;
            }
            inner.style.marginLeft=n*-296+"px";
            pager[n].classList.add("neirong_item6_lunbo_active");
            pager[n+1].classList.remove("neirong_item6_lunbo_active");
            obj=pager[n];
        };
        let obj=pager[0];
        pager.forEach(function (ele,index) {
            ele.onclick=function () {
                obj.classList.remove("neirong_item6_lunbo_active");
                ele.classList.add("neirong_item6_lunbo_active");
                obj=ele;
                inner.style.marginLeft=index*-296+"px";
                n=index;
            }
        })  
    }
   let contentList=document.querySelectorAll(".neirong_item");
    contentList.forEach(function(a){
        fengzhuang(a);
    });
}
//侧导航
{
    let sidenav=document.querySelectorAll(".banner_cedaohang li");
    let menu=document.querySelectorAll(".banner_cedaohang_chu");
    let obj=menu[0];
    sidenav.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menu[index].style.display="block";
            obj=menu[index];
        }
        ele.onmouseleave=function(){
            menu[index].style.display="none";
        }
    })
}
//导航上文字
{          
    let text=document.querySelectorAll(".dh_wenzi_he");
    let box=document.querySelectorAll(".dh_wenzi_chu");
    let obj=box[0];
    text.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            obj.style.display="none";
            box[index].style.display="block";
            obj=box[index];
        };
        ele.onmouseleave=function () {
            box[index].style.display="none";
        };
    })   
}
