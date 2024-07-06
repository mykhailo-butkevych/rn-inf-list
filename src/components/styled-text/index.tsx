import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  bold?: boolean;
};

export const StyledText = ({children, style, bold}: Props) => {
  return (
    <Text style={[styles.text, bold && styles.bold, style]}>{children}</Text>
  );
};

type Style = {
  text: TextStyle;
  bold: TextStyle;
};

const styles = StyleSheet.create<Style>({
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
});
