import $ from 'jquery';

$(document).ready(function () {
  let clickCount = 0;
  
  $('#action-btn').on('click', function () {
    clickCount++;
    
    if (clickCount === 1) {
      $('#title').text('Sekali Lagi');
    } else if (clickCount === 2) {
      $('#title').text('Anda Kena Tipu');
    }
  });
});
