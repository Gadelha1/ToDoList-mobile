import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Pressable} from 'react-native'

export default function App(){
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () =>{
    setTasks([...tasks,{key: Math.random().toString(), value:task}]);
    setTask('');
  }

  const removeTask = (key) => {
    setTasks(tasks.filter(task => task.key !== key));
  };

  return(
    <View style={style.app}>
      <Text style={style.title}>Lista de Tarefas</Text>
      <View style={style.inputContainer}>
        <TextInput style={style.input} placeholder='Adicionar Tarefa'
          onChangeText={setTask}
          value={task}
        />
      </View>

      <Pressable style={style.btn}
        title="Adicionar" onPress={addTask}>
        <Text>Adicionar</Text>
      </Pressable>
      <View style={style.list}>
        <FlatList
          data={tasks}
          renderItem={({item})=>(
            <View style={style.taskItem}>
              <Text style={style.taskText}>{item.value}</Text>
              <Pressable style={style.removeBtn} onPress={() => removeTask(item.key)}>
                <Text style={style.removeBtnText}>×</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  app:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
    
  },

  title:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    
  },
  input:{
    borderWidth: 2,
    borderRadius: 5,
    height: 30,
    width: 300,
    textAlign: 'center',
    margin: 5,
    marginBottom: 5,
    backgroundColor: '#c1ccbbff',
  },
  inputContainer:{
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  btn:{
    borderRadius: 5,
    borderWidth: 2,
    height: 25,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#379f7a',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    justifyContent: 'center'
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginVertical: 2,
    backgroundColor: '#eaf7e1',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b3e099',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  removeBtn: {
    marginLeft: 10,
    backgroundColor: '#ffcccc',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff8888',
  },
  removeBtnText: {
    color: '#ff3333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
