import React, { useEffect, useState } from 'react';
import getData from './getData.jsx';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(2);

        
        setData(result);
      } catch (error) {
        console.error('Error fetching data in App:', error);
      }
    };

    fetchData();
  }, []); 

  if (!data) {
    return <div>Loading...</div>; 
  }

  // console.log('Posts:', data.posts);
  // console.log('User:', data.user);


  (async ()=> {
    console.log(await getData(1), 'getData')
  })();

  return (
    <div>
      <h1>{data.user.name}'s Posts</h1>
      <ul>
        {data.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
