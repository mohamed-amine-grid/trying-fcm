import { Text, View } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';
import { NativeWindStyleSheet } from 'nativewind';
export default function App() {
  return (
  <ChatScreen />
  );
}
NativeWindStyleSheet.setOutput({
  default: "native",
});