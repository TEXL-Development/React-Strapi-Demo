// TextFetcher.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const TextFetcher = ({ serverEndPoint }) => {
  const [textValue, setTextValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(serverEndPoint, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
          }
        });
        console.log(response.data.data[0].attributes.ListItem);
        setTextValue(response.data.data); // Assuming your API returns an object with a 'text' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [serverEndPoint]);

  try {
    return (
      <>
        {textValue.map((item, index) => (
          <div key={index}>{item.id}. {item.attributes.ListItem}</div>
        ))}
      </>
    );
  } catch (error) {
    console.error('Error rendering data:', error);
    return (
      <>
      </>
    ); // or any fallback UI you want to display in case of error
  }
};

export default TextFetcher;
