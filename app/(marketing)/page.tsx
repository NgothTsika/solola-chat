import Footer from "./_components/footer";
import Heading from "./_components/heading";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:justify-start text-center  px-6">
        <Heading />
      </div>
      <Footer />
    </div>
  );
};

export default page;
