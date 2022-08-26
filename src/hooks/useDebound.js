import React, { useEffect, useState, useRef } from "react";
export default function useDebound(inittialValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(inittialValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inittialValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, inittialValue]);

  return debounceValue;
}
