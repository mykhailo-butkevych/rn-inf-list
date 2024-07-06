import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {StyledText} from 'components/styled-text';
import {SIZES} from 'styles/sizes';
import {useSearchInput} from './hooks';

type Props = {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceTime?: number;
  defaultValue?: string;
};

const SearchInput = ({
  onSearch,
  placeholder = 'Search...',
  debounceTime = 500,
  defaultValue,
}: Props) => {
  const {searchTerm, isValid, handleChange} = useSearchInput({
    onSearch,
    debounceTime,
    defaultValue,
  });

  return (
    <View>
      <TextInput
        style={[styles.input, !isValid && styles.inputError]}
        value={searchTerm}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor="black"
      />
      {!isValid && (
        <StyledText style={styles.errorText}>
          Only letters and spaces are allowed
        </StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: SIZES.INPUT_HEIGHT,
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    borderRadius: SIZES.BORDER_RADIUS_REGULAR,
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default SearchInput;
