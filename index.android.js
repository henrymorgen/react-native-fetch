import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableHighlight} from 'react-native';
let FetchUtils = require('./FetchUtils');
class Fetch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor='rgb(210,260,260)'
                    style={{padding: 10, marginTop: 10, borderRadius: 5,}}
                    onPress={this.get}
                >
                    <Text >get请求</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor='rgb(210,260,260)'
                    style={{padding: 10, marginTop: 10, borderRadius: 5,}}
                    onPress={this.post}
                >
                    <Text >post请求</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor='rgb(210,260,260)'
                    style={{padding: 10, marginTop: 10, borderRadius: 5,}}
                    onPress={this.sendGet}
                >
                    <Text >封装的get请求</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='rgb(210,260,260)'
                    style={{padding: 10, marginTop: 10, borderRadius: 5,}}
                    onPress={this.sendPost}
                >
                    <Text >封装的post请求</Text>
                </TouchableHighlight>
            </View>
        );
    }


    get() {
        fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.23.12', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((jsonData) => {
                let country = jsonData.data.country;
                let city = jsonData.data.city;
                alert("country:" + country + "-------city:" + city);
            });
    }

    sendGet() {
        FetchUtils.send('get', 'http://ip.taobao.com/service/getIpInfo.php?ip=59.108.23.16', '', jsonData => {
            let country = jsonData.data.country;
            let city = jsonData.data.city;
            alert("country:" + country + "-------city:" + city);
        })
    }

    sendPost() {
        FetchUtils.send('post', 'http://ip.taobao.com/service/getIpInfo.php', {'ip': '59.108.23.16'}, jsonData => {
            let country = jsonData.data.country;
            let city = jsonData.data.city;
            alert("country:" + country + "-------city:" + city);
        })
    }

    post() {
        fetch('http://ip.taobao.com/service/getIpInfo.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'ip': '59.108.23.12'
            })
        }).then((response) => response.json())
            .then((jsonData) => {
                let country = jsonData.data.country;
                let city = jsonData.data.city;
                alert("country:" + country + "-------city:" + city);
            });
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
});
AppRegistry.registerComponent('FetchSample', () => Fetch);