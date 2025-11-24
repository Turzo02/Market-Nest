import React from 'react'

export default async function page({params}) {
    const {user} = await params  
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
  const data = await res.json();
  console.log(data)
    return (
    <div>Name: {data.name} </div>
  )
}
