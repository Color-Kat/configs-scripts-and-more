const API = './core/';
// const API = 'http://blog.abr/core/';
document.cookie = 'SameSite=Secure';
export const ajax = async (bodyFields, callback = null) => {
    let body = new FormData();
    for (let field in bodyFields) {
        body.append(field, bodyFields[field]);
    }
    
    // for (var pair of body.entries()) {console.log(pair[0]+ ', ' + pair[1]); }

    return new Promise(async (resolve, reject) => {
        // check online
        if (!navigator.onLine && callback) {
            callback('Нет подключения к интернету');
            return reject(false);
        }

        await fetch(API, {
            method: "post",
            mode  : "cors",
            credentials: "include",

            body  : body
        }).then(
            response => {
                if (!response.ok) {
                    // console.log(response.statusText);
                }

                try {
                    // result - requested data
                    // console - debug output
                    let res = response.json();

                    res.then(res => {
                        if (res.console) console.log(res.console);

                        resolve(res.result);
                    });
                } catch (error) {
                    reject('Произошла какая-то ошибка :((');
                }
            }, () => reject('Произошла какая-то ошибка :(('));
    });
}