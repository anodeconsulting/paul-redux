export function AddTransferD2CC() {
    let BaseURL = 'http://10.120.6.13:8090/payments/d2cc';

    return new Promise((resolve, reject) =>{     
        fetch(BaseURL, {
            method: 'POST',
            headers: {
              'Authorization': '123',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                "amount": {
                  "amount": 50106.0,
                  "currency_code": "CLP"
                },
                "from_account_url": "/accounts/0000000000972855122",
                "recipient_url": "/payments/recipients/0004260400000000058"
              }  
            )
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
}