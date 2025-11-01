import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";
function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Filter users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      <Search setSearch={setSearch} />
      <List users={filteredUsers} />
    </div>
  );
}

export default App;
