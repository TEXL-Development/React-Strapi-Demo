// App.js
import TextFetcher from './components/TextFetcher';

const App = () => {
  return (
    <div className="App">
      <h1>Strapi Text Fetcher</h1>
      <TextFetcher serverEndPoint='http://35.202.129.105:1337/api/heading' dataAttribute='Heading' />
    </div>
  );
};

export default App;
