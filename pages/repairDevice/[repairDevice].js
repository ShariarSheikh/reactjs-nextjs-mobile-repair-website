import { useRouter } from "next/router";

const Index = () => {
  const { repairDevice } = useRouter().query;
  return (
    <div>
      <h1>hello {repairDevice}</h1>
    </div>
  );
};

export default Index;
