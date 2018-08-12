import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      massa : 0,
      altura : 0,
      resultado : 0
    }
  }

  calcularIMC(){
    var imc = this.state.massa/(this.state.altura*this.state.altura);
    this.setState({resultado : imc})
  }

  render() {
    return (
      <View style={styles.container}>
      
         <AssetExample />

        <Text style={styles.paragraph}>
          Calculadorad de IMC
        </Text>
        <Card title="digite suas informações">

        <Text style={styles.paragraph}>
         Digite sua massa:
        </Text>
        <TextInput      
           style={{height: 40}}
           keyboardType = "numeric"
           placeholder = "digite sua massa"
           onChangeText={(massa) => this.setState({massa})}
        />

        <Text style={styles.paragraph2}>
         Digite sua altura:
        </Text>
        <TextInput      
           style={{height: 40}}
           keyboardType = "numeric"
           placeholder = "digite sua altura"
           onChangeText={(altura) => this.setState({altura})}
        />

        <Button
         title="calcular"
         onPress={this.calcularIMC.bind(this)}
         color="#841584"
        />

        <Text style={styles.paragraph2}>
         {this.state.resultado.toFixed(2)}
        </Text>

        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
    paragraph2: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});
