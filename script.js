document.addEventListener("DOMContentLoaded", function () 
{
   const faqContainer = document.querySelector('.faq-container');
 
   function createFAQ() {
     const question = prompt("Enter your question:");
     const answer = prompt("Enter the answer:");
     
     if (question && answer) {
       const faq = document.createElement('div');
       faq.classList.add('faq');
 
       const title = document.createElement('h3');
       title.classList.add("faq-title");
       title.textContent = question;
 
       const text = document.createElement('p');
       text.classList.add("faq-text");
       text.textContent = answer;
 
       const toggle = document.createElement('button');
       toggle.classList.add("faq-toggle");
 
       const chevronDown = document.createElement('i');
       chevronDown.classList.add("fas", "fa-chevron-down");
 
       toggle.appendChild(chevronDown);
 
       faq.appendChild(title);
       faq.appendChild(text);
       faq.appendChild(toggle);
 
       toggle.addEventListener("click", function () {
         faq.classList.toggle("active");
       });
 
       faqContainer.appendChild(faq);
     } else {
       alert("Both question and answer are required.");
     }
   }
 
   createFAQ();
}
);

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
   toggle.addEventListener('click', () => {
       const faq = toggle.parentNode;
       faq.classList.toggle('active');

       if (!faq.classList.contains('active'))
       {
           faq.remove();
       }
   })
})




 