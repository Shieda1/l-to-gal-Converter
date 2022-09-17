// https://www.omnicalculator.com/conversion/l-to-gal

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const galRadio = document.getElementById('galRadio');
const lRadio = document.getElementById('lRadio');

let gal;
let l = v; 

// labels of the inpust
const variable = document.getElementById('variable');

galRadio.addEventListener('click', function() {
  variable.textContent = 'l';
  l = v;
  result.textContent = '';
});

lRadio.addEventListener('click', function() {
  variable.textContent = 'gal';
  gal = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(galRadio.checked)
    result.textContent = `gal = ${computegal().toFixed(5)}`;

  else if(lRadio.checked)
    result.textContent = `l = ${computel().toFixed(5)}`;
})

// calculation

function computegal() {
  return Number(l.value) / 3.785;
}

function computel() {
  return Number(gal.value) * 3.785;
}