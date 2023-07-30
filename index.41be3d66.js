let e=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"");function t(e){return(e.match(/(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/((19|20)\d\d)/g)||[]).join(",")}!function(n){const o=[{category:"Task",icon:"shopping_cart"},{category:"Random Thought",icon:"psychology"},{category:"Idea",icon:"lightbulb"},{category:"Quote",icon:"format_quote"}],a=[...n],c=[];let r={};const d={notesTableBody:document.querySelector(".notes-body"),createNoteBtn:document.querySelector(".create-notes-button"),closeModalBtn:document.querySelector(".button-close"),formEl:document.querySelector(".create-note-form"),submitFormBtn:document.querySelector(".button-add-note"),submitFormBtnEdit:document.querySelector(".button-edit-note"),backdropNoteEl:document.querySelector(".backdrop-note"),noteNameInput:document.querySelector("#note-name"),noteDateInput:document.querySelector("#note-date"),noteContentInput:document.querySelector("#note-content"),noteCategorySelect:document.querySelector("#note-category"),showArchiveSelect:document.querySelector("#show-archive"),summaryNotesTableBodyEl:document.querySelector(".summary-notes-body")};function i(e,o){d.notesTableBody.innerHTML="",e.map((e=>{!function(e,n){const o=n.find((t=>t.category===e.category)),a=document.createElement("tr");a.id=e.id;const c=document.createElement("td");c.innerHTML=`<span class="material-symbols-outlined category">${o.icon}</span>`,a.appendChild(c);const r=document.createElement("td");r.innerText=e.name,r.classList.add("table-data-note-name"),a.appendChild(r);const i=document.createElement("td");i.innerText=e.created,a.appendChild(i);const l=document.createElement("td");l.innerText=e.category,l.classList.add("table-data-note-category"),a.appendChild(l);const s=document.createElement("td");s.innerText=e.content,s.classList.add("table-data-note-content"),a.appendChild(s);const u=document.createElement("td");u.innerText=t(e.content),u.classList.add("table-data-note-dates"),a.appendChild(u);const m=document.createElement("td");m.innerHTML='<span class="material-symbols-outlined edit">edit</span>',a.appendChild(m);const p=document.createElement("td");p.innerHTML='<span class="material-symbols-outlined archive">archive</span>\n    <span class="material-symbols-outlined unarchive is-hidden">unarchive</span>',a.appendChild(p);const h=document.createElement("td");h.innerHTML='<span class="material-symbols-outlined delete">delete</span>',a.appendChild(h),d.notesTableBody.appendChild(a)}(e,o)}));document.querySelectorAll("td>span.delete").forEach((e=>{e.addEventListener("click",(e=>function(e,t,n,o){const a=t.findIndex((t=>t.id===e));t.splice(a,1),i(t,o),l(t,n,o)}(e.target.parentElement.parentElement.id,a,c,o)))}));document.querySelectorAll(".edit").forEach((e=>{e.addEventListener("click",(e=>{return t=e.target,n=r,s(),d.submitFormBtn.classList.add("is-hidden"),d.submitFormBtnEdit.classList.remove("is-hidden"),n.id=t.parentElement.parentElement.id,d.noteNameInput.value=t.parentElement.parentElement.children[1].innerText,d.noteDateInput.value=function(e){let t=e.getDate();t<10&&(t="0"+t);let n=e.getMonth()+1;return n<10&&(n="0"+n),e.getFullYear()+"-"+n+"-"+t}(new Date(Date.parse(t.parentElement.parentElement.children[2].innerText))),d.noteDateInput.setAttribute("disabled","disabled"),d.noteCategorySelect.value=t.parentElement.parentElement.children[3].innerText,void(d.noteContentInput.value=t.parentElement.parentElement.children[4].innerText);var t,n}))}));const u=document.querySelectorAll(".archive"),m=document.querySelectorAll(".unarchive");u.forEach((e=>{e.addEventListener("click",(e=>function(e,t,n,o){const a=t.find((t=>t.id===e));n.push(a);const c=t.findIndex((t=>t.id===e));t.splice(c,1),i(t,o),l(t,n,o)}(e.target.parentElement.parentElement.id,n,c,o)))})),m.forEach((e=>{e.addEventListener("click",(e=>function(e,t,n,o){const a=n.find((t=>t.id===e));t.push(a);const c=n.findIndex((t=>t.id===e));n.splice(c,1),i(n,o),l(t,n,o);const r=document.querySelectorAll(".archive"),d=document.querySelectorAll(".unarchive");r.forEach((e=>e.classList.add("is-hidden"))),d.forEach((e=>e.classList.remove("is-hidden")))}(e.target.parentElement.parentElement.id,n,c,o)))}))}function l(e,t,n){d.summaryNotesTableBodyEl.innerHTML="",n.map((n=>{const o=document.createElement("tr"),a=document.createElement("td");a.innerHTML=`<span class="material-symbols-outlined category">${n.icon}</span>`,o.appendChild(a);const c=document.createElement("td");c.innerText=`${n.category}`,o.appendChild(c);const r=document.createElement("td");r.innerText=`${e.filter((e=>e.category===n.category)).length}`,o.appendChild(r);const i=document.createElement("td");i.innerText=`${t.filter((e=>e.category===n.category)).length}`,o.appendChild(i),d.summaryNotesTableBodyEl.appendChild(o)}))}function s(){d.backdropNoteEl.classList.toggle("is-hidden")}function u(){d.backdropNoteEl.classList.toggle("is-hidden"),d.formEl.reset(),d.noteDateInput.removeAttribute("disabled","false"),d.submitFormBtn.classList.toggle("is-hidden"),d.submitFormBtnEdit.classList.toggle("is-hidden")}d.createNoteBtn.addEventListener("click",s),d.closeModalBtn.addEventListener("click",u),d.submitFormBtn.addEventListener("click",(t=>function(t,n,o,a){t.preventDefault();const c=new FormData(d.formEl);if(""===d.noteNameInput.value)return void alert("Please enter note name");if(""===d.noteContentInput.value)return void alert("Please enter some note content");if(""===d.noteDateInput.value)return void alert("Please enter note date");const r={id:e(),name:c.get("note-name"),created:c.get("note-date"),category:c.get("note-category"),content:c.get("note-content"),archived:!1};n.push(r),i(n,a),l(n,o,a),u()}(t,a,c,o))),d.submitFormBtnEdit.addEventListener("click",(e=>function(e,n,o,a,c){e.preventDefault();const r=n.indexOf(n.find((e=>e.id===o.id)));o.name=d.noteNameInput.value,o.created=d.noteDateInput.value,o.category=d.noteCategorySelect.value,o.content=d.noteContentInput.value,o.dates=t(d.noteContentInput.value),o.archived=!1,n.splice(r,1,o),i(n,c),l(n,a,c),o={},u()}(e,a,r,c,o))),d.showArchiveSelect.addEventListener("change",(e=>function(e,t,n,o){switch(e.target.value){case"archived":i(n,o);const e=document.querySelectorAll(".archive"),a=document.querySelectorAll(".unarchive");e.forEach((e=>e.classList.add("is-hidden"))),a.forEach((e=>e.classList.remove("is-hidden")));break;case"active":i(t,o)}}(e,a,c,o))),document.addEventListener("DOMContentLoaded",(function(){i(a,o),l(a,c,o)}))}([{id:"1",name:"Shopping list",created:"2023-04-20",category:"Task",content:"Tomato, bread"},{id:"2",name:"The theory of evolution",created:"2023-04-23",category:"Random Thought",content:"The evolution is ..."},{id:"3",name:"New feature",created:"2023-05-06",category:"Task",content:"Add new feature until 31/07/2023"},{id:"4",name:"Motivation",created:"2023-06-17",category:"Quote",content:"Believe you can and you're halfway there. Theodore Roosevelt"},{id:"5",name:"New feature",created:"2023-07-08",category:"Task",content:"Add new feature until 30/07/2023"},{id:"6",name:"Manicure",created:"2023-07-29",category:"Task",content:"Manicure 30/07/2023 replaced to 09/08/2023 "},{id:"7",name:"Piknik",created:"2023-07-29",category:"Idea",content:"Prepare small piknik in park on Sunday 06/08/2023 "}]);
//# sourceMappingURL=index.41be3d66.js.map
