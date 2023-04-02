import React, { useState } from "react";
import { Select } from '@chakra-ui/react';
import "./Restaurant.css";

const Restaurant = () => {
  const [showBox, setShowBox] = useState(false);
  const [longBox, setLongBox] = useState(false);
  const [pageNumber, setPageNumber] = useState('1');
  const [sortOrder, setSortOrder] = useState=('');
  const [isAsc, setIsAsc] = useState(true);
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const ITEMS_PER_PAGE = 20;

  const handleClick = () => {
    setShowBox(!showBox);
  };

  const handleToggleBoxLength = () => {
    setLongBox(!longBox);
  };

  const sortRestaurants = (
    (unsortedRestaurants) => {
      // eslint-disable-next-line default-case
      switch (isAsc) {
        case true:
          if (sortOrder === 'price') {
            setRestaurantInfo(
              unsortedRestaurants.sort((a, b) => a.student.studentID - b.student.studentID),
            );
            console.log('sorted by price');
          }
          break;
        case false:
          if (sortOrder === 'id') {
            setRestaurantInfo(
              unsortedRestaurants.sort((a, b) => b.student.studentID - a.student.studentID),
            );
            console.log('sorted by price');
          }
          break;
      }
    },
    [sortOrder, isAsc]);
  
    const startIndex = 0 + ITEMS_PER_PAGE * (parseInt(pageNumber) - 1);
    const endIndex = ITEMS_PER_PAGE + ITEMS_PER_PAGE * (parseInt(pageNumber) - 1);
  
  const handlePageNumber = (newValue) => {
    const parsed = parseInt(newValue);
    if (!parsed || parsed < 1) {
      setPageNumber('');
    } else {
      setPageNumber(newValue);
    }
   };

  return (
    <div className="container">
      <div
        className={`info-box ${longBox ? "long-box" : "short-box"}`}
        onClick={handleClick}
      >
      <Select
        onChange={option => {
          console.log(`Selected sort order ${option.target.value}`);
            if (option.target.value === 'asc') {
              setIsAsc(true);
              } else {
              setIsAsc(false);
              }
            }}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
        </Select>
        <h2>Restaurant Name</h2>
        {longBox ? (
          <>
            <p>
              Address: 123 Street, Boston MA
            </p>
            <p>Price: $ - $$$</p>
            <p>Commute from NEU Campus: 10 Minutes</p>
            <p>Image</p>
          </>
        ) : (
          <p>Type of Cuisine</p>
        )}
        <button onClick={handleToggleBoxLength}>
          {longBox ? "Hide Info" : "Show Info"}
        </button>
      </div>
    </div>
  );
}

export default Restaurant;
