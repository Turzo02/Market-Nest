import Link from "next/link";
import React from "react";

export default async function page() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  console.log(users);
  return (
    <div>
      page {users.length}
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <Link href={`/Test/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
