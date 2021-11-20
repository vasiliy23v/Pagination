import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({
  _id,
  name,
  profession,
  completedMeetings,
  rate,
  user,
  onDelete,
  bookmark,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {user.qualities.map((item) => (
          <Qualitie id={item._id} color={item.color} name={item.name} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <BookMark key={_id} />
      <td>
        <button className={"btn btn-danger"} onClick={() => onDelete(_id)}>
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
