import "./Header.css";
import res1 from "../images/res1.jpeg";
import res2 from "../images/res2.jpeg";
import res3 from "../images/res3.jpeg";
import Fade from "react-reveal/Fade";
import { HStack } from "@chakra-ui/react";

export function Header() {
  return (
    <div>
      <h1 className="title"> NURecs </h1>
      <header className="header">
        <HStack className="left">
          <Fade left duration={2500}>
            <img
              src={res3}
              style={{ width: 480, height: 400, objectFit: 'scale-down' }}
              alt="Boston"
            />
          </Fade>

          <Fade right duration={2500}>
            <p>If you’re a new admit to Northeastern University and you’ve never been in Boston, then this is the place for you!
              Even if you know the ins and outs of Boston, explore our page for other great restaurants to eat here!
              We understand that moving to a new city can be overwhelming, especially when it comes to finding great places to eat.
              That’s why we’re here to help!</p>
          </Fade>
        </HStack>

        <HStack className="right">
          <Fade left duration={2500}>
            <p>Our website features a curated list of restaurants that we have personally tried and tested,
              so you can be sure that you’re getting honest and reliable recommendations.
              You can search for restaurants by location, cuisine, and price range,
              making it easy to find the perfect spot for your next meal.</p>
          </Fade>

          <Fade right duration={2500}>
            <img
              src={res1}
              style={{ width: 480, height: 400, objectFit: 'scale-down' }}
              alt="Boston"
            />
          </Fade>
        </HStack>

        <HStack className="left">
          <Fade left duration={2500}>
            <img
              src={res2}
              style={{ width: 480, height: 400, objectFit: 'scale-down' }}
              alt="Boston"
            />
          </Fade>

          <Fade right duration={2500}>
            <p>Whether you’re looking for a casual spot to grab a quick bite between classes or
              a fancy restaurant to celebrate a special occasion, we’ve got you covered.
              Explore our website to discover the best restaurants in Boston for Northeastern students,
              and get ready to indulge in some of the city’s most delicious cuisine!</p>
          </Fade>
        </HStack>
      </header >
    </div >
  );
}
