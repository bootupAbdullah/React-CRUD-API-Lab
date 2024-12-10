const BASE_URL = "http://localhost:3000/tasks/"



async function fetchTasks () {
    
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error(`Response status:  ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

    } catch (error) {
        console.error(error.message);
    }

}

const addTask = async () => {
    const taskData = {
        Item: "Look Up Comic Releases",
        Due: "Tomorrow 12/11",
        Notes: "I am interested in knowing what issues come out tomorow on Wednesday 12/11"
    };

    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskData)
        });
        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON returned from the server
        console.log(data); // This will log the newly created task
    } catch (error) {
        console.error('Error adding task:', error.message);
    }
}

fetchTasks()