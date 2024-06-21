import './styles.css'
import './styles.scss'
const test = 'Testing webpack application'
document.querySelector('h1').innerText = test;
const SumFn = (a,b) => {
    return a + b
}
// SumFn(3,4)
document.querySelector('h2').textContent = SumFn(4,23)