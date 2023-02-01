import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import ReplyBar from '../components/ReplyBar';


type ChatScreenProps = {

}

const ChatScreen = ({}: ChatScreenProps) => {
    const [text, setText] = useState('')
    return (
        <View > hello
            <ReplyBar text={text} setText={setText} />
        </View>
    )
}

export default ChatScreen



