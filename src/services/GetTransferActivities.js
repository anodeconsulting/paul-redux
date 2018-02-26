export function GetTransferActivities() {
    let BaseURL = 'http://10.120.6.13:8090/payments/transferActivities?from_date=20170521&to_date=99991230&from_account=10099949-8&limit=30';

    return new Promise((resolve, reject) =>{     
        fetch(BaseURL, {
            method: 'GET',
            headers: {
              'Authorization': '123',
              'Content-Type': 'application/json',
            }           
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