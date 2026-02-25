document.addEventListener('DOMContentLoaded', () => {
    // Exercițiul 1: Salut personalizat
    const headerGreeting = document.querySelector('header p');
    if (headerGreeting) {
        const hour = new Date().getHours();
        let greeting = "";

        if (hour >= 6 && hour < 12) {
            greeting = "Bună dimineața! Bine ai venit pe pagina mea.";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Bună ziua! Bine ai venit pe pagina mea.";
        } else {
            greeting = "Bună seara! Bine ai venit pe pagina mea.";
        }
        headerGreeting.textContent = greeting;
    }

    // Exercițiul 2: Validare formular
    const contactForm = document.querySelector('form');
    const feedback = document.createElement('p');
    feedback.id = "form-feedback";
    
    if (contactForm) {
        contactForm.appendChild(feedback);

        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();

            let errors = [];

            if (name.length < 2) errors.push("Nume prea scurt!");
            if (!email.includes('@')) errors.push("Email invalid!");
            if (message.length < 10) errors.push("Mesajul trebuie să aibă minim 10 caractere!");

            if (errors.length > 0) {
                feedback.textContent = errors.join(" ");
                feedback.style.color = 'red';
            } else {
                feedback.textContent = `Mulțumim, ${name}! Mesajul a fost trimis.`;
                feedback.style.color = 'green';
                contactForm.reset();
            }
        });
    }

    // Exercițiul 3: Dark Mode
    const navList = document.querySelector('nav ul');
    if (navList) {
        const darkModeBtn = document.createElement('li');
        darkModeBtn.id = "theme-toggle";
        darkModeBtn.style.cursor = "pointer";
        darkModeBtn.textContent = "Dark Mode";
        navList.appendChild(darkModeBtn);

        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            darkModeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
        });
    }

    // Exercițiul 4: Toggle vizibilitate secțiuni
    const sectionTitles = document.querySelectorAll('main h2');
    sectionTitles.forEach(title => {
        title.style.cursor = "pointer";
        title.textContent = `▼ ${title.textContent}`;

        title.addEventListener('click', () => {
            let nextEl = title.nextElementSibling;
            while (nextEl && nextEl.tagName !== 'H2') {
                nextEl.classList.toggle('hidden');
                nextEl = nextEl.nextElementSibling;
            }
            title.textContent = title.textContent.startsWith('▼') 
                ? title.textContent.replace('▼', '▶') 
                : title.textContent.replace('▶', '▼');
        });
    });

    // Exercițiu Bonus: Back to top
    const backToTop = document.createElement('button');
    backToTop.textContent = "↑";
    backToTop.style.cssText = "position:fixed; bottom:20px; right:20px; display:none; padding:10px;";
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});