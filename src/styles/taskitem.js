import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginRight: 3,
        marginBottom: 3
    },
    taskContainer:{
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        paddingVertical: 5,
        minHeight: 50
    },
    index:{
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
        paddingLeft: 10
    },
    task:{
        color: '#fff',
        width: '85%',
        fontSize: 16
    },
    delete:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 20
    }
})