const https = require('https');

function fetchUserDataPromise() {
    return new Promise((resolve, reject) => {
        https.get('https://jsonplaceholder.typicode.com/users/1', (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (err) {
                    reject(err);
                }
            });
        }).on('error', reject);
    });
}

async function getUser() {
    try {
        const user = await fetchUserDataPromise();
        console.log('User Data (Async/Await):', user);
    } catch (err) {
        console.error('Error:', err);
    }
}

getUser();
