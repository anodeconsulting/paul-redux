export function GetAccounts() {
    let BaseURL = 'http://10.120.6.13:8088/v1/credit/lines-of-credit';

    return new Promise((resolve, reject) =>{     
        fetch(BaseURL, {
            method: 'GET',
          })
          .then((response) => response.json())
          .then((res) => {
            console.log(res)
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
}