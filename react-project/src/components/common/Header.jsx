export default function Header() {
  return (
    <>
      <header>
        <h1>나의 홈페이지</h1>
        <div className="login-signup">
          <a href="/form/loginForm.do">로그인</a>
          <a href="/form/registerForm.do">회원가입</a>
        </div>
      </header>
    </>
  );
}
