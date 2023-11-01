import React, { useState, useEffect } from "react";

function Hotels() {
  const [data, setData] = useState(null); // Создайте состояние для хранения данных

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/carts", {
        method: "get",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const result = await response.json(); // Преобразуйте ответ в JSON формат
      setData(result); // Обновите состояние данными
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData(); // Вызовите функцию для получения данных при загрузке компонента
  }, []);

  return (
    <div className="booton">
      <button onClick={getData}>Загрузить данные</button>
      <div>
        {data && data.carts ? (
          <div>
            <h2>Полученные данные:</h2>
            {data.carts.map((cart) => (
              <div key={cart.id}>
                <p>Total: ${cart.total}</p>
                <p>Discounted Total: ${cart.discountedTotal}</p>
                <p>Total Products: {cart.totalProducts}</p>
                <p>Total Quantity: {cart.totalQuantity}</p>
                <h4>Products in the Cart:</h4>
                {cart.products.map((product) => (
                  <div key={product.id}>
                    <h5>{product.title}</h5>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Total: ${product.total}</p>
                    <p>Discounted Price: ${product.discountedPrice}</p>
                    <img src={product.thumbnail} alt={product.title} />
                  </div>
                ))}
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

export default Hotels;
