(function() {

  window.memoryStorage = {};

  function isEmpty(o) {
    for (var i in o) {
        return false;
     }
     return true;
  };

  if (isEmpty(memoryStorage)) {
    // Ask other tabs for memoryStorage
    localStorage.setItem('getSessionStorage', Date.now());
  };

  window.addEventListener('storage', function(event) {

    //console.log('storage event', event);

    if (event.key == 'getSessionStorage') {
      // Some tab asked for the memoryStorage -> send it

      localStorage.setItem('sessionStorage', JSON.stringify(memoryStorage));
      localStorage.removeItem('sessionStorage');

    } else if (event.key == 'sessionStorage' && isEmpty(memoryStorage)) {
      // sessionStorage is empty -> fill it

      var data = JSON.parse(event.newValue),
            value;

      for (key in data) {
        memoryStorage[key] = data[key];
      }

      showSessionStorage();
    }
  });

  window.onbeforeunload = function() {
    //sessionStorage.clear();
  };


  /* This code is only for the UI in the demo, it's not part of the sulotion */

  var el;

  function showSessionStorage() {
    el.innerHTML = !isEmpty(memoryStorage) ? JSON.stringify(memoryStorage) : 'memoryStorage is empty';
  }

  window.addEventListener('load', function() {
    el = document.getElementById('stData');
    showSessionStorage();

    document.getElementById('btnSet').addEventListener('click', function() {
      memoryStorage.token = '123456789';
      showSessionStorage();
    })

    document.getElementById('btnClear').addEventListener('click', function() {
      memoryStorage = {};
      showSessionStorage();
    })
  })