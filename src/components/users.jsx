import React, { useState } from "react";
import api from "../api";
import Pagination from "./pagination";
import SearchStatus from "./searchStatus";
import User from "./user";
import { paginate } from "../utils/paginate";
const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage]=useState(1)
  const handlePageChange = (pageIndex) => {
    console.log("page", pageIndex);
    setCurrentPage(pageIndex)
  };
  const userCrop=paginate(users,currentPage,pageSize);
  return (
    <>
      <SearchStatus length={users.length} />
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User
                user={user}
                onDelete={handleDelete}
                _id={user._id}
                name={user.name}
                profession={user.profession}
                completedMeetings={user.completedMeetings}
                rate={user.rate}
              />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Users;
