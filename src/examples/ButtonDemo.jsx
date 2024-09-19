import React from 'react';
import Button from '../webcomponents/Button'; // Adjust this path based on your actual structure
import { FaArrowRight } from 'react-icons/fa';

const ButtonDemo = () => {
  return (
    <div className="p-4 flex flex-wrap justify-around flex-col gap-5">
      <Button onClick={() => console.log('Clicked!')}>
        Click me
      </Button>

      <Button variant="secondary" size="large">
        Large Secondary Button
      </Button>

      <Button disabled>
        Disabled Button
      </Button>

      <Button loading>
        Loading...
      </Button>

      <Button icon={<FaArrowRight />} iconPosition="right">
        Next Step
      </Button>
      
      <Button className="bg-red-500 text-black hover:bg-green-700 focus:bg-purple-700">
        Click me!
      </Button>
    </div>
  );
};

export default ButtonDemo;