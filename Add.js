import React, { useState } from 'react';
import { datasource } from './Data';
import { TextInput, View, Text, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation }) => {
    const [date, setDate] = useState('');
    const [spent, setSpent] = useState('');
    const [category, setCategory] = useState('Food');

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Date: </Text>
                <TextInput
                    style={{ borderWidth: 1}}
                    onChangeText={(text) => setDate(text)}
                />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Spent: </Text>
                <TextInput
                    style={{ borderWidth: 1}}
                    onChangeText={(text) => setSpent(text)}
                />
            </View>
            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={category}
                    onValueChange={(value) => setCategory(value)}
                    items={[
                        { label: 'Food', value: 'Food' },
                        { label: 'Drink', value: 'Drink' },
                        { label: 'Online Shopping', value: 'Online Shopping' },
                    ]}
                />
            </View>
            <Button
                title="Add"
                onPress={() => {
                    const item = {date, spent};
                    let indexNum = 1;
                    if (category === 'Food') {
                        indexNum = 0;
                    } else if (category === 'Online Shopping') {
                        indexNum = 2;
                    }
                    datasource[indexNum].data.push(item);
                    console.log(datasource[indexNum].data); // Debugging
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
};

export default Add;
