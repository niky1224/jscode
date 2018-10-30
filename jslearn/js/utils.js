var utils={
    isToArry:function(sameArry){//实现类数组转为数组
        debugger;
        var arry=[];
        try {
            arry=Array.prototype.slice.call(sameArry);//利用数组slice转为数组--》所有的agurments转为数组没有兼容性--》
                    // 而htmlconlection和nodelist有在ie8下有兼容问题
        }
        catch (e){//用catch 来处理兼容问题
            console.log(1);
            for (var i=0;i<sameArry.length;i++){
                arry[arry.length]=sameArry[i];
            }
        }
        return arry;
    }
};