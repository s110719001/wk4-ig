import React from "react";
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity} from "react-native";
import Numbers from "./Numbers.json"

const Home = ({navigation}) => {
    return(
        <View style={styles.container1}>
            <View style={{flexDirection:"row",width:375.2,height:74}}>
                <Image 
                source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"}}
                style={styles.title}
                />
                <TouchableOpacity onPress={() => navigation.navigate('Direct')}>
                    <Image
                    source={{uri:"https://icons-for-free.com/iconfiles/png/512/interface+multimedia+paper+airplane+plane+send+icon-1320185664126916587.png"}}
                    style={styles.drawersend}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={styles.container}>
                <FlatList
                    data={Numbers}
                    renderItem={({ item }) => 
                    <Detail
                        person={item}
                    />}
                    keyExtractor={item => item.title}
                />
            </View>
            
            <View style={{flexDirection:"row",height:50}}>
                <Image
                source={{uri:"https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-512.png"}}
                style={styles.home}
                />
                <Image
                source={{uri:"https://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/search-icon.png"}}
                style={styles.search}
                />
                <Image
                source={{uri:"https://www.festivalclaca.cat/imgfv/m/444-4449358_camera-icon-png-white-camera-icon-type-svg.png"}}
                style={styles.camera}
                />
                <Image
                source={{uri:"https://www.shareicon.net/data/512x512/2016/06/04/775671_favorite_512x512.png"}}
                style={styles.heart}
                />
                <Image
                source={{uri:"https://lh3.googleusercontent.com/proxy/KWaVpH2i6KvR_k-9OL7DK-V6VnvFjAGiUIfjaMK3WpoWv0Q7BTq5fssjBvyUwOH6NhXbQ4-kUQV6wCDCgHCtYWmpNnJGM9_1bDaly_8kginlWesj6GofMgZ3GM8"}}
                style={styles.self}
                />
            </View>
        </View>
    );
};

export default Home;

const Detail = ({person}) => {
    return(
        <View>
            <View style={styles.account}>
                <View style={styles.circle}>
                <Image
                source={{uri:person.photo}}
                style={styles.photo}
                />
                </View>
                <Text style={styles.name}>{person.name}</Text>
                <Image
                source={{uri:person.button1}}
                style={styles.button1}
                />
            </View>
            <Image
            source={{uri:person.image}}
            style={styles.image}
            />
            <View style={styles.buttons}>
                <Image
                source={{uri:person.favorite}}
                style={styles.favorite}
                />
                <Image
                source={{uri:person.common}}
                style={styles.common}
                />
                <Image
                source={{uri:person.send}}
                style={styles.send}
                />
                <Image
                source={{uri:person.save}}
                style={styles.save}
                />
            </View>
            <Text style={{marginLeft:12,marginTop:3,fontWeight:"bold"}}>159,845 個讚</Text>
            <View style={{flexDirection:"row",marginLeft:12,marginTop:3,}}>
                <Text style={{fontWeight:"bold"}}>{person.name}</Text>
                <Text style={styles.content}>{person.content}</Text>
            </View>
            <Text style={{marginLeft:12,marginTop:3}}>查看全部13則留言</Text>
            <View style={{flexDirection:"row",marginLeft:13,marginTop:3}}>
                <Text style={styles.person}>{person.person}</Text>
                <Text style={styles.commons}>{person.commons}</Text>
            </View>
            <View style={{flexDirection:"row",marginLeft:13,marginTop:3}}>
                <Text style={{fontWeight:"bold"}}>xh_nnh</Text>
                <Text>OMG!!</Text>
            </View>
            <Text style={styles.hint}>{person.hint}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
    },
    container: {
        flex: 1,
        backgroundColor: '#FFE6D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
    },
    title:{
        width:110,
        height:40,
        marginTop:28,
        marginLeft:-5,
    },
    drawersend:{
        width:35,
        height:35,
        marginTop:28,
        marginLeft:239.5,
    },
    account:{
        flexDirection:"row",
        
    },
    circle:{
        width:39,
        height:39,
        backgroundColor:"#df4e5d",
        borderRadius:50,
        paddingLeft:2,
        paddingTop:2,
        marginLeft:11,
        marginTop:6,
    },
    photo1:{
        width:50,
        height:50,
        borderColor:"white",
        borderRadius:50,
        borderWidth:2,
    },
    photo:{
        width:35,
        height:35,
        borderColor:"white",
        borderRadius:50,
        borderWidth:2,
    },
    name:{
        fontSize:15,
        fontWeight:"bold",
        marginTop:12,
        marginLeft:5,
    },
    button1:{
        width:25,
        height:25,
        marginTop:11,
        position:"absolute",
        right:12,
    },
    image:{
        width:385,
        height:375.2,
        marginLeft:11,
        marginTop:6,
    },
    buttons:{
        flexDirection:"row",
        marginTop:12,
        marginLeft:12,
    },
    favorite:{
        width:28,
        height:28,
    },
    common:{
        width:27.5,
        height:27.5,
        marginLeft:12,
    },
    send:{
        width:34,
        height:32,
        marginTop:-2,
        marginLeft:9,
    },
    save:{
        width:30,
        height:29,
        marginTop:-1,
        marginLeft:247,
    },
    content:{
        marginLeft:12,
    },
    person:{
        fontWeight:"bold",
    },
    commons:{

    },
    hint:{
        marginLeft:12.5,
        marginBottom:20,
        fontSize:11.5,
        marginTop:2,
    },
    home:{
        width:40,
        height:40,
        marginTop:5,
        marginLeft:5,
    },
    search:{
        width:33,
        height:33,
        marginLeft:52,
        marginTop:8,
    },
    camera:{
        width:32,
        height:32,
        marginLeft:52,
        marginTop:8,
    },
    heart:{
        width:30,
        height:30,
        marginLeft:52,
        marginTop:8,
    },
    self:{
        width:25,
        height:28,
        marginLeft:52,
        marginTop:10,
        marginRight:10,
    }
  });