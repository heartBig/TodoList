/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#fff' : Colors.lighter,
  };

  const [content, setContent] = useState('');
  const [todoList, setTodoList] = useState<Array<{content: string; finish:Boolean}>>([
    {
      content: "学习",
      finish: false,
    },
    {
      content: "吃饭",
      finish: false,
    },
    {
      content: "睡觉",
      finish: false,
    },
  ]);

  const Add = () => {
    if (!content) return
    const list = [...todoList]
    list.unshift({
      content: content,
      finish: false,
    })
    setContent('')
    setTodoList([...list])
  }
  const handleDel = (index: any) => {
    let list = [...todoList]
    list.splice(index, 1)
    setTodoList([...list])
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.addHeader}>
        <TextInput placeholder='添加事项' value={content} style={styles.addInput} onChangeText={(e) => setContent(e)}/>
        <Button title="Add" onPress={Add}></Button>
      </View>
      <ScrollView style={styles.todoList}>
        {todoList.map((item, index) => {
          return (
            <View key={index} style={styles.todoLi}>
              <Text
                style={styles.sectionTitle}>
                {item.content}
              </Text>
              <TouchableOpacity onPress={() => handleDel(index)}>
                <View style={styles.delButton}>
                  <Text>X</Text>
                </View> 
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addHeader: {
    flexDirection: 'row',
    padding: 4,
  },
  addInput: {
    flex: 4,
    height: 36,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 6,
    borderRadius: 4,
    paddingLeft: 10,
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  todoLi: {
    flexDirection: 'row',
    fontSize: 24,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10,
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
  },
  todoTitle: {
    flex: 7,
  },
  delButton: {
    width: 12,
    height: 12,
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
