import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  render() {

    let jsCode = `
    var myClasses = document.querySelectorAll('.fb-comments');
    var postClass = document.querySelectorAll('.post-navigation');
    var widgetClass = document.querySelectorAll('.theiaStickySidebar');
    var footerClass = document.querySelectorAll('.footer-bottom');
    
    function hilang(classes){
      i = 0,
      l = classes.length;
      for (i; i < l; i++) {
        classes[i].style.display = 'none';
      }
    }
    hilang(myClasses);
    hilang(postClass);
    hilang(widgetClass);
    hilang(footerClass);
    document.getElementById("breaking-news").style.display = "none";
    document.getElementById("related_posts").style.display = "none";
`;
    return (
      <View style={styles.container}>
        <Text>Dermayu on Touch</Text>
        <WebView
      source={{uri: 'https://indramayukab.go.id/sejarah-indramayu/'}}
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
