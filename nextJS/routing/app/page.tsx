import Product from "@/components/Product";
import Title from "@/components/Title";

export const apiData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");

  if (!res.ok) {
    throw new Error("fetch data failed");
  }
  return res.json();
};

export default async function Home() {
  const products = await apiData();
  // console.log("products:", products);

  return (
    <main>
      <Title title={"phone"} />
      <Product products={products} />
    </main>
  );
}
