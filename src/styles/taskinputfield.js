import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20
    },
    inputField:{
        color: '#fff',
        height: 50,
        flex: 1
    },
    button:{
        height: 20,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})