var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const $colorPickerForm = document.querySelector('.color-picker-form');
const $colorInput = document.querySelector('.color-input');
const $avatar = document.querySelector('.avatar');

function generateAvatar() {
  reset();
  for (let i = 0; i < 8; i += 1) {
    const $tr = $avatar.querySelector(`tr:nth-of-type(${i + 1})`);
    for (let j = 0; j < 8; j += 1) {
      const r = Math.random();
      if (r < 0.5) continue;
      const $td = $tr.querySelector(`td:nth-of-type(${j + 1})`);
      $td.classList.add('filled');

    }
  }
}

function reset() {
  const $pixels = document.querySelectorAll('td.pixel.filled');
  $pixels.forEach($pixel => $pixel.classList.remove('filled'));
}


$colorPickerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const pickedColor = $colorInput.value;
  $avatar.style.setProperty('--pixel-color', pickedColor);
  generateAvatar();
});
