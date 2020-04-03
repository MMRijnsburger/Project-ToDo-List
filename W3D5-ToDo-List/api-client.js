const API_URL = "https://wincacademydatabase.firebaseio.com/michelle/tasks";

const apiGetTasks = async () => {
    try {
        const result = await fetch(`${API_URL}.json`, { method: "GET" });
        // console.log("The results of the getApiTasks fuction:", result);
        const data = await result.json();
        // console.log("The data of getApiTasks function:", data);
        let tasks = Object.keys(data).map(key => ({
            id: key,
            description: data[key].description,
            done: data[key].done
        }));
        // console.log("The tasks in apiGetTasks function:", tasks);
        return tasks;
    } catch (error) {
        console.log(error);
    }
}

const apiAddTask = async (task) => {
    try {
        let data = JSON.stringify(task)
        // console.log("The data you put in apiAddTask function:", data);
        const result = await fetch(`${API_URL}.json`, { method: "POST", body: data });
        // console.log("The results of the apiAddTask function:", result);
        data = await result.json();
        // console.log("The data of apiAddTask function:", data);
        return { id: data.name };
    } catch (error) {
        console.log(error);
    }
}

const apiDeleteTask = async (id) => {
    try {
        const result = await fetch(`${API_URL}/${id}.json`, { method: "DELETE" });
        // console.log("The results of the apiDeleteTask function:", result);
    } catch (error) {
        console.log(error);
    }
}