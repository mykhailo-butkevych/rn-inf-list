import {LETTER_AND_SPACE_REGEX} from 'constants/regexes';
import {useDebounce} from 'hooks/use-debounce';
import {useState, useEffect, useCallback} from 'react';

type UseSearchInputProps = {
  onSearch: (query: string) => void;
  debounceTime?: number;
  defaultValue?: string;
};

export const useSearchInput = ({
  onSearch,
  debounceTime = 500,
  defaultValue = '',
}: UseSearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);

  const handleSearch = useDebounce((value: string) => {
    if (isValid) {
      onSearch(value);
    }
  }, debounceTime);

  const validateInput = useCallback((value: string) => {
    const isValidInput = LETTER_AND_SPACE_REGEX.test(value);
    setIsValid(isValidInput);
  }, []);

  const handleChange = useCallback(
    (value: string) => {
      setSearchTerm(value);
      validateInput(value);
    },
    [validateInput],
  );

  useEffect(() => {
    if (isValid) {
      handleSearch(searchTerm);
    }
  }, [searchTerm, isValid, handleSearch]);

  return {
    searchTerm,
    isValid,
    handleChange,
  };
};
