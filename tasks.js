const taskForm = document.getElementById('task-form');
const taskTableBody = document.getElementById('task-table-body');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const project = document.getElementById('project').value;
  const startDate = document.getElementById('start-date').value;
  const endDate = document.getElementById('end-date').value;
  const teamwork = document.getElementById('teamwork').value;
  const status = document.getElementById('status').value;

  const taskData = {
    project,
    startDate,
    endDate,
    teamwork,
    status
  };

  // Store data in local storage
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.push(taskData);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    localStorage.setItem('tasks', JSON.stringify([taskData]));
  }

  // Display data in table on tasks.html (optional)
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${project}</td>
    <td>${startDate}</td>
    <td>${endDate}</td>
    <td>${teamwork}</td>
    <td>${status}</td>
  `;
  taskTableBody.appendChild(tableRow);

  // Reset form fields
  taskForm.reset();
});


