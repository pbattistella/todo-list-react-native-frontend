import React, { useState } from 'react'
import { View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import styles from '../styles/taskinputfield'

const TaskInputField = (props) => {
    const [descricao, setDescricao] = useState('')

    const handleDescricaoChange = descricao => setDescricao(descricao)

    const postTask = async () => {
        if (descricao != ""){
            try{
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-type': 'application/json'},
                    body: JSON.stringify({
                        descricao: descricao
                    })
                }
                await fetch('http://localhost:3000/task', requestOptions)
                props.addTask()
            } catch( error){
                console.log(error)
                setDescricao('')
            }
        } else {
            //mensagem ao usuário solicitando o preenchimento dos campos
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput style={styles.inputField} value={descricao}
                placeholder={'Escreva uma tarefa'}
                onChangeText={handleDescricaoChange}
                onChangeTextColor={'#fff'}
            />
            <TouchableOpacity onPress={postTask}>
                <View style={styles.button}>
                    <MaterialIcons name="add" size={24}
                        color="black"
                    />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default TaskInputField