import React from "react";

const List = ({ users }) => {
  return (
    <div>
      {users ? (
        users.map((user) => {
          return (
            <div
              key={user.id}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
            >
              <h2 className="font-semibold text-lg">{user.name}</h2>
            </div>
          );
        })
      ) : (
        <h2>No users found</h2>
      )}
    </div>
  );
};

export default List;
