import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = () => {
  const { push, replace } = useRouter();
  console.log(push, replace);
  return <div>Car page</div>;
};

export default CarPage;
