import styles from './index.css';
const root = document.getElementById('root');

const dogs = ['Neil', 'Frank', 'Fido', 'Spot'];

const ul = document.createElement('ul');
ul.className = styles.dogs;
root.appendChild(ul);

dogs.forEach(dog => {
  const li = document.createElement('li');
  li.textContent = dog;
  ul.appendChild(li);
});
