import logo from './logo.svg';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import './App.css';

function App() {
  return (
<div className="page-wrapper">
      <Header />
          <>
            <div className="highlights-menu">
              <div className="highlights-menu-row row-span-3">
                {/* <TacoComponent name="Base">
                  {recipe.bases.map((b) => (
                    <MenuItemLink
                      key={b.url}
                      url={b.url}
                      name={b.name}
                      description={truncate(b.recipe_text, 150)}
                      tags={b.tags}
                    />
                  ))}
                </TacoComponent> */}
              </div>
            </div>
          </>

      <div style={{ marginTop: `7.5rem` }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
