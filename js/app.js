//const url='https://script.google.com/macros/s/AKfycbze6vsJrLc8RoyfkB02pvsEird4O7dpJlcGTKrpYm30pcQJ_fYWOnuYohVbthpgIFw6/exec';
const url='https://script.google.com/macros/s/AKfycbxA_YdIJ9STJH2Uisrti-XAnE5nUj9WhYjUbozu4hk1/dev';
const myInput=document.querySelector("input");
const myBtn=document.querySelector("button");
const Result=document.querySelector(".result");



//var data = JSON.parse('{ "result": "OK", "Weather": "Failure" }');
//alert(data.result);

myBtn.addEventListener('click',(e)=>{
    const val=myInput.value;
    const url_parameter=`${url}?SchoolName=${val}`;
    //console.log('click');
    console.log(url_parameter);
    const formData=new FormData();

    fetch(url_parameter,{
        method:'POST',
        body:formData
    })
    .then(res =>res.json())   // 把request json化, 使用 json() 可以得到 json 物件.then(result => {
    //https://www.youtube.com/watch?v=0No2n9UTxUc
    .then(data=>{
		const schName=`${data.Name}`;
        console.log(schName);   
        alert(schName);   		
     });
      
});


function addData(data1){
    data1.forEach(person=>{
         console.log(person);            
    })
}
