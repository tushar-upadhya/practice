import Product from "@/components/Product";
import Title from "@/components/Title";

export const apiData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phonecase");

  if (!res.ok) {
    throw new Error("fetch data failed");
  }
  return res.json();
};

const PhoneCase = async () => {
  const products = await apiData();
  return (
    <div>
      <Title title={"phone Case"} />
      <Product products={products} />
    </div>
  );
};

export default PhoneCase;
