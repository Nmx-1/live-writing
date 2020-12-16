const log = document.getElementById('result');
const ans = document.querySelector('input')

/*document.addEventListener('keyup', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}
*/

ans.addEventListener('keyup', function(){
    log.innerText = ans.value
})

