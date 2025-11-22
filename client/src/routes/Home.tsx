import useToken from "../hooks/useToken";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const token = useToken();

  return <div className="">Home</div>;
}
