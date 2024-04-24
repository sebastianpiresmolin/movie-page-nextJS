import { fetchAllUsers } from "../lib/data";

// This component will fetch all users from the database and display their email in a list.

export default async function AllUsers() {
    const allUsers = await fetchAllUsers();
    return (
        <div>
            {allUsers.map((user, index) => (
                <p key={index} className="text-black">{user.email}</p>
            ))}
        </div>
    );  
}