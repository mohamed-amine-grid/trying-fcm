import React from "react";
import { TextInput, View } from "react-native";

type ReplyBarProps = {
  text: string;
  setText: (value: string) => void;
};

const ReplyBar = ({ text, setText }: ReplyBarProps) => {
  return (
      <TextInput
        className="bg-red-400"
        placeholder="Enter message"
        value={text}
        onChangeText={setText}
      />
  );
};

export default ReplyBar;

//   width: '75%',
//     height: 40,
//     margin: 0,
//     padding: 12,
//     paddingTop: 0,
//     paddingBottom: 0,
//     fontSize: 17,
//     letterSpacing: 0,
//     color: '#ffa600',
//     fontWeight: '600',
//     borderRadius: 500,
//     alignItems: 'center',
//     backgroundColor: '#282a2d',
