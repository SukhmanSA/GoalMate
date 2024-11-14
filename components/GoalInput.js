import { TextInput, Button,StyleSheet, Modal, View, Image, Text } from 'react-native';

export default function GoalInput({addGoals,handleInput,goals,visibilty,setModalVisibilty}){
    return(
        <>
        <Modal visible={visibilty} animationType="slide">
        <View style={styles.inputContainer}> 
        <Text style={styles.heading}>GoalMate</Text>
        <Image style={styles.img} source={require("../assets/image/goal.png")}/>
        <TextInput
          style={styles.textInput}
          placeholder=" Add your goal!"
          onChangeText={handleInput}
          value={goals}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button color="#928D8DFF" title="Add Goal" onPress={addGoals} /> 
          </View>
          <View style={styles.button}>        
          <Button color="#928D8DFF" title='cancel' onPress={setModalVisibilty}/>
          </View> 
        </View>
        </View>
        </Modal>
        </>
    )
}

const styles =  StyleSheet.create({
    
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 2,
    marginTop:18,
    backgroundColor:"#ADADADDE"
  },
  
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#494949FF"
  },

  buttonContainer:{
    display:"flex",
    flexDirection:"row"
  },

  button:{
    width:100,
    marginHorizontal:8,
    marginTop:15
  },

  img:{
      width:190,
      height:190
  },

  heading:{
    fontSize:50,
    color:"#FFFFFFFF",
    marginTop:-10,
    paddingBottom:40
  }
})