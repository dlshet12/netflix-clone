'use client';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import Image from 'next/image';
import './row.css';
export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  }
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  useEffect(() => {
    fetchData();
  }, [fetchUrl]);
  return (
    <div className='text-white mx-20 mt-4'>
      <h1 style={{}}>{title}</h1>
      <div className='row_posters'>
        {movies.map((item) => {
          return (
            ((isLargeRow && item.poster_path) ||
              (!isLargeRow && item.backdrop_path)) && (
              <Image
                key={item.id}
                src={`${baseUrl}${
                  isLargeRow ? item.poster_path : item.backdrop_path
                }`}
                width={500}
                height={500}
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                alt='poster image'
              />
            )
          );
        })}
      </div>
    </div>
  );
}
