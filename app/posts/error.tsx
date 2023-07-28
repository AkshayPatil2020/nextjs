'use client'
import {useEffect} from 'react';

const error = ({ error, reset }: any) => {
    useEffect(() => {
        console.error(error);
    }, []);
    return (
      <>
            <h2 style={{color: 'red'}}>Something went wrong!</h2>
            <button style={{color: 'red'}} type='button' onClick={() => reset()}>
                Try again!
            </button>
            </>
  )
}

export default error