import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import json from './tp.json';

function data() {
  return json.map((item,key) => {
    return <View>
      <Text>{item.title}</Text>
    </View>
  })
}
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/*this is how to set up a .map {json.map((data) => all func go in this section)} */}
        {json.map((data,key) =>
          <View key={key} style={styles.box}>
            <Image source={{ uri: (data.img) }} style={{ width: 200, height: '100%' }} />
            <View style={styles.doc}>
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
    padding: 5,
    justifyContent: 'space-between',
    marginTop: 40,
    
  },
  box: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'oldlace',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  pic: {
    flex: 1,
  },
  doc: {
    padding: 6,
    flex: 4,
    justifyContent: 'center',
  },
  titles: {
    fontWeight: 'bold',

  },
});
