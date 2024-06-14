//const url='https://script.google.com/macros/s/AKfycbz3HOSI16ekKRuypFFRvTBQ91Lw0MTFEIBUjhYNxXKSOjR9tcabJmZQ9j8BLxpGBeiE2A/exec';
const url='https://script.google.com/macros/s/AKfycbwMIGMnoMGwYV3nitmfMLYzTFuLzKa9kLcjl1l6MSIXo79xVShvTVBu9nIE7TEBdWL0pA/exec';


           
function QueryString(qStr){

    const val=qStr;
    const url_parameter=`${url}?SchoolName=${val}`;
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

		const schName=`${data.SchoolName}`;		
		//document.getElementById("stTotalAmount").innerHTML=`${data.StudentAmount}人`;  //帶入學校學生總人數
	    
    document.getElementById("stTotalAmount").innerHTML="";
	document.getElementById("Grade1").innerHTML="";
	document.getElementById("Grade2").innerHTML="";
	document.getElementById("Grade3").innerHTML="";
	document.getElementById("Grade4").innerHTML="";
	document.getElementById("Grade5").innerHTML="";
	document.getElementById("Grade6").innerHTML="";
	document.getElementById("ClassesPCAmount").innerHTML="";
	document.getElementById("AffairPCAmount").innerHTML="";
	document.getElementById("Projector").innerHTML="";
    document.getElementById("CurrentAccount").innerHTML="";
	document.getElementById("CapitalAccount").innerHTML="";
	document.getElementById("SchAddress").innerHTML="";
    //document.getElementById("svSchAddress").innerHTML=${data.SchoolAddress};      //將112年填報的學校地址送回hidden表單


	//document.getElementById("ReportedPersonName").value=`${data.SchoolITCharge}`;	
	//document.getElementById("PhoneNO").value=`${data.SchoolITCharge}`;
	

    document.getElementById("stInfo").style.display="block";
    document.getElementById("deviceAmt").style.display="block";


    if ((data.StudentAmount)!==void 0)document.getElementById("stTotalAmount").innerHTML=`${data.StudentAmount}人`;  //帶入學校學生總人數	
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

		
		

     });

    
}


function addData(data1){
    data1.forEach(person=>{
         console.log(person);            
    })
}
