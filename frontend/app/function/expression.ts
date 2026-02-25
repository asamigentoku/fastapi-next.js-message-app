// ユーザー名・パスワードのバリデーション
export function validateForm(name:string,pass:string) {
  // ユーザー名は3文字以上
    if (name.length < 3) {
        //ユーザー名は3文字以上にしてください
        return false;
    }

    // パスワードは8文字以上、大文字1つ、小文字1つ、数字1つ
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
    if (!passRegex.test(pass)) {
        // パスワードは5文字以上で、大文字・小文字・数字を含めてください"
    }
    return true;
}