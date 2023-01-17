import React, { Component, useState } from 'react'
import { View, Button, TextInput, Touchable, TouchableOpacity } from "react-native";

// class CustomButton extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name : ""
//         }
//     }
//     render(){
//         return (
//             <View onPress={() => this.setState({ name : "xyz"})}>

//             </View>
//         )
//     }
// }



const CustomButton = ({ type = "success" , title, onValueChange }) => {

    const [name, setName] = React.useState("")
    const [x, setX] = useState(1)
    return (
        <TouchableOpacity onPress={() => onValueChange(name)}>
        </TouchableOpacity>
    )
}


// function CustomButton(val1, val2){
//     let newVal1 = val1 + 10;
//     return val1 + val2;
// }

// let sum = CustomButton(1, 5);
// let sum1 = CustomButton(10, 50);

// console.log(sum)
export default CustomButton