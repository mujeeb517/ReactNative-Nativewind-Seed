import { Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import "./global.css"


export default function App() {
  return (
    <SafeAreaView className="flex items-center justify-center m-4 p-4">
      <Text className="text-blue-500 text-xl font-bold">Hello from NativeWind!</Text>
      <Text className="text-red-500 text-3xl font-bold">Test</Text>
    </SafeAreaView>
  );
}
