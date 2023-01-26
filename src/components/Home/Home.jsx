import { useParams } from 'react-router-dom';
import Browse from '../Browse/Browse';
import Links from '../Links/Links';
import styles from './Home.css';
import Read from '../Read/Read';
import Games from '../Games/Games';
// import { useEffect } from 'react';

export default function Home() {
  const params = useParams();

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch('blogs-backend')
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // if the blog exist set the blog
  //         // else set the blog to null
  //         // when blog is null, display the browse component + message alerting user that blog does not exist
  //       });
  //   };
  //   fetchData();
  // }, [])

  return (
    <div className={styles.Home}>
      {!!params.blogId ? <Read /> : <Browse />}
      {/* <Games /> */}
      <Links />
    </div>
  );
}
