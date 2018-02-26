export function AddTransferD2D() {
    let BaseURL = 'http://10.120.6.13:8090/payments/d2d';

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
                "amount": 1313,
                "currency_code": "CLP"
              },
              "effective_date": "2017-06-02",
              "frequency": "ONCE",
              "from_account_url": "/accounts/716949406",
              "processing_datetime": "2017-06-01T00:00:00-04:00",
              "recipient_url": "/payments/recipients/310001188904"
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