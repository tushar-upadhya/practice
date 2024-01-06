import Image from "next/image";
import { getSingleProduct } from "../helper";

type props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const SingleProduct = async ({ searchParams }: props) => {
  const idString = searchParams?.id;
  const id = Number(idString);

  const product = await getSingleProduct(id);

  //   if (!product || !product.image) {
  //     return <div>No product found</div>;
  //   }

  return (
    <div>
      <Image src={product?.image} height={500} width={500} alt="" />

      <div>
        <p>{product?.title}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
