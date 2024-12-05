var leftdivs = document.querySelectorAll('.main>.left>div')
var rightdivs = document.querySelectorAll('.main>.right>div')
var len = rightdivs.length
for (var i = 0 ; i<len;i++){
    (function (i){
        rightdivs[i].onclick=function (){
            var num = leftdivs[i].offsetTop
            window.scrollTo({
                top:num,
                behavior:'smooth'
            })
        }
    })(i)
}
