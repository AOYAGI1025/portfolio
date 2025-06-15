const winMap = { 'Rock':'Paper', 'Scissors':'Rock', 'Paper':'Scissors' };
const handEmoji = { 'Rock':'✊', 'Scissors':'✌️', 'Paper':'🖐' };
const countdownEl = document.getElementById('countdown');
const cpuHandEl = document.getElementById('cpu-hand');
const lineYou = document.getElementById('line-you');
const lineVs = document.getElementById('line-vs');
const lineCpu = document.getElementById('line-cpu');
const lineWinner = document.getElementById('line-winner');
const buttons = document.querySelectorAll('.choices button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const you = btn.dataset.hand;
    buttons.forEach(b => b.disabled = true);
    // Clear lines and cpu hand
    lineYou.textContent = '';
    lineVs.textContent = '';
    lineCpu.textContent = '';
    lineWinner.textContent = '';
    cpuHandEl.textContent = '?';
    let count = 3;
    countdownEl.textContent = count;
    const timer = setInterval(() => {
      count--;
      if (count > 0) {
        countdownEl.textContent = count;
      } else {
        clearInterval(timer);
        const cpu = winMap[you];
        const cpuEmoji = handEmoji[cpu];
        countdownEl.textContent = 'GO!';
        cpuHandEl.textContent = cpuEmoji;

        lineWinner.textContent = `YOU LOSE…`;
        setTimeout(() => {
          countdownEl.textContent = 'READY?';
          cpuHandEl.textContent = '?';
          buttons.forEach(b => b.disabled = false);
          lineYou.textContent = '';
          lineVs.textContent = '';
          lineCpu.textContent = '';
          lineWinner.textContent = '';
        }, 2000);
      }
    }, 800);
  });
});
