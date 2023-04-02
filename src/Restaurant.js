import React, { useState } from "react";
import { ListItem,  
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper, 
  Wrap, 
  WrapItem, 
  HStack, 
  Select,
  Tag, 
  List, 
  ChakraProvider} from '@chakra-ui/react';
import "./Restaurant.css";

const Restaurant = (props) => {
  const [showBox, setShowBox] = useState(false);
  const [longBox, setLongBox] = useState(false);
  const [pageNumber, setPageNumber] = useState('1');
  // const [sortOrder, setSortOrder] = useState=('');
  const [isAsc, setIsAsc] = useState(true);
  // const [restaurantInfo, setRestaurantInfo] = useState([]);
  const ITEMS_PER_PAGE = 10;
  let unsortedRestaurants = props.data;

  const handleClick = () => {
    setShowBox(!showBox);
  };

  const handleToggleBoxLength = () => {
    setLongBox(!longBox);
  };

  // const sortRestaurants = (
  //   (unsortedRestaurants = props) => {
  //     // eslint-disable-next-line default-case
  //     switch (isAsc) {
  //       case true:
  //         if (sortOrder === 'id') {
  //           setRestaurantInfo(
  //             unsortedRestaurants.sort((a, b) => a - b),
  //           );
  //           console.log('asc sorted by id');
  //         }
  //         break;
  //       case false:
  //         if (sortOrder === 'id') {
  //           setRestaurantInfo(
  //             unsortedRestaurants.sort((a, b) => b.student.studentID - a.student.studentID),
  //           );
  //           console.log('desc sorted by id');
  //         }
  //         break;
  //     }
  //   },
  //   [sortOrder, isAsc]);
  
  const startIndex = 0 + ITEMS_PER_PAGE * (parseInt(pageNumber) - 1);
  const endIndex = ITEMS_PER_PAGE + ITEMS_PER_PAGE * (parseInt(pageNumber) - 1);
  
  console.log(unsortedRestaurants);

  const handlePageNumber = (newValue) => {
    const parsed = parseInt(newValue);
    if (!parsed || parsed < 1) {
      setPageNumber('');
    } else {
      setPageNumber(newValue);
    }
   };

  function getPrice(price) {
    switch(price) {
      case 1:
        return '$'
      case 2:
        return '$$'
      case 3:
        return '$$$'
      default:
        return 'unknown price'
    }
  }

  const restaurantView = unsortedRestaurants.slice(startIndex, endIndex).map(eachRestaurant => (
      <ListItem key={eachRestaurant.id}>
        <HStack spacing='12px'>
          <div
            className={`info-box ${longBox ? "long-box" : "short-box"}`}
            onClick={handleClick}
          >
            <h2>{eachRestaurant.name}</h2>
            {longBox ? (
              <>
                <p>
                  Address: {eachRestaurant.address}
                </p>
                <p>Price: {getPrice(eachRestaurant.price)} </p>
                <p>Commute from NEU Campus: {eachRestaurant.distance} miles</p>
              </>
            ) : (
              <p>Type of Cuisine: {eachRestaurant.cuisine}</p>
            )}
            <button onClick={handleToggleBoxLength}>
              {longBox ? "Hide Info" : "Show Info"}
            </button>
          </div>
        </HStack>
      </ListItem>
  ));

  return (
    <div className="container">
    <ChakraProvider>
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
        <br />
          <Tag>Page #</Tag>
          <NumberInput value={pageNumber} onChange={value => handlePageNumber(value)} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        <br />
        <Wrap className={`restaurantView`}>
            <List spacing={6}>{restaurantView}</List>
        </Wrap>
    </ChakraProvider>
    </div>
  );
}

export default Restaurant;
