import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import json from './tp.json';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
{/*this is how to set up a .map {json.map((data) => all func go in this section)} */}
        {json.map((data) =>
          <View style={styles.box}>
            <Image source={{ uri: (data.img) }} style={{ width: 200, height: '100%' }} />
            <View style={styles.box2}>
              <Text style={styles.titles}>{data.title}</Text>
              <Text style={styles.document}>{data.desc}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    flex:4,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  pic: {
    flex: 1,
  },
  box2: {
    flex: 4,
  },
  titles: {
    justifyContent: 'center'
    
  },
});
