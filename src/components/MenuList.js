import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {foodItems.map((food, index) => (
        <MenuItem
          key={index}
          itemName={food.itemName}
          description={food.description}
          foodImage={food.foodImage}
          price={food.price}
          isFavorite={food.isFavorite}
        />
      ))}
    </div>
  );
}

export default MenuList;
