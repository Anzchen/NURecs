import "./Header.css";
import res1 from "../images/res1.jpeg";
import res2 from "../images/res2.jpeg";
import res3 from "../images/res3.jpeg";
import Fade from "react-reveal/Fade";

export function Header() {
  return (
    <div>
      <header className="header">

        <div className='text-image-pair'>
          <div className="img-container">
            <Fade left duration={3000}>
              <img
                src={res3}
                style={{ width: 480, height: 400, objectFit: 'scale-down' }}
                alt="Image of Boston"
              />
            </Fade>

            <div className='text'>
              <p>Welcome to NURecs! If you’re a new admit to Northeastern University and you’ve never been in Boston, then this is the place for you!
                Even if you know the ins and outs of Boston, explore our page for other great restaurants to eat here!
                We understand that moving to a new city can be overwhelming, especially when it comes to finding great places to eat.
                That’s why we’re here to help!</p>
            </div>
          </div>

          <div className='text-image-pair'>
            <div className='text'>
              <p>Our website features a curated list of restaurants that we have personally tried and tested,
                so you can be sure that you’re getting honest and reliable recommendations.
                You can search for restaurants by location, cuisine, and price range,
                making it easy to find the perfect spot for your next meal.</p>
            </div>

            <Fade right duration={3000}>
              <img
                src={res1}
                style={{ width: 480, height: 400, objectFit: 'scale-down' }}
                alt="Image of Boston"
              />
            </Fade>
          </div>

          <div className='text-image-pair'>
            <Fade left duration={3000}>
              <img
                src={res2}
                style={{ width: 480, height: 400, objectFit: 'scale-down' }}
                alt="Image of Boston"
              />
            </Fade>

            <div className='text'>
              <p>Whether you’re looking for a casual spot to grab a quick bite between classes or
                a fancy restaurant to celebrate a special occasion, we’ve got you covered.
                Explore our website to discover the best restaurants in Boston for Northeastern students,
                and get ready to indulge in some of the city’s most delicious cuisine!</p>
            </div>
          </div>

        </div>

      </header>
    </div>
  );
}
