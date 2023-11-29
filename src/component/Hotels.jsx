import React, { useState, useEffect } from "react";
import Routercards from "../pages/Routercards";
import "../styles/Hotels.css";
function Hotels() {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    // Создаем массив с данными для трех комментариев
    const commentsToAdd = [
      {
        body: "This is the first comment",
        postId: 3,
        userId: 5,
      },
      {
        body: "Another comment here",
        postId: 3,
        userId: 6,
      },
      {
        body: "One more comment",
        postId: 3,
        userId: 7,
      },
    ];

    // Отправляем POST-запросы для добавления комментариев
    Promise.all(
      commentsToAdd.map((comment) =>
        fetch("https://dummyjson.com/comments/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(comment),
        })
      )
    )
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((fetchedData) => {
        console.log("Данные получены: ", fetchedData);
        setCommentsData(fetchedData);
      })
      .catch((error) => {
        console.error("Произошла ошибка: ", error);
      });
  }, []);

  return (
    <div className="media-map">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>{/* Контент слева */}</div>
        <div style={{ flex: 1, marginTop: "60px" }}>
          <iframe
            width="840"
            height="784"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=759&amp;height=746&amp;hl=en&amp;q=%20Timi%C8%99oara+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      {commentsData.length > 0 && (
        <div>
          <h2>Список комментариев</h2>
          {commentsData.map((comment, i) => (
            <div key={i}>
              <h3>
                Комментарий {comment.postId}-
                {comment.userId !== undefined ? comment.userId : "undefined"}
              </h3>
              <p>Текст: {comment.body}</p>
              <p>ИД поста: {comment.postId}</p>
              <p>
                Пользователь:{" "}
                {comment.userId !== undefined ? comment.userId : "undefined"}
              </p>
            </div>
          ))}
        </div>
      )}
      <p>Загрузка данных...</p>

      <div>
        <Routercards />
      </div>
    </div>
  );
}

export default Hotels;
