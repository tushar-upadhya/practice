type props = {
  title: string;
};

const Title = ({ title }: props) => {
  return (
    <p className="font-bold text-center mt-10 text-xl underline underline-offset-4 decoration-[1px]">
      {title}
    </p>
  );
};

export default Title;
