import React from 'react'


export default function Liste( {products}) {

  return (

    <div className="bg-white">
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
           <a key={product._id} href={`/product/${product._id}`}> 
              <div className="ease-in-out duration-200 hover:scale-105 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price} € </p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}
