import React from 'react'

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <p>Header</p>
        <section>{children}</section>
        <p>Footer</p>
      </>
  )
}

export default layout;

/* 
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
*/