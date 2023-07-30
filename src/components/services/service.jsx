/*
    const data = async(url) => {
        const data1 = await fetch(url)
        return await data1.json()
    }
*/
/*
 
    let promice = fetch('https://jsonplaceholder.typicode.com/posts')
        promice.then(response => response.json())
        .then(data => console.log(data));
*/

class Service{

    _linkDb = 'http://localhost:3000/'

    async getProducts (link) {
        const data = await fetch(`${this._linkDb}${link}`);
        if(data.status < 200 || data.status > 299){
            throw new Error(`Помилка запиту ${data.statusText}: ${data.status}`)
        }
        return await data.json()
    }

    async postData (link, data) {
        const sendData = await fetch(`${this._linkDb}${link}`, {
            method: 'POST',
            headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
            body: `data=${JSON.stringify(data)}`    
        })
        if(sendData.status < 200 || sendData.status > 299){
            throw new Error(`Помилка запиту ${sendData.statusText}: ${sendData.status}`)
        }
        return await sendData.json()
    }

    async patchData (link, data) {
        const sendData = await fetch(`${this._linkDb}${link}`, {
            method: 'PATCH',
            headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
            body: `reviews=${JSON.stringify(data)}`

        })
        if(sendData.status < 200 || sendData.status > 299){
            throw new Error(`Помилка запиту ${sendData.statusText}: ${sendData.status}`)
        }
        return await sendData.json()
    }

}

export default Service;
