import { Button, Text, View, StyleSheet } from 'react-native';

export default function GoalItem({ text, goalId, deleteGoal }) {
  return (
    <View style={styles.goals}>
      
      <Text style={styles.goalText}>{text}</Text>
      <Button onPress={() => deleteGoal(goalId)} color="#E53D3DDA" title='Delete' />
    </View>
  );
}

const styles = StyleSheet.create({
  goals: {
    borderWidth: 5,
    borderColor: "#3F3C3CFF",
    paddingVertical: 15,
    paddingLeft: 15,
    marginTop: 15,
    backgroundColor: "#7C7C7C71",
    color: "#fff",
    flexDirection: "row",
    alignItems: "center"
  },
  goalText: {
    width: 225,
    paddingRight: 10,
    color: "#fff",
    fontSize: 16
  }
});

