/**
 * Created by yangmq on 2018/3/5.
 */
var Bagpipe = require('bagpipe');
//设定最大并发数为10
var bagpipe = new Bagpipe(10);

for(var i=0;i<100;i++){
    bagpipe.push(async,function () {
        //异步回调执行
    });
}

bagpipe.on('full',function (length) {
    console.log('底层系统不能及时完成。队列拥挤，目前队列长度为：'+length);
});