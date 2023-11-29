import "../styles/Registration.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "@leecheuk/react-google-login";
import { FcGoogle } from "react-icons/fc"; // Если FcGoogle - это иконка

const Registration = () => {
  const [visibol, setvisibol] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the Google login response here
  };
  return (
    <div className="Registration">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="label">
            <label>Sign up</label>
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              {...register("lastName", {
                required: "Last Name is required",
              })}
              placeholder="Last Name"
            />
            <div style={{ height: 50 }}>
              {errors.lastName && (
                <p style={{ color: "red" }}>
                  {errors.lastName.message || "Invalid Last Name"}
                </p>
              )}
            </div>
          </div>

          <div>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Name"
            />
            <div style={{ height: 50 }}>
              {errors.name && (
                <p style={{ color: "red" }}>
                  {errors.name.message || "Invalid Name"}
                </p>
              )}
            </div>
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
        <div
          className={`password-visibility-toggle ${
            visibol ? "visible" : "hidden"
          }`}
          onClick={() => setvisibol(!visibol)}
        >
          {visibol ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </div>
        <div style={{ height: 50 }}>
          {errors.password && (
            <p style={{ color: "red" }}>
              {errors.password.message || "Invalid password"}
            </p>
          )}
        </div>

        <button type="submit">Зарегистрироваться</button>

        {/* Кнопка сброса для всей формы */}
        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Сбросить
        </button>
        <div className="">
          <GoogleLogin
            clientId={
              "647544173751-us49m6gs2ohi9vvv11m9hj8epg9qthv3.apps.googleusercontent.com"
            } // Используйте ваш идентификатор клиента здесь
            render={(renderProps) => (
              <button
                type="button"
                className=""
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="" /> Войти через Google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div>
          <Link to="/Login">Перейти </Link>{" "}
          {/* Создание ссылки на другую страницу */}
        </div>
      </form>
    </div>
  );
};

export default Registration;
