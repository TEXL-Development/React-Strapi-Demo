import { useState, useEffect } from 'react';
import axios from 'axios';

const ZonePage = ({ serverEndPoint }) => {
    const [heading , setHeading] = useState('');
    const [videoSrc, setVideoSrc] = useState('');
    const [backgroundImgSrc, setBackgroundImgSrc] = useState('');
    const [paragraph, setParagraph] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(serverEndPoint, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
          }
        });
        console.log(response.data);
        setHeading(response.data.data.attributes.Heading);
        setVideoSrc(response.data.data.attributes.Video.data.attributes.url); 
        setBackgroundImgSrc(response.data.data.attributes.BackgroundImage.data.attributes.formats.small.url);
        setParagraph(response.data.data.attributes.Paragraph);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [serverEndPoint]);

return (
  <div className="body-wrapper" style={{backgroundImage: `url('${import.meta.env.VITE_SERVER_URL}${backgroundImgSrc}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <header>
      <div className="container">
        <h1>
          {heading}
        </h1>
        <video src={`${import.meta.env.VITE_SERVER_URL}${videoSrc}`} autoPlay loop muted style={{width: '100%'}} />
        <h2>{paragraph}</h2>
      </div>
    </header>
  </div>
);
};

export default ZonePage;
