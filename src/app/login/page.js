'use client';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { useRef } from 'react';
export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    console.log('i got clicked');
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log('ur not able to signin', authUser);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(
            https://ceotudent.com/wp-content/uploads/2020/05/netflix-poster.jpg)`,
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black '></div>

        <div className='w-96 h-4/6 border-y-slate-800 bg-slate-950 absolute text-white flex flex-col opacity-80'>
          <div
            style={{
              margin: '40px',
              justifyContent: 'space-between',
              display: 'flex',
              flexDirection: 'column',

              height: '260px',
            }}
          >
            <h1 className='text-2xl font-bold'>Sign In</h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '15px',
              }}
            >
              <input
                ref={emailRef}
                name='Email'
                placeholder='Email'
                style={{
                  marginBottom: '10px',
                  padding: '10px',
                  color: 'black',
                  borderRadius: '5px',
                }}
              />
              <input
                ref={passwordRef}
                name='Password'
                placeholder='Password'
                style={{ padding: '10px', color: 'black', borderRadius: '5px' }}
              />
            </div>
            <button
              onClick={signIn}
              style={{ backgroundColor: '#e50914', padding: '10px' }}
            >
              Sign In
            </button>
            <div className='flex flex-row'>
              <span style={{ color: 'grey' }}>New to netflix?</span>
              <div className='hover:underline' onClick={register}>
                Signup now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
