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
		 return new Promise((resolve)=>{
			 setTimeout(()=>resolve(inputValue),2000);
		 })
	 }).then((inputValue)=>{
		  inputValue=inputValue*2;
		 div.textContent=`Result: ${inputValue}`;
		 return new Promise((resolve)=>{
			 setTimeout(()=>resolve(inputValue),1000);
		 })
	 }).then((inputValue)=>{
		 inputValue=inputValue-3;
		 div.textContent=`Result: ${inputValue}`;
		 return new Promise((resolve)=>{
			setTimeout(()=>resolve(inputValue),1000); 
		 })
	 }).then((inputValue)=>{
		  inputValue=inputValue/2;
		  div.textContent=`Result: ${inputValue}`;
		 return new Promise((resolve)=>{
			setTimeout(()=>resolve(inputValue),1000); 
		 })
	 }).then((inputValue)=>{
		  inputValue=inputValue+10;
		 div.textContent=`Final Result: ${inputValue}`;
	 })
 });