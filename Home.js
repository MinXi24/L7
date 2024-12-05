import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {datasource} from "./Data"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    sectionHeader: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    sectionIcon: {
        marginRight: 8,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        borderColor: 'black',
    },
    itemContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    date: {
        fontSize: 12,
        textAlign: 'left',
        textDecorationLine: 'underline',
    },
    spent: {
        fontSize: 15,
        color: 'darkblue',
        flexWrap: 'wrap',
        maxWidth: '10%'
    },
    image: {
        width: 150,
        height: 140,
        marginLeft: 10,
    },
    button: {
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 30,
        color:'blueviolet',
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign: 'center',
    }
});
const Home = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.itemContainer}
                              onPress ={() =>
                              {
                                  navigation.navigate('Edit', {index:index, type:section.category, date:item.date, icon:item.icon, spent:item.spent });
                              }
                              }>

                <Text style={styles.spent}>
                    ${item.spent}</Text>

                <Text style={styles.date}>{item.date}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <StatusBar/>
            <Text style={styles.title}>Expense and Income Manager</Text>

            <Button title='Calculate Total'
                    onPress={()=>{
                        let total = 0
                        datasource.forEach((section) => {
                            section.data.forEach((item) => {
                                const spentValue = parseFloat(item.spent);
                                    total += spentValue;
                                });
                        });

                        Alert.alert("Total Spent",`${total}`,
                            [{text:'Ok', onPress:()=>{
                                    navigation.navigate("Home")
                                }},
                            ])

                    }
                    }
            />
            <Text></Text>
            <SectionList sections={datasource} renderItem={renderItem}
                renderSectionHeader={({section:{category,icon,bgcolor}})=>(
                             <View style={[styles.sectionHeader, { backgroundColor: bgcolor }]}>
                                 <Text style={styles.sectionTitle}>{category}</Text>
                                 <Icon
                                     name={icon}
                                     size={30}
                                     color="#fff"
                                     style={styles.sectionIcon}/>
                             </View>
                         )}/>
            <View style={styles.button}>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Text> </Text>
                <Button title='Add Items'
                        onPress={() => { navigation.navigate("Add") }}
                />
            </View>

        </View>
    );
};

export default Home;
