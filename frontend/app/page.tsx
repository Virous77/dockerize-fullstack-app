const Page = async () => {
  const fetchIt = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
      cache: "no-cache",
    });
    const data = await response.json();
    console.log(data);
  };

  fetchIt();

  return <div>Page cool</div>;
};

export default Page;
