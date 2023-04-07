import React, { useEffect } from "react";
import { ListItem,  
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper, 
  Wrap, 
  HStack, 
  Select,
  Tag, 
  List, 
  ChakraProvider,
  VStack
} from '@chakra-ui/react';
import "./Restaurant.css";
import boston from './images/boston.jpeg';

const Restaurant = (props) => {
  const [showBox, setShowBox] = React.useState(false);
  const [longBox, setLongBox] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState('1');
  const [sortOrder, setSortOrder] = React.useState('');
  const [isAsc, setIsAsc] = React.useState(true);

  const [unsortedRestaurants, setUnsortedRestaurants] = React.useState([]);
  // console.log(unsortedRestaurants);

  const ITEMS_PER_PAGE = 10;
  // let unsortedRestaurants = [];
  // unsortedRestaurants = props.data;

  const handleClick = () => {
    setShowBox(!showBox);
  };

  const handleToggleBoxLength = () => {
    setLongBox(!longBox);
  };

  const startIndex = 0 + ITEMS_PER_PAGE * (parseInt(pageNumber) - 1);
  const endIndex = ITEMS_PER_PAGE + ITEMS_PER_PAGE * (parseInt(pageNumber) - 1);
  
  const handlePageNumber = (newValue) => {
    let parsed = parseInt(newValue);
    if (parsed && parsed >= 1 && parsed <= Math.ceil(unsortedRestaurants.length / ITEMS_PER_PAGE)) {
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

  async function sortRestaurants() {
    let copy = [...unsortedRestaurants];
    // eslint-disable-next-line default-case
    switch (isAsc) {
      case true:
        if (sortOrder === 'id') {
          for (let i = 0; i < copy.length - 1; i++) {
            for (let j = 0; j < copy.length - i - 1; j++) {
              if (copy[j].id > copy[j + 1].id) {
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
              }
            }
          }
          console.log('asc sorted by id');
        }
        else if (sortOrder === 'distance') {
          for (let i = 0; i < copy.length - 1; i++) {
            for (let j = 0; j < copy.length - i - 1; j++) {
              if (copy[j].distance > copy[j + 1].distance) {
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
              }
            }
          }
          console.log('asc sorted by distance');
        }
        else if (sortOrder === 'price') {
          for (let i = 0; i < copy.length - 1; i++) {
            for (let j = 0; j < copy.length - i - 1; j++) {
              if (copy[j].price > copy[j + 1].price) {
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
              }
            }
          }
          console.log('asc sorted by price');
        }
        break;
      case false:
        if (sortOrder === 'id') {
          for (let i = 0; i < copy.length - 1; i++) {
            for (let j = 0; j < copy.length - i - 1; j++) {
              if (copy[j].id < copy[j + 1].id) {
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
              }
            }
          }
          console.log('desc sorted by id');
        }
        else if (sortOrder === 'distance') {
          for (let i = 0; i < copy.length - 1; i++) {
            for (let j = 0; j < copy.length - i - 1; j++) {
              if (copy[j].distance < copy[j + 1].distance) {
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
              }
            }
          }
          console.log('desc sorted by distance');
        }
        else if (sortOrder === 'price') {
          for (let i = 0; i < copy.length - 1; i++) {
            for (let j = 0; j < copy.length - i - 1; j++) {
              if (copy[j].price < copy[j + 1].price) {
                let temp = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = temp;
              }
            }
          }
          console.log('desc sorted by price');
        }
        break;
    }
    setUnsortedRestaurants(copy);
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
                <VStack>
                  <p>Address: {eachRestaurant.address}</p>
                  <p>Price: {getPrice(eachRestaurant.price)} </p>
                  <p>Commute from NEU Campus: {eachRestaurant.distance} miles</p>
                </VStack>
              </>
            ) : (
              <p>Type of Cuisine: {eachRestaurant.cuisine}</p>
            )}
            <button onClick={handleToggleBoxLength}>
              {longBox ? "Hide Info" : "Show Info"}
            </button>
          </div>
          <img className='restaurantImage' 
                    src={boston}
                    alt="Boston"
                    />
        </HStack>
      </ListItem>
  ));

  useEffect(() => 
  {setUnsortedRestaurants(props.data);
  console.log(props.data);
  }, [props.data]);
  

  useEffect(() => {
    sortRestaurants();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAsc, sortOrder]);

  return (
    <div className="container">
      <ChakraProvider>
        <VStack className="filterbox">
        <div>
          <Tag>Sort by</Tag>
          <br />
          <Select
            placeholder='Select a sort order'
            onChange={option => {
              console.log(`Selected sort order ${option.target.value}`);
              setSortOrder(option.target.value);
            }}>
            <option value='price'>Price Range</option>
            <option value='distance'>Distance</option>
            <option value='id'>Restaurant id</option>
          </Select>
          <br />
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
        </div>
        <br />
          <VStack>
          <Tag>Page #</Tag>
            <NumberInput value={pageNumber} onChange={value => handlePageNumber(value)} min={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>
        <br />
      </VStack>
        <Wrap className={`restaurantView`}>
            <List spacing={6}>{restaurantView}</List>
        </Wrap>
      </ChakraProvider>
    </div>
  );
}

export default Restaurant;
