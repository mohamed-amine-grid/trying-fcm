import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

export default function App() {
  return (
   <Text className='bg-red-700'>Hello</Text>
  );
}

NativeWindStyleSheet.setOutput({
  default:'native'
})