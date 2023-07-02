/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: 'Call of Duty CP',
        href: '#',
        imageSrc: 'https://www.cnet.com/a/img/resize/1047f5f0c6d3b2aeca7c4fc079486ceb059a2b4a/hub/2019/09/18/c07d7cfa-5cc7-4d64-a3bb-aabf6b778dcc/call-of-duty-mobile.jpg?auto=webp&fit=crop&height=675&width=1200',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Spotify Subscription',
        href: '#',
        imageSrc: 'https://images.squarespace-cdn.com/content/v1/6042529f1fe38f0b0503be5c/1616072527567-YHOUT1L2JW6ROBTME3SQ/spotify-playlist.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Twitter Blue',
        href: '#',
        imageSrc: 'https://images.news18.com/ibnlive/uploads/2022/11/twitter-blue-16681397734x3.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Candy Crush',
        href: '#',
        imageSrc: 'https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]

export default function SubscriptionBar() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                </div>
                                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
