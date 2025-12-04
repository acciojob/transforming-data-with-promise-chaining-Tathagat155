//your JS code here. If required.
const input=document.getElementById("ip");
const button=document.getElementById("btn");
const div=document.getElementById("output");
 button.addEventListener("click",()=>{
	 const promise=new Promise((resolve,reject)=>{
		  let inputValue=parseInt(input.value);
		 setTimeout(()=>resolve(inputValue),2000);
	 }).then((inputValue)=>{
		 div.textContent=`Result: ${inputValue}`;
		 inputValue=inputValue*2;
		 return new Promise((resolve)=>{
			 setTimeout(()=>resolve(inputValue),3000);
		 })
	 }).then((inputValue)=>{
		 div.textContent=`Result: ${inputValue}`;
		 inputValue=inputValue-3;
		 return new Promise((resolve)=>{
			 setTimeout(()=>resolve(inputValue),4000);
		 })
	 }).then((inputValue)=>{
		 div.textContent=`Result: ${inputValue}`;
		 inputValue=inputValue/2;
		 return new Promise((resolve)=>{
			setTimeout(()=>resolve(inputValue),5000); 
		 })
	 }).then((inputValue)=>{
		  div.textContent=`Result: ${inputValue}`;
		 inputValue=inputValue+10;
		 return new Promise((resolve)=>{
			setTimeout(()=>resolve(inputValue),6000); 
		 })
	 }).then((inputValue)=>{
		 div.textContent=`Final Result: ${inputValue}`;
	 })
 });