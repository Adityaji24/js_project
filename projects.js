const projectsTableBody = document.getElementById('projects-table-body');

// Retrieve stored tasks from local storage
const storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
  const tasks = JSON.parse(storedTasks);
  tasks.forEach((task) => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${task.project}</td>
      <td>${task.startDate}</td>
      <td>${task.endDate}</td>
      <td>${task.teamwork}</td>
      <td>${task.status}</td>
    `;
    projectsTableBody.appendChild(tableRow);
  });
}
