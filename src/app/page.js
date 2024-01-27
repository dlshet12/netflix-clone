'use client';
import Banner from '@/components/banner/banner';
import Navbar from '@/components/navbar/navbar';
import Row from '@/components/row/row';
import './globals.css';
import request from '@/request';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './redux/slices/userSlice';

export default function Home() {
  const dispatch = useDispatch();

  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    console.log('heree 11');
    if (userAuth) {
      dispatch(
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
    } else {
      dispatch(logout());
    }
  });
  useEffect(() => {
    unsubscribe();
  }, []);
  return (
    <div className='bg-black'>
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX_ORIGINALS'
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
      <Row title='Action Movie' fetchUrl={request.fetchActionMovies} />
      <Row title='Horror Movie' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={request.fetchRomanceMovies} />
      <Row title='Documentary' fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}
