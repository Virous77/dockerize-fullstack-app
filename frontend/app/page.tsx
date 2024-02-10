import User from "@/compoents/user";

export const dynamic = "force-dynamic";

const Page = async () => {
  const fetchIt = async () => {
    console.log(process.env.NEXT_PUBLIC_SERVER_URL);
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
      cache: "default",
      next: { tags: ["user"] },
    });
    const data = await response.json();
    return data;
  };

  const users = await fetchIt();

  return (
    <main className=" w-full h-[100vh] flex items-center  flex-col">
      <div className=" mt-4">
        <h1 className="text-3xl font-bold">Welcome to Kubernetes Learning </h1>
      </div>
      <User />

      <div>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.password}
          </li>
        ))}
      </div>
    </main>
  );
};

export default Page;
