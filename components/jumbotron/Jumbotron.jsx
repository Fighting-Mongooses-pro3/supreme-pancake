import React from 'react'
import { logo } from '../../public/images/houseruled-final.png'


export const Jumbotron = () => {
     const greeting = 'Welcome back ';

  return (
    <div>
      <div className="logo">
          <image src={logo} alt='house ruled logo with picture of a bookshelf on a cellphone screen' />
      </div>
      <Welcome text={greeting} />
    </div>
  );
};

const Welcome = (props) => {
  return <h1>{props.text}</h1>;
};

