import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

const Login = () => {
  const [visibol, setvisibol] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // Обработка данных формы, например, отправка на сервер
    console.log(data);
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div
            style={{
              fontSize: "24px",
              textAlign: "center",
              fontWeight: "bold",
              color: "darkblue",
              lineHeight: "100px",
            }}
          >
            <label>Welcome to the page</label>
          </div>

          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="email"
          />
          <div style={{ height: 50 }}>
            {errors.email && (
              <p style={{ color: "red" }}>
                {errors.email.message || "Invalid email"}
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            type={visibol ? "text" : "password"}
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            placeholder="password"
          />
          <div style={{ height: 50 }}>
            {errors.password && (
              <p style={{ color: "red" }}>
                {errors.password.message || "Invalid password"}
              </p>
            )}
          </div>
          <div
            className={`password-visibility-toggle ${
              visibol ? "visible" : "hidden"
            }`}
            onClick={() => setvisibol(!visibol)}
          >
            {visibol ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
        <button type="submit">Зарегистрироваться</button>
        <div>
          <Link to="/Registration">Перейти на другую страницу</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
