//const url='https://script.google.com/macros/s/AKfycbz3HOSI16ekKRuypFFRvTBQ91Lw0MTFEIBUjhYNxXKSOjR9tcabJmZQ9j8BLxpGBeiE2A/exec';
const urls='https://script.google.com/macros/s/AKfycbxcBYrufmOo4JWGZ_PXajuKnK_2QlNfus8bKser1TxT8YgH5B8Qo2OQJs2xwXBQFt7hcw/exec';




           
function QueryUUID(qStr){

    const val=qStr;
    const url_parameter=`${urls}?UUID=${val}`;
    console.log('click');
    console.log(url_parameter);


	console.log("transition effect active")
    transition_Effect.showTransition();   //call vue showTransition function at  main.min.js
    

    const formData=new FormData();

    fetch(url_parameter,{
        method:'POST',
        body:formData
    })
    .then(res =>res.json())   // 把request json化, 使用 json() 可以得到 json 物件.then(result => {
    //https://www.youtube.com/watch?v=0No2n9UTxUc
    .then(data=>{

        console.log(data);

        console.log("transition effect deactive")
        transition_Effect.hideTransition();   //call vue hideTransition function at  main.min.js

    let el = document.getElementById("SchoolName");		//帶入學校名稱
    el.value = `${data.SchoolName}`;
    el.dispatchEvent(new Event('input'));			
		


	//document.getElementById("SchoolName").value=`${data.SchoolName}`;  //帶入學校名稱
	document.getElementById("ReportedPersonName").value=`${data.ReportedName}`;  //帶入學校填報人姓名
	document.getElementById("PhoneNO").value=`${data.TelNO}`;  //帶入學校填報人姓名
	document.getElementById("Email").value=`${data.EMail}`;  //帶入學校填報人姓名
	//document.getElementById("ClassesAmt").value=`${data.SchClassesAmount}`;  //帶入學校總班級數 
	
    let e2 = document.getElementById("ClassesAmt");		//帶入學校總班級數 
    document.getElementById("ClassesAmt").value = `${data.SchClassesAmount}`;
    e2.dispatchEvent(new Event('input'));			
	
	
	document.getElementById("Grade1StAmt").value=`${data.Gde1StudentAmount}`;  //帶入學校一年級人數
	document.getElementById("Grade2StAmt").value=`${data.Gde2StudentAmount}`;  //帶入學校二年級人數
	document.getElementById("Grade3StAmt").value=`${data.Gde3StudentAmount}`;  //帶入學校三年級人數
	document.getElementById("Grade4StAmt").value=`${data.Gde4StudentAmount}`;  //帶入學校四年級學生人數
	document.getElementById("Grade5StAmt").value=`${data.Gde5StudentAmount}`;  //帶入學校五年級學生人數
	document.getElementById("Grade6StAmt").value=`${data.Gde6StudentAmount}`;  //帶入學校六年級學生人數
	
	//document.getElementById("GeneralClassPCAmt").value=`${data.ClassesPCAmount}`;  //帶入學校班級電腦數量
    document.getElementById("GeneralClassPCAmt").value = `${data.ClassesPCAmount}`;
    document.getElementById("GeneralClassPCAmt").dispatchEvent(new Event('input'));			
	
	document.getElementById("AffairPCAmt").value=`${data.AffairPCAmount}`;  //帶入學校行政電腦數量
	document.getElementById("ProjectorAmt").value=`${data.Projector}`;  //帶入投影機數量
	document.getElementById("ClassTchingScreen").value=`${data.TchingScreens}`;  //帶入學校大屏數量
	document.getElementById("MobileDeviceAmt").value=`${data.MobileDevice}`;  //帶入學校行動載具數量
	
	//document.getElementById("CurrentRation").value=`${data.CurrentAccount}`;  //帶入學校經常門比例
    document.getElementById("CurrentRation").value = `${data.CurrentAccount}`;
    document.getElementById("CurrentRation").dispatchEvent(new Event('input'));	
	
	//document.getElementById("CapitalRation").value=`${data.CapitalAccount}`;  //帶入學校資本門比例
    document.getElementById("CapitalRation").value = `${data.CapitalAccount}`;
    document.getElementById("CapitalRation").dispatchEvent(new Event('input'));		
	
	document.getElementById("svSchAddress").value=`${data.SchoolAddress}`;  //帶入學校地址(input type-hidden)
    document.getElementById("SchAddress").innerHTML=document.getElementById("SchAddress").innerHTML+`${data.SchoolAddress}`;  		                   //學校地址					
	document.getElementById("Remark").value=`${data.Remarks}`;  //帶入填報備註



    //if ((data.StudentAmount)!==void 0)document.getElementById("ReportedPersonName").innerHTML=`${data.SchoolITCharge}人`;  //帶入學校資訊負責人
/*
	if ((data.Gde1StudentAmount)!==void 0)	document.getElementById("Grade1").innerHTML=`${data.Gde1StudentAmount}人`;  		   //帶入學校一年級(七年級)學生總人數
	if ((data.Gde2StudentAmount)!==void 0)	document.getElementById("Grade2").innerHTML=`${data.Gde2StudentAmount}人`;  		   //帶入學校二年級(八年級)學生總人數		
	if ((data.Gde3StudentAmount)!==void 0)	document.getElementById("Grade3").innerHTML=`${data.Gde3StudentAmount}人`;  		   //帶入學校三年級(九年級)學生總人數
	if ((data.Gde4StudentAmount)!==void 0)	document.getElementById("Grade4").innerHTML=`${data.Gde4StudentAmount}人`;  		   //帶入學校四年級學生總人數
	if ((data.Gde5StudentAmount)!==void 0)	document.getElementById("Grade5").innerHTML=`${data.Gde5StudentAmount}人`;  		   //帶入學校五年級學生總人數
	if ((data.Gde6StudentAmount)!==void 0)	document.getElementById("Grade6").innerHTML=`${data.Gde6StudentAmount}人`;  		   //帶入學校六年級學生總人數		
	if ((data.ClassesPCAmount)!==void 0)	document.getElementById("ClassesPCAmount").innerHTML=`${data.ClassesPCAmount}台`;  		   //班級教室電腦數
	if ((data.AffairPCAmount)!==void 0)	document.getElementById("AffairPCAmount").innerHTML=`${data.AffairPCAmount}台`;  		   //行政電腦數
	if ((data.Projector)!==void 0)	document.getElementById("Projector").innerHTML=`${data.Projector}台`;  		   			   //單槍投影機數
    if ((data.CurrentAccount)!==void 0)   document.getElementById("CurrentAccount").innerHTML=document.getElementById("CurrentAccount").innerHTML+`${data.CurrentAccount}%`;  		   //112年經常門經費百分比
	if ((data.CapitalAccount)!==void 0)	document.getElementById("CapitalAccount").innerHTML=document.getElementById("CapitalAccount").innerHTML+`${data.CapitalAccount}%`;  		   //112年資本門經費百分比				
	if ((data.CapitalAccount)!==void 0)	document.getElementById("SchAddress").innerHTML=document.getElementById("SchAddress").innerHTML+`${data.SchoolAddress}`;  		                   //學校地址				
*/
		
		

     });

    
}


function addData(data1){
    data1.forEach(person=>{
         console.log(person);            
    })
}
