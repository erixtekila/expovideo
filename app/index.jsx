import { StyleSheet, View, Button, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default ()=>
{
  return (
    <View>
        <Link href="/video">Go to video</Link>
    </View>
  );
};