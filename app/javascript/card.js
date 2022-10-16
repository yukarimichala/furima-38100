const pay = () => {

  
 Payjp.setPublicKey(process.env.PAYJP_PUBLIC_KEY);

  
  const form = document.getElementById("charge-form");

  form.addEventListener("submit", (e) => {

    e.preventDefault();
   
    const formResult = document.getElementById("charge-form");
    const formData = new FormData(formResult);

    const card = {
      number: formData.get("order_form[number]"),
      exp_month: formData.get("order_form[exp_month]"),
      exp_year: `20${formData.get("order_form[exp_year]")}`,
      cvc: formData.get("order_form[cvc]"),
    };
    // console.log(card);

    // 第一引数は15行目で定義したカード情報。第二関数はアロー関数を用いてPAYJP側からのレスポンス・ステータスコードを受け取った後の処理を定義
    Payjp.createToken(card, (status, response) => {
      if (status == 200) {
        // response.idとすることでトークンの値を取得
        const token = response.id;
        const renderDom = document.getElementById("charge-form");
        const tokenObj = `<input value=${token} name='token' type="hidden"> `;
        renderDom.insertAdjacentHTML("beforeend", tokenObj);
      };

      document.getElementById("card-number").removeAttribute("name");
      document.getElementById("card-exp-month").removeAttribute("name");
      document.getElementById("card-exp-year").removeAttribute("name");
      document.getElementById("card-cvc").removeAttribute("name");

      document.getElementById("charge-form").submit();

    });
  });
};

window.addEventListener("load", pay);

