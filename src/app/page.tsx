import { usersManager } from "@/managers/users.managers";

async function Page() {
  const users = await usersManager.getAllUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
