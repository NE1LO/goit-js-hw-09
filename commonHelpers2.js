import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                     */const m=document.querySelector(".feedback-form"),s="feedback-form",e={email:"",message:""},a=JSON.parse(localStorage.getItem(s));a&&(e.email=a.email||"",e.message=a.message||"",m.elements.email.value=a.email||"",m.elements.message.value=a.message||"");m.addEventListener("input",t=>{const l=t.target.nodeName;l==="INPUT"&&(e.email=t.target.value.trim()),l==="TEXTAREA"&&(e.message=t.target.value.trim()),localStorage.setItem(s,JSON.stringify(e))});m.addEventListener("submit",t=>{e.email!==""&&e.message!==""&&(t.preventDefault(),console.log(e),localStorage.removeItem(s),m.reset())});
//# sourceMappingURL=commonHelpers2.js.map