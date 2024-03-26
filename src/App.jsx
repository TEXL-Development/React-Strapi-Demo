// App.js
import TextFetcher from './components/TextFetcher';
import ImageFetcher from './components/ImageFetcher';
import './App.css';

const App = () => {
  return (

      
    

<div className="body-wrapper">
  <header>
    <div className="container">
      <h1>
      <TextFetcher serverEndPoint='http://35.202.129.105:1337/api/heading' dataAttribute='Heading' />
      </h1>
     
    </div>
  </header>

  <section className="container parallax">
    <ImageFetcher serverEndPoint='http://35.202.129.105:1337/api/image1?populate=*' dataAttribute='Image1' order='background' />
    <ImageFetcher serverEndPoint='http://35.202.129.105:1337/api/image2?populate=*' dataAttribute='Image2' order='foreground' />

    {/* <div className="foreground" style={{backgroundImage: "url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920')"}}></div> */}
    <h2>Keep Scrolling</h2>
  </section>

  <section className="content-wrapper">
    <div className="container">
     <p>
      <TextFetcher serverEndPoint='http://35.202.129.105:1337/api/paragraph' dataAttribute='Paragraph' />
     </p>
    </div>
  </section>

  <section className="container parallax">
  <ImageFetcher serverEndPoint='http://35.202.129.105:1337/api/image3?populate=*' dataAttribute='Image3' order='background' />
    <ImageFetcher serverEndPoint='http://35.202.129.105:1337/api/image4?populate=*' dataAttribute='Image4' order='foreground' />
    <h2>The End!</h2>
  </section>
</div>
   
  );
};

export default App;
