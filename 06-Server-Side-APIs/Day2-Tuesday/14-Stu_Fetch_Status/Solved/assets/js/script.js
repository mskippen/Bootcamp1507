var requestUrl = 'https://developer.adzuna.com';
var responseText = document.getElementById('response-text');



fetch('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=550b2d94&app_key=39c92e6c7e94f4d85b30478f87a1cbb9')
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  });
