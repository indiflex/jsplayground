function addSpanClicker() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    document.getElementById(`span${i + 1}`).addEventListener('click', evt => {
      console.log('🚀 ~ i', i);
    });
  }
}

let idx = 0;
function addYList() {
  const ul = document.getElementById('ylist');
  // eslint-disable-next-line no-use-before-define
  yArr.forEach( (a, i) => {
    console.log(a);
    if (i < idx) return;
    
    const li = document.createElement('li');
    li.id = `a${i}`;
    const al = document.createElement('a');
    al.href = a;
    al.innerText = `${i}: ${a}`;
    al.target = '_blank';
    al.addEventListener('click', evt => {
      document.getElementById(`a${idx}`).remove();
      idx += 1;
    });
    li.appendChild(al);
    ul.append(li);
  });
}

document.addEventListener('DOMContentLoaded', event => {
  console.log(`document's ready`);
  // addSpanClicker(event);
  addYList();
});

// eslint-disable-next-line vars-on-top
var yArr = [
  'https://studio.youtube.com/video/B0ExqP8dVjk/edit',
  'https://studio.youtube.com/video/HCMXDPYXd9g/edit',
  'https://studio.youtube.com/video/WSGuy2QiESw/edit',
  'https://studio.youtube.com/video/B_jgH_ZyjIY/edit',
  'https://studio.youtube.com/video/dJU7VARhCqE/edit',
  'https://studio.youtube.com/video/s788gZ-cNj8/edit',
  'https://studio.youtube.com/video/K_fCYjjZneo/edit',
  'https://studio.youtube.com/video/2h3Z1nvCiLI/edit',
  'https://studio.youtube.com/video/KIStLWKp4S4/edit',
  'https://studio.youtube.com/video/ca9e1BDAKsc/edit',
  'https://studio.youtube.com/video/XYnqdjF0q2A/edit',
  'https://studio.youtube.com/video/R35etAo0Deo/edit',
  'https://studio.youtube.com/video/F2PEISfDGDs/edit',
  'https://studio.youtube.com/video/3S8koZ-UAQo/edit',
  'https://studio.youtube.com/video/8oEE0fgXA4M/edit',
  'https://studio.youtube.com/video/_j2JgznBA2Y/edit',
  'https://studio.youtube.com/video/3pe0_7FPPY4/edit',
  'https://studio.youtube.com/video/aWzVTFM7UaE/edit',
  'https://studio.youtube.com/video/DS3PV1q3dwU/edit',
  'https://studio.youtube.com/video/7RgsqcgY4S4/edit',
  'https://studio.youtube.com/video/3FTsbFYt6Ok/edit',
  'https://studio.youtube.com/video/5SyvsCOlick/edit',
  'https://studio.youtube.com/video/SWbi806KQ3I/edit',
  'https://studio.youtube.com/video/7vA2UKI00_A/edit',
  'https://studio.youtube.com/video/GroeyzBNhfU/edit',
  'https://studio.youtube.com/video/W8K4wL-qfFI/edit',
  'https://studio.youtube.com/video/rmYhahiLHnE/edit',
  'https://studio.youtube.com/video/wLgHEn2vcPo/edit',
  'https://studio.youtube.com/video/7_cilpkXfAA/edit',
  'https://studio.youtube.com/video/m0sZD3Epbm8/edit',
  'https://studio.youtube.com/video/LAUCi2eXA9w/edit',
  'https://studio.youtube.com/video/VY8K9FguM-E/edit',
  'https://studio.youtube.com/video/JVbJXDL4cdc/edit',
  'https://studio.youtube.com/video/9ukr53xqeJ8/edit',
  'https://studio.youtube.com/video/31nNRRkAksY/edit',
  'https://studio.youtube.com/video/gf2DnqxnwAc/edit',
];
