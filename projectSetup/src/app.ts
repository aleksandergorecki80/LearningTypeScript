const button = document.querySelector('button');

button?.addEventListener('click', () => {
  const kki = 'kki';
  console.log('Button clicked!', kki);
});

const kki = 'kki';

const nic = () => {
  return;
};

console.log('nic', nic());
