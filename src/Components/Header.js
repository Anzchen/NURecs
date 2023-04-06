import "./Header.css";
import res1 from "../images/res1.jpeg";
import res2 from "../images/res2.jpeg";
import res3 from "../images/res3.jpeg";

export function Header() {
  return (
    <div>
      <header className="header">
        <p className="sub-headline">
          <b></b>
        </p>

        <div className="img-container">
          <img
            src={res3}
            style={{ width: 480, height: 400, objectFit: 'scale-down' }}
            alt="Image of Boston"
          />

          <img
            src={res1}
            style={{ width: 480, height: 400, objectFit: 'scale-down' }}
            alt="Image of Boston"
          />

          <img
            src={res2}
            style={{ width: 480, height: 400, objectFit: 'scale-down' }}
            alt="Image of Boston"
          />
        </div>

      </header>
    </div>
  );
}
