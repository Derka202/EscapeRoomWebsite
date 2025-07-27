document.addEventListener ('DOMContentLoaded', () => {

    function load_faq(faq) {
        const faqElement = document.createElement('div');
        faqElement.classList.add('faq');

        const qRow = document.createElement('div');
        qRow.classList.add('faq-row');
        const q = document.createElement('span');
        q.classList.add('faq-label');
        q.textContent = "Q: ";
        qRow.appendChild(q);
        const question = document.createElement('p');
        question.classList.add('question');
        question.textContent = faq.Q;
        qRow.appendChild(question);

        const aRow = document.createElement('div');
        aRow.classList.add('faq-row');
        const a = document.createElement('span');
        a.classList.add('faq-label');
        a.textContent = "A: ";
        aRow.appendChild(a);
        const answer = document.createElement('p');
        answer.classList.add('answer');
        answer.textContent = faq.A;
        aRow.appendChild(answer);

        faqElement.appendChild(qRow);
        faqElement.appendChild(aRow);

        return faqElement;
    }

    function load_all_faqs() {
        fetch('../data/faq.json')
            .then(response => response.json())
            .then(faqs => {
                faqs.forEach(faq => {
                    const faqElement = load_faq(faq);
                    const faqContainer = document.querySelector('.faq-container');
                    faqContainer.appendChild(faqElement);
                }
            );
        });
    }

    load_all_faqs();
});