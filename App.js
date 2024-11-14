import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible,setModalVisibilty] = useState(false)

  function handleInput(enteredText) {
    setGoals(enteredText);
  }

  function addGoals() {
      setGoalList(prevGoalList => [
        ...prevGoalList, 
        { newGoal: goals, id: Math.random().toString() }
      ]);
      setGoals(""); 
      setModalVisibilty(false)
  } 

  function deleteGoal(id) {
    setGoalList(prevGoalList => prevGoalList.filter(goal => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
        <Button 
        title="Add New Goal" 
        onPress={()=> setModalVisibilty(true)}
        color="#29292AFF"
        />
          { modalIsVisible && <GoalInput setModalVisibilty={setModalVisibilty} handleInput={handleInput} addGoals={addGoals} goals={goals} visibilty={modalIsVisible}/>}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
            <GoalItem 
              text={itemData.item.newGoal} 
              goalId={itemData.item.id}  
              deleteGoal={deleteGoal}
            />
          )}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 18,
    backgroundColor:"#525359FF"
  },

  goalsContainer: {
    flex: 4
  }
});

