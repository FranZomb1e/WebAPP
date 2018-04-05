const request = require('request')

function rot13(msg) {
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}
  

// request.get('/secret-message/:utorid', function (err, resp, body){
//     const secret_message = body;

//     decrypted_message = rot13(secret_message)

//     request.post({
//         url: '/secret-message/:utorid',
//         json: true, // don't forget,
//         body: {
//             'utorid': fanghaor,
//             'message': decrypted_message
//         }
//     })
// })

console.log(rot13('abcd'));