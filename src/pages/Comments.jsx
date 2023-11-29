import React, { useState, useEffect, useRef } from "react";
import "../styles/Comments.css";

function Comments() {
  const [data, setData] = useState(null);
  const dataLoaded = useRef(false);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/comments", {
        method: "get",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setData(result);
      dataLoaded.current = true;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!dataLoaded.current) {
      getData();
    }
  }, []);

  return (
    <div className="header">
      <button onClick={getData}>Загрузить данные</button>
      <div>
        {data && data.comments ? (
          <div>
            <h2>Полученные данные:</h2>
            {data.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.body}</p>
                <p>postId: {comment.postId}</p>
                <p>User ID: {comment.user.id}</p>
                <p>Username: {comment.user.username}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Данные еще не загружены.</p>
        )}
      </div>
    </div>
  );
}

export default Comments;
