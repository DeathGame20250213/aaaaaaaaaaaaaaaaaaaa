function checkPassword() {
    const correctPassword = "PUNISHMENT"; // 設定するパスワード
    const inputPassword = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (inputPassword === correctPassword) {
        window.location.href = "success.html"; // 成功ページへリダイレクト
    } else {
        message.textContent = "パスワードが間違っています。";
    }
}
