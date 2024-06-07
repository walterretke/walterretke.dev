import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeComponent = () => {
  return (
    <div>
      <h1>
        <Typewriter
          words={['Desenvolvedor Fullstack', 'Laravel, Next', 'Vue, React']}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypeComponent;
