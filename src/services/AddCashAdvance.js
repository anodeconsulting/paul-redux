export function AddCashAdvance() {
    let BaseURL = 'http://10.120.6.13:8090/payments/cashadv';

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
                  "amount": 1.23,
                  "currency_code": "string"
                },
                "effective_date": "2017-08-09",
                "frequency": "One-time",
                "from_account_url": "/accounts/198626918769",
                "message": "string",
                "number_of_payments": 3,
                "operation_sign_url": "string",
                "payment_term": "365",
                "payment_type": "Email Transfer",
                "processing_datetime": "2017-08-09T17:09:46Z",
                "recipient_url": "/payments/recipients/21983126"
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