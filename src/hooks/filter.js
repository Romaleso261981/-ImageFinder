import { useState } from 'react';

import { useDebounce } from './debounce';

export function useFilter(items, filterProp) {
  const [enteredSearchValue, setEnteredSearchValue] = useState('');
  console.log(filterProp);
  const activeSearchValue = useDebounce(enteredSearchValue, 300);
  console.log(activeSearchValue);

  const availableItems = activeSearchValue
    ? items.filter(item => item.name.toLowerCase().includes(enteredSearchValue))
    : items;

  return {
    enteredSearchValue,
    setEnteredSearchValue,
    availableItems,
  };
}
