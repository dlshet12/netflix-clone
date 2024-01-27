'use client';
import { useEffect, useState } from 'react';
import axios from '../../axios';
import request from '@/request';
import './banner.css';
export default function Banner() {
  const [movie, setMovie] = useState([]);

  async function fetchData() {
    const response = await axios.get(request.fetchNetflixOriginals);

    setMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length - 1)
      ]
    );
    return response;
  }
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header
        className='flex w-lvw items-end justify-between  object-contain'
        style={{
          height: '70vh',
          backgroundSize: 'cover',
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        }}
      >
        <div>
          <div className='text-red-50 ml-16 mb-9 w-96'>
            <div>
              <h1 className='text-5xl'>
                {movie?.original_name || movie?.name || movie?.title}
              </h1>
            </div>
            <div className='py-5'>
              <button className='py-2 mx-3  px-4 rounded  border-none bg-gray-700 bg-opacity-50  text-white cursor-pointer hover:text-black hover:bg-gray-300 transition-all duration-0.2s'>
                Play
              </button>
              <button className='py-2  px-4 rounded  border-none bg-gray-700 bg-opacity-50 text-white cursor-pointer  hover:text-black hover:bg-gray-300 transition-all duration-0.2s'>
                My List
              </button>
            </div>
            <div className='text-xs w-96'>
              {truncate(`${movie?.overview}`, 150)}
            </div>
          </div>
          <div className='bannerbottomfade' />
        </div>
      </header>
    </>
  );
}
