let mypage =(location.href)
const shareData = {
    title: 'MDN',
    text: document.querySelector('.resource').textContent,
    url: mypage
}

const btn = document.querySelector('button');
const resultPara = document.querySelector('.result');

// Share must be triggered by "user activation"
// btn.addEventListener('click', async () => {
//     try {
//         await navigator.share(shareData)
//         resultPara.textContent = 'MDN shared successfully'
//     } catch (err) {
//         resultPara.textContent = `Error: ${err}`
//     }
// });

btn.onclick = () =>{
    navigator.share(shareData)
    .then(res => resultPara.textContent =res)
    .catch(error => console.log(error))
}