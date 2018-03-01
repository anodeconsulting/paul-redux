export function GetDepositeTransactions() {
    let BaseURL = 'http://10.120.6.13:8091/v1/accounts/782190105/transactions?from_date=2017-05-21&to_date=9999-12-31&cursor=0&limit=30';

    return new Promise((resolve, reject) =>{         
        fetch(BaseURL, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '123'
          },
            method: 'GET',
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