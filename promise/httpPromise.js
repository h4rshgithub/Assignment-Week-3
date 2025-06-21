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

fetchUserDataPromise()
    .then(user => console.log('User Data (Promise):', user))
    .catch(err => console.error('Error:', err));
