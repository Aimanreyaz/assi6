const loadData =async() =>{
    const url = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools)
}
const displayData =tools =>{
    console.log(tools)
    const toolContainer = document.getElementById('tools-container');
    tools.forEach(tool=>{
        const toolsDiv=document.createElement('div');
        toolsDiv.classList.add('col');
        toolsDiv.innerHTML=`
        <div class="card h-100">
        <img src="${tool.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <ul>
          <li></li>
          <li></li>
          <li></li>
          
          </ul>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Last updated 3 mins ago</small>
        </div>
      </div>
        
        `  
        toolContainer.appendChild(toolsDiv);
    })
    
}  
loadData();