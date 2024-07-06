import {StyledText} from 'components/styled-text';
import React from 'react';
import {View, ViewStyle, TextStyle, StyleSheet, Dimensions} from 'react-native';

type Props = {
  message: string;
};

export const EmptyList = ({message}: Props) => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.text} bold>
        {message}
      </StyledText>
    </View>
  );
};

type Style = {
  container: ViewStyle;
  text: TextStyle;
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
  container: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});
