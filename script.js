function addtask(){
    
  


    //get the element from input tag
    var task=document.getElementById("task-input").value;
  
    //create a new list element
    var taskItem=document.createElement("div");
    //set task toc newly create list Element
    taskItem.textContent=task;
    taskItem.className=" flex items-center justify-between bg-white shadow-2xl p-2 border border-gray-500 rounded-xl";
    //create a delete element 
    var deleteTask=document.createElement("button");
    deleteTask.textContent="Delete";
    deleteTask.className="bg-red-500 text-white px-4 py-2 rounded-full";
    deleteTask.addEventListener('click',function(){
        taskItem.remove();
        var totalCount=document.getElementById("task-list").childElementCount;
        var set=document.getElementById("totalCount").textContent=totalCount;
    })
    document.getElementById("task-list").appendChild(taskItem);


    taskItem.appendChild(deleteTask);
    var totalCount=document.getElementById("task-list").childElementCount;
    var set=document.getElementById("totalCount").textContent=totalCount;
    
    

}
function Deleteall(){
    
    var count=document.getElementById("task-list").childElementCount;
    if(count===0){
        alert("Todo is empty");
    }
    else{
        document.getElementById("task-list").innerHTML="";
        var totalCount=document.getElementById("task-list").childElementCount;
        var set=document.getElementById("totalCount").textContent=0;
    }
    
}