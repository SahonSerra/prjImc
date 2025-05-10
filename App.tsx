import { useState } from 'react'; // Primeira linha
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';



export default function App() {

  const [peso,setPeso] = useState(''); // get/set do mobile(formato de estado)
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function limpar(){
    setPeso('');
    setAltura('');
    setResultado('');
  }  

  function calcularImc(){
    let alturaEmMetro = parseFloat(altura) /100;
    let result = parseFloat(peso) /(alturaEmMetro * alturaEmMetro);
    setResultado("Valor do IMC: " +result.toFixed(2));

    let msg ="";
       
    if(result <18.5){
      msg ="abaixo do peso!";    
    }else if (result >18.5 && result<24.99){
      msg="peso ideal!";
    }else if(result >25 && result<29.99){
      msg="Levemente acima do peso!"
    }else if(result >30 && result<34.99){
      msg="Obesidade grau I";
    }else if(result >35 && result<39.99){
      msg="Obesidade grau II(severa)";
    }else if(result >40){
      msg="Obesidade grau III(mórbida)";
    }
    

    setResultado("Valor do IMC: " +result.toFixed(2) +" "+ msg);
  } 
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> IMC </Text>
      
      <View style={styles.bloco}>
          <Text style={styles.label}>Peso</Text>
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={peso}
            onChangeText={(valor)=>setPeso(valor)} 
          />
      </View>
      <View style={styles.bloco}>
          <Text style={styles.label} >Altura</Text>
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
            value={altura}
            onChangeText={(valor)=>setAltura(valor)}
            
          />
      </View>
      <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={calcularImc} >
              <Text style={styles.btnTxt}>Calcular</Text>
          </TouchableOpacity>  
      </View>
      <View style={styles.bloco}>
          <TouchableOpacity style={styles.btn} onPress={limpar} >
              <Text style={styles.btnTxt}>Limpar</Text>
          </TouchableOpacity>  
      </View>
      
      <View style={styles.bloco}>
      <Text style={styles.titulo}>{resultado}</Text>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  titulo:{
    textAlign:'center',

    fontSize:30,
    marginTop:80
  },
  bloco:{
    width:'100%',
    marginTop:20
  },
  label:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%'
  },
  input:{
    width:'80%',
    fontSize:20,
    marginLeft:'10%',
    borderWidth:1,
    borderRadius:10

  },
  btn:{
    width:'80%',
    marginLeft:'10%',
    backgroundColor:'green',
    borderRadius:10

    
  },
  btnTxt:{
    fontSize:30,
    color:"#FFF",
    textAlign:'center'
  }
});