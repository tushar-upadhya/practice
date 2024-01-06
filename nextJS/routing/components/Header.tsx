import Link from "next/link";

const Header = () => {
  const nav = [
    {
      id: 1,
      title: "Phone",
      href: "/",
    },
    {
      id: 2,
      title: "Phone Case",
      href: "/phonecase",
    },
    {
      id: 3,
      title: "Watches",
      href: "/watches",
    },
    {
      id: 4,
      title: "Accessories",
      href: "/accessories",
    },
  ];

  return (
    <div className="w-full h-20 text-gray-300 bg-black sticky top-0 z-50 flex items-center justify-center gap-4">
      {nav.map((item) => (
        <Link key={item.id} href={item.href}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
