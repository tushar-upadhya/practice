import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <p>Your page is not found</p>
      <Link href={"/"} className="border-b-[1px] border-b-gray-950 mt-2">
        back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
