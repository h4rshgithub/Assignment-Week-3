const https = require('https');

function fetchUserData(callback) {
    https.get('https://jsonplaceholder.typicode.com/users/1', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => callback(null, JSON.parse(data)));
    }).on('error', err => callback(err, null));
}

fetchUserData((err, user) => {
    if (err) console.error('Error:', err);
    else console.log('User Data (Callback):', user);
});
