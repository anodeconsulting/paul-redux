// 1
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

// 2
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

// 3
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

// 4
export function GetMortgageTransactions() {
    let BaseURL = 'http://10.120.6.13:8092/mortgages/710044458408/transactions?Cursor=0&Limit=30';

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

// 5
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

// 6
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

// 7
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

// 8
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