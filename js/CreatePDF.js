//const script_url='https://script.google.com/macros/s/AKfycbxxkjQivSzGqZanHZr_mSUnNnEXWq4u222gNLZW_RuZy-5-HvtDgTTP3pPl9q5beC_w/exec';
//const script_url='https://script.google.com/macros/s/AKfycbztdM5ejOA2rCUMWFIq_gBlU6N3bSKiMSX5YBojLMjWX1cQsyCjt-OiL4MdYTS8usZx/exec';
const script_url='https://script.google.com/macros/s/AKfycbzZPkM-n-tt3wHzwi0QhSycXYTV-yS9ZUYlsyDBF4-ZD2QZ7PCkIcIOw4pgvIN-PQN-/exec';




           
function CreatePDF_UUID(uuid){
	console.log(typeof uuid);
	uuid=document.getElementById("uuid_pdf").value;  	 //帶入資料的uuid值
	console.log(uuid);

	if ( uuid === "")	{
		alert("請先送出填報資料，再產生PDF檔");
		return;
	}
	//alert(uuid);
	//return;
    const val=uuid;
    const url_parameter=`${script_url}?uuid=${val}`;
    //console.log('click');
    console.log(url_parameter);

	console.log("transition effect active")
    transition_Effect.showTransition();   //call vue showTransition function at  main.min.js
    
    const formData=new FormData();
    fetch(url_parameter,{
        method:'POST',
        body:formData
    }).then(res =>res.json())   // 把request json化, 使用 json() 可以得到 json 物件.then(result => {
    .then(URLs=>{
        console.log(URLs);
		transition_Effect.hideTransition();   //call vue hideTransition function at main.min.js

		$("a").attr("href", `${URLs.Link}`); 
		var x = document.getElementById("link");
		var y = document.getElementById("PDFGenerator");
	    if ((x.style.display === "none") && (y.style.display === "block")){
        x.style.display = "block";
        }  
     });


    
}



