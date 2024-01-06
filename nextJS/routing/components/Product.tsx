import Image from "next/image";
import Link from "next/link";

interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  categories: string;
  brand: string;
}

interface IProductProps {
  products: IProduct[];
}

const Product = ({ products }: IProductProps) => {
  // console.log("products:", products);

  return (
    <div>
      {products.map((item) => {
        return (
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">
            <Link
              href={{ pathname: "/singleproduct", query: { id: item?.id } }}
              key={item.id}
            >
              <div className="overflow-hidden hover:border-gray-950 duration-200 border-[1px] border-gray-300  rounded-md">
                <Image
                  className="w-full h-80 object-contain"
                  src={item?.image}
                  height={500}
                  width={500}
                  alt="image"
                />
                <div className="px-4 pb-2 text-sm flex-col flex gap-2">
                  <p className="text-gray-600">{item?.title}</p>
                  <p className="font-semibold">{item?.price}</p>
                  {/* <p>{item?.price}</p> */}

                  <div className="flex gap-4 items-center justify-center">
                    <button>Add</button>
                    <button className="uppercase text-sm font-semibold">
                      more
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
