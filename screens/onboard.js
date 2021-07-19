import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Onboard = () => {
    return (
        <View style={styles.container}>
           <View style={styles.banner}>
               <Image source={
                   require("../assets/images/onboard-img.png")
               }
               style={styles.image}
               />
           </View>
           <View style={styles.highlight}>
               <View>
                   <Text style={styles.headerText}>Get the Freshest Fruit Salad Combo</Text>
               </View>
               <View style={styles.highlightTextContainer}>
                   <Text style={styles.highlightText}>We deliver the freshest fruit salad combo. </Text>
                   <Text style={styles.highlightText}>Order from combo today</Text>
               </View>
               <View style={styles.buttonContainer}>
                   <TouchableOpacity style={styles.button}>
                       <Text style={styles.buttonText}>Let's continue</Text>
                   </TouchableOpacity>
               </View>

           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
    },
    banner: {
        backgroundColor: "#FFA451",
        alignItems: 'center',
        height: '60%',
        justifyContent:'space-around',
    },
    image: {
        marginTop: 40
    },
    highlight: {
        padding: 25
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    highlightTextContainer: {
      marginTop: 20
    },
    highlightText: {
        fontWeight: 'normal',
        fontSize: 18,
        color: '#5D577E',
    },
    buttonContainer: {
        marginTop: 5,
    },
    button: {
        backgroundColor: "#FFA451",
        color: 'white',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: "15%"
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
    
});
export default Onboard;