import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  render() {

    let jsCode = `

    function hilang(classes){
      i = 0,
      l = classes.length;
      for (i; i < l; i++) {
        classes[i].style.display = 'none';
      }
    }
    document.getElementById("mainNav").style.display = "none";
    document.getElementById("related_posts").style.display = "none";
    document.getElementById("main-nav").style.display = "none";
    document.getElementById("slide-out-open").style.display = "none";
    var infobox = document.querySelectorAll('.info-box');
    var userblock = document.querySelectorAll('.user-block');
    hilang(infobox);
    hilang(userblock);
`;
    return (
      <View style={styles.container}>
        <Text>Dermayu on Touch</Text>
        <WebView
      source={{uri: 'http://sekolah.data.kemdikbud.go.id/index.php/chome/profil/9CDE0513-75A3-49ED-A68A-DF9680A5FD8E'}}
      style={{marginTop: 20}}
      injectedJavaScript={jsCode}
      javaScriptEnabledAndroid={true}
    />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
