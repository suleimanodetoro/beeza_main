
import React from 'react';
import Link from 'next/link';


const ConstructionCard = ({ post }) => (
  <div className="bg-white rounded-lg p-0 lg:p-8 pb-12 mb-8">
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
    <div className="relative overflow-hidden pb-80 mb-6">
      <img src="/beeza_construction.png" alt="" className="object-top absolute h-80 w-full object-contain rounded-t-lg lg:rounded-lg" />
    </div>

    <h1 className="transition duration-700 text-center mb-8 hover:text-nuetral-600 text-3xl font-semibold">
      Site is Currently Under Construction :(
    </h1>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8 text-decoration-line: underline">
    <Link href="https://blog.beeza.space/" passHref={true}>Check out our blog instead :)</Link>
    </p>

  </div>
);

export default ConstructionCard;