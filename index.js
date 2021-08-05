function addSpanClicker() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    document.getElementById(`span${i + 1}`).addEventListener('click', evt => {
      console.log('🚀 ~ i', i);
    });
  }
}

document.addEventListener('DOMContentLoaded', event => {
  console.log(`document's ready`);
  addSpanClicker(event);
});
