// src/hooks/useScrollFadeIn.js
import { useState, useEffect, useRef } from 'react';

export default function useScrollFadeIn() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      }
    );
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  return [domRef, isVisible];
}
