function eventLister(input,button){
    input.addEventListener('keyup',function(e){
        obj.textarea = e.target.value
    })
    button.addEventListener('click',function(e){
            console.log(JSON.parse(obj.textarea))
    })
}
let rows='10';
let cols='30';

function rowColClick(){
    //刷新进来看有没有，数值
    let rowsLocal =  localStorage.getItem('rows');
    let colsLocal =  localStorage.getItem('cols');
    if(inputRow.value){
        localStorage.setItem('rows',inputRow.value)
    }else{
        if(!rowsLocal){
            localStorage.setItem('rows',rows)
        }
    }
    if(inputCol.value){
        localStorage.setItem('cols',inputCol.value)
    }else{
        if(!colsLocal){
            localStorage.setItem('cols',cols)
        }
    }
    //保证每一次取的都是存储的值
    rowsLocal =  localStorage.getItem('rows');
    colsLocal =  localStorage.getItem('cols');
    inputRow.value=rowsLocal;
    inputCol.value=colsLocal
    input.setAttribute("rows",inputRow.value);
    input.setAttribute("cols",inputCol.value);
};