import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import styles from '../styles/taskitem'

const TaskItem = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <Text style={styles.index}>{props.index}</Text>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={props.deleteTask}>
                    <MaterialIcons style={styles.delete} name="delete" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TaskItem