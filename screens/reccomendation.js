import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export default class Reccomendation extends Component {
    constructor(){
        super()
        this.state = {
            data: [] 
        }
    }

    getData = () => {
        const url = "/recommended-articles"
        axios.get(url).then((response) => {
            this.setState({data: response.data.data})
        })
    }

    componentDidMount(){
        this.getData()
    }

    keyExtractor = (item, index) => {
        index.toString()
    }
    
    renderItems = ({item, index}) => {
        return(
            <Card key = {`card-${index}`}
                image = {{uri: item.poster_link}}
                imageProps = {{resizeMode: 'cover'}}
                featureTitle = {item.title}
                containerStyle = {styles.cardContainer}
                featuredTitleStyle = {styles.title}
                featuredSubTitle = {`${item.release_date.split('-')[0]}`}>
            </Card>
        )
    }
    //'card-' + index

    render(){
        return(
            <View>
                <Flatlist data = {data}
                renderItems = {this.renderItems}
                keyExtractor = {this.keyExtractor}></Flatlist>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        borderRadius: RFValue(10),
        justifyContent: "center",
        height: RFValue(10),
        marginBottom: RFValue(20)
    },
    title: {
        color: 'green',
        alignSelf: "flex-start",
        paddingLeft: RFValue(15),
        fontSize: RFValue(25),
        marginTop: RFValue(65)
    }
})