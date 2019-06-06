function promiseTimeout(time) {
  console.log('Running Promise')
  return new Promise((resolve, reject) => {
    setTimeout(() => reject('some data'), time);
  })
}

promiseTimeout(3000)
  .then((data) => console.log('It\'s been 3s', data))
  .catch(err => console.log(err))
