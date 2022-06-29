import { useEffect, useState } from "react";
import { View, Text, Keyboard, ScrollView } from "react-native";
import TaskInputField from "./src/components/TaskinputField";
import TaskItem from "./src/components/TaskItem"
import styles from "./src/styles/app"

const App = () => {
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        getTasks()
        Keyboard.dismiss()
    }

    const deleteTask = async deleteId => {
        const requestOptions = {
            method:'DELETE',
            headers:{'Content-type': 'application/json'}
        }
        try{
            await fetch('http://localhost:3000/task/' + deleteId, requestOptions)
            setTasks(tasks.filter(task => task.id != deleteId))
        } catch (error){
            console.log(error)
            setTasks([])
        }
    }

    const getTasks = async() => {
        try{
            const response = await fetch('http://localhost:3000/task')
            const data = response.json()
            data.then(
                (val) => setTasks(val)
            )
        } catch(error){
            console.error(error)
            setTasks([])
        } 
    }

    useEffect( () => {
        getTasks()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Lista de Tarefas</Text>
            <ScrollView style={styles.scrollView}>
                {
                    tasks.map((data) => {
                        return (
                            <View style={styles.taskContainer} key={data.id}>
                                <TaskItem index={data.id} task={data.descricao} 
                                    deleteTask={() => deleteTask(data.id)}
                                />
                            </View>
                        )
                    })
                }
            </ScrollView>
            <TaskInputField addTask={addTask} />
        </View>
    )
}

export default App