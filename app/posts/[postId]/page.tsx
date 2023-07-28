'use client'
import React, { Suspense } from 'react'
import Loading from './loading';
// const CatAvatar = React.lazy(() => import('./Img.jpg'));

const page = ({ params }: any) => {
  console.log(params);
  const response = async () => {
    return await fetch('https://dummyjson.com/products/1')
      .then(res => res.json());
  }
  return (
    <Suspense fallback={<Loading/>}>
      {/* <CatAvatar /> */}
    </Suspense>
  )
}

export default page