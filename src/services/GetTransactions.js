export function GetTransactions() {
    let BaseURL = 'http://10.120.6.13:8088/v1/credit/lines-of-credit/700713440792/transactions?from_date=2017-05-24&to_date=9999-12-31&cursor=5';

    return new Promise((resolve, reject) =>{         
        fetch(BaseURL, {
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