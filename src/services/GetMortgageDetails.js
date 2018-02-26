export function GetMortgageDetails() {
    let BaseURL = 'http://10.120.6.13:8092/mortgages/710044458408';

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