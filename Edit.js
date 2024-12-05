import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const [date,setDate] = useState(route.params.date);
    const [spent,setSpent] = useState(route.params.spent);
    return(
        <View style ={{padding:10}}>
            <Text>Date:</Text>
            <TextInput value={date} style={{borderWidth:1}} onChangeText={(text)=>setDate(text)}/>
            <Text>Spent:</Text>
            <TextInput value={spent} style={{borderWidth:1}} onChangeText={(text)=>setSpent(text)}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{margin:10,flex:1}}>
                    <Button title='SAVE'
                            onPress={()=>{
                                let indexNum = 1
                                if (route.params.type=="Food"){
                                    indexNum = 0;
                                } else if (route.params.type=="Online Shopping") {
                                    indexNum = 2;
                                }
                                datasource[indexNum].data[route.params.index].date = date;
                                datasource[indexNum].data[route.params.index].spent = spent;
                                navigation.navigate("Home")
                            }
                            }
                    />
                </View>
                <View style={{margin:10,flex:1}}>
                    <Button title='DELETE'
                            onPress={()=>{
                                let indexNum = 1
                                if (route.params.type=="Food"){
                                    indexNum = 0;
                                } else if (route.params.type=="Online Shopping") {
                                    indexNum = 2;
                                }
                                Alert.alert("Confirmed?",'',
                                    [{text:'Yes', onPress:()=>{
                                            datasource[indexNum].data.splice(route.params.index,1);
                                            navigation.navigate("Home")
                                        }},
                                        {text:'No'}])

                            }
                            }
                    />
                </View>
            </View>
        </View>
    );
};


export default Edit;
