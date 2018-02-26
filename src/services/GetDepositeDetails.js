export function GetDepositeDetails() {
    let BaseURL = 'http://10.120.6.13:8091/v1/accounts/782190105';

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