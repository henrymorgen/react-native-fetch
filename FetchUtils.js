import React, {Component} from 'react';
class FetchUtils extends React.Component {
    static send(method, url, data, callback) {
        let request;
        if (method === 'get') {
            request = new Request(url, {
                method: 'GET',
                headers: ({
                    'Content-Type': 'application/json'
                })
            });
        } else if (method === 'post') {
            request = new Request(url, {
                method: 'POST',
                headers: ({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(data)
            });
        }
        fetch(request).then((response) => response.json())
            .then((jsonData) => {
                callback(jsonData);
            });
    }
}
module.exports = FetchUtils;
