import { InputTitle } from "@/components/input";
import { useState } from "react";

interface RegisterForm {
  email: string;
  password: string;
}

export function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser() {
    console.log(email, password);
  }
  return (
    <main className="min-h-screen flex flex-row justify-center items-center bg-[#0c0d0c] text-[#f2f2ed]">
      <div className="player-shell size-98 flex flex-col gap-3">
        <p className="ml-2">Авторизация</p>
        <InputTitle
          title="Почта"
          value={email}
          inputData={setEmail}
          placeholder=""
        ></InputTitle>
        <InputTitle
          title="Пароль"
          value={password}
          inputData={setPassword}
          placeholder=""
        ></InputTitle>
        <button className="button-accent" onClick={registerUser}>
          Зарегестрироваться
        </button>
      </div>
    </main>
  );
}
