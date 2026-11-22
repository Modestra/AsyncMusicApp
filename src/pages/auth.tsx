export function AuthPage() {
  return (
    <main className="min-h-screen flex flex-row justify-center items-center bg-[#0c0d0c] text-[#f2f2ed]">
      <div className="player-shell size-98">
        <div>
          <p>Почта</p>
          <input placeholder="example@gmail.com" />
        </div>
        <div>
          <p>Пароль</p>
          <input placeholder="password" />
        </div>
        <button className="button-accent">Зарегестрироваться</button>
      </div>
    </main>
  );
}
