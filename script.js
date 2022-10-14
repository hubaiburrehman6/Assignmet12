window.addEventListener('load',() =>{
    const form = document.querySelector("#new-task-form");
    const input =document.querySelector("#new-input-task");
    const list_el = document.querySelector("#tasks");
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
       const task = input.value;
       if (!task){
        alert("Please complete the task");
        return;
       }
      const task_el = document.createElement("div");
      task_el.classList.add("task");
      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
      task_content_el.innerText =task;
      task_content_el.classList.add("content");
      task_el.appendChild(task_content_el);

      const task_input_el = document.createElement("input");
       task_input_el.type = 'text';
      list_el.appendChild(task_el);
    })
})