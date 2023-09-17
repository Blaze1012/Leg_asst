import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Fundamental Rights of the Indian Citizen</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Right to Equality'
              label='Article 14-18 (Section-3)'
              path='../right to equality.pdf'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Right To Freedom'
              label='Article 19-22 (Section-3)'
              path='../right to freedom.pdf'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Right Against Exploitation'
              label='Article 23-24'
              path='../right against exploitation.pdf'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Right To Freedom of Religion'
              label='Article 25-28'
              path='../right to freedom of religion.pdf'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Right to Constitutional Remedies and Cultural and Educational Rights'
              label='Article 29-35'
              path='../cultural and educational right and right to constitutional remedies.pdf'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;