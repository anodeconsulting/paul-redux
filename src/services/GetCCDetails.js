export function GetCCDetails() {
    let BaseURL = 'http://10.120.6.13:8089/cards/0004214016100121003';

    return new Promise((resolve, reject) =>{         
        fetch(BaseURL, {
          headers: {
            'Authorization': '123',
            'Content-Type': 'application/json',
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