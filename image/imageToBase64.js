function preImageFile() {
    const preImage = document.getElementById("img");  
    const file = document.getElementById("clickFile").files[0];
    //允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容
    const reader = new FileReader();
    //判断文件是否选中
    if(file){
        //开始读取指定的Blob中的内容。一旦完成，result属性中将包含一个data: URL格式的Base64字符串以表示所读取文件的内容。
        reader.readAsDataURL(file);
        //处理load (en-US)事件。该事件在读取操作完成时触发。
        reader.onloadend =  () =>
        {
            //预览的图篇显示图片
            preImage.src = reader.result;
            //控制台输出结果    
            console.log(reader.result);  
        }
    }
    else{
        preImage.src = "";
    }                
}