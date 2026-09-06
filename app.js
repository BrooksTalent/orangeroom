document.querySelectorAll('[data-answer]').forEach(button=>button.addEventListener('click',()=>{const box=document.getElementById(button.dataset.answer);box.classList.add('show');box.textContent=button.dataset.correct==='yes'?'回答正确！🎉 '+button.dataset.message:'还差一点，再想一想：'+button.dataset.message;}));

