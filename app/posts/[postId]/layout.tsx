import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
    return (
      <>
        {children}
        <div>layout</div>
      </>
  )
}

export default layout