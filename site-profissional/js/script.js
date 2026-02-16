// Script extraído de index.html

// Inicializa Google Analytics (gtag)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());

// Substitua pelo seu ID de medição do GA se for diferente
gtag('config', 'G-0HMR2DE2SL');

// Função de toggle para FAQ — não usa handlers inline
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const isAlreadyOpen = button.classList.contains('active');

    // Fecha todos
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.classList.remove('active');
        const ans = btn.nextElementSibling;
        if (ans) {
            ans.classList.remove('active');
            ans.style.maxHeight = null;
        }
    });

    // Abre se não estava aberto
    if (!isAlreadyOpen) {
        button.classList.add('active');
        if (answer) {
            answer.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
        }
    }
}

// Inicializa handlers ao carregar DOM
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(btn => {
        // substituir qualquer onclick inline
        btn.removeAttribute('onclick');
        btn.addEventListener('click', function () { toggleFAQ(btn); });
    });

    // Small accessibility: toggle with Enter/Space when focused
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.setAttribute('tabindex', '0');
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(btn);
            }
        });
    });
});
