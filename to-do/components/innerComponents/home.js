
import { View, Text, StyleSheet } from "react-native";

export function HomeScreen() {

    return (

        <View style={styles.vista}><View>


            <View><Text style={styles.cajas}>
                home screensjpdjp
            </Text></View>
            <View><Text style={styles.cajas}>
                home screensjpdjp
            </Text></View>
            <View><Text style={styles.cajas}>
                home screensjpdjp
            </Text></View>
            <View><Text style={styles.cajas}>
                home screensjpdjp
            </Text></View>
        </View>


        </View>


    );
}

const styles = StyleSheet.create({
    
    cajas: {

        width: 120,
        height: 70,
        color: 'red',
        backgroundColor: "yellow",
        margin: '1%',
        justifyContent: "center"
    },
    vista: {
        
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent:"center",
        flexDirection:"row"

    }



})