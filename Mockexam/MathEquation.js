import React, { useEffect } from 'react';

const MathEquation = ({ equation }) => {
  useEffect(() => {
    // Tell MathJax to render the new equation
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [equation]);

  return <div>{equation}</div>;
};

export default MathEquation; 