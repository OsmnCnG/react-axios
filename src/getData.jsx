import axios from 'axios';

async function getData(user_id) {
  try {
    const postsResponse = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    const userResponse = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);

    //merge
    return {
      posts: postsResponse.data,
      user: userResponse.data
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default getData;

