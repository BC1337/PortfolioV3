// adding ability to actually use the home button
document.getElementById('homeIcon').onclick = function () {
    location.href = "../projectHub/index.html"
}

const grabBtns = document.querySelector('.buttonContainer')
const removeButtonEls = document.querySelectorAll('.task-remove');
let totalAmountEl = document.querySelector('.displayTotal')
let taskList = []
let totalAmount = 0
    
grabBtns.addEventListener('click', (e) => {
    if (e.target.tagName === "A") {
        let taskId = e.target.innerText.replace(' ', '-').toLowerCase().split(":")[0];
        let taskAmount =  +e.target.innerText.split("$")[1];
         if (!taskList.includes(taskId)) {
            taskList.push(taskId)
            totalAmount += taskAmount
            taskList.map(task => {
            let taskEl = document.getElementById(taskId);
            taskEl.classList.remove('hidden')
            })
        }
        totalAmountEl.innerHTML = `$${totalAmount}`
    }
})
        
removeButtonEls.forEach(element => {
    element.addEventListener('click', (e) => {
        const closestTask = e.target.closest('.task__body');
        taskList = taskList.filter(task => task !== closestTask.id)
        closestTask.classList.add('hidden')
        totalAmount -= closestTask.innerText.split('$')[1];
        totalAmountEl.innerHTML = `$${totalAmount}`
    })
});

