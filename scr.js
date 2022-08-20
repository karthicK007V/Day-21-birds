async function birds(){
    try{
    let thi=await fetch("https://xeno-canto.org/api/2/recordings?query=cnt:brazil");
    let res=await thi.json();
    console.log(res);
    console.log(res.recordings);
    let a=res.recordings;
    for(let i=0;i<=a.length;i++){
        console.log(a[i].id);
        console.log(a[i].gen);
        console.log(a[i].sp);
        console.log(a[i].en);
        console.log(a[i].loc);
        console.log(a[i].file);



var div=document.createElement("div");
div.innerHTML=`<div class="container"><div class="card" style="width: 18rem;">
<div class="card-header">
  <h4>Birds Sounds : ${[i]}</h4>
</div>
<ul class="list-group ">
  <li class="list-group-item">ID:${a[i].id}</li>
  <li class="list-group-item">GEN:${a[i].gen}</li>
  <li class="list-group-item">SP:${a[i].sp}</li>
  <li class="list-group-item">LOCATION:${a[i].loc}</li>
  <li class="btn bb "><a href="${a[i].file}" target="_blank">File Link</a></li>
</ul>
</div>
</div>`;
document.body.append(div);

















    }








    }

catch(err){
    console.log(err);
 }
 
 
}
 
 birds()