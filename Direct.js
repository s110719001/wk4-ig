import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Direct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchcontainer}>
        <Image 
        source={{uri:"https://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/search-icon.png"}}
        style={{width:27,height:27,marginLeft:21,marginTop:3,}}
        />
        <Text style={styles.search}>搜尋</Text>
      </View>
      <View>
        <View style={{flexDirection:"row"}}>
          <Image 
          source={{uri:"https://i.pinimg.com/originals/07/71/3d/07713d3bc29ce2cee6c9ed986f4a314a.jpg"}}
          style={styles.photo}
          />
          <Text style={styles.account}>alexandradaddario</Text>
        </View>
        <Text style={styles.content}>It's been a long time!</Text>
        <View style={{borderWidth:0.2,borderColor:"#D2B48C",marginTop:20}}></View>
      </View>

      <View>
        <View style={{flexDirection:"row",marginTop:3}}>
          <Image
          source={{uri:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dsc09566-a-1557843958.jpg?crop=0.6672727272727272xw:1xh;center,top&resize=480:*"}}
          style={styles.photo}
          />
          <Text style={styles.account}>jasonstatham</Text>
        </View>
        <Text style={styles.content}>This is the last chance</Text>
        <View style={{borderWidth:0.2,borderColor:"#D2B48C",marginTop:20}}></View>
      </View>

      <View>
        <View style={{flexDirection:"row",marginTop:3}}>
          <Image
          source={{uri:"https://us.hola.com/imagenes/es/celebrities/2019072226199/ana-de-armas-cambio-cabello-mz/0-191-783/ana-de-armas-m.jpg?filter=w400"}}
          style={styles.photo}
          />
          <Text style={styles.account}>ana_d_armas</Text>
        </View>
        <Text style={styles.content}>Thank you for everything</Text>
        <View style={{borderWidth:0.2,borderColor:"#D2B48C",marginTop:20}}></View>
      </View>
      <View>
        <Image
        source={{uri:"https://cdn5.vectorstock.com/i/1000x1000/91/99/plus-sign-icon-positive-symbol-vector-2849199.jpg"}}
        style={styles.write}
        />
      </View>
    </View>
  );
}

export default Direct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchcontainer:{
    flexDirection:"row",
    width:377,
    height:35,
    marginTop:15,
    borderRadius:10,
    borderColor:"#D3D3D3",
    borderWidth:1,
    marginLeft:18,
    backgroundColor:"#F5F5F5",
  },
  search:{
    fontSize:15,
    marginTop:5,
    marginLeft:13,
    
  },
  photo:{
    width:35,
    height:35,
    borderColor:"white",
    borderRadius:50,
    marginLeft:20,
    marginTop:20,
  },
  account:{
    fontSize:15,
    fontWeight:"bold",
    marginTop:18,
    marginLeft:15,
  },
  content:{
    marginLeft:70,
    marginTop:-10,
  },
  write:{
    width:60,
    height:60,
    borderRadius:50,
    marginTop:315,
    marginLeft:340,
  },
});
