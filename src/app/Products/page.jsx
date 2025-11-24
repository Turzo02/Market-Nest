import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='section'>
            <h1>Products</h1>
            <Link href="/Products/1">Add New Product1</Link>
            <Link href="/Products/2">Add New Product2</Link>
        </div>
    );
};

export default page;