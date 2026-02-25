document.addEventListener('DOMContentLoaded', () => {
    const headerGreeting = document.querySelector('header p');
    if (headerGreeting) {
        const hour = new Date().getHours();
        let greeting = "";
        if (hour >= 6 && hour < 12) greeting = "Bună dimineața! Bine ai venit pe pagina mea.";
        else if (hour >= 12 && hour < 18) greeting = "Bună ziua! Bine ai venit pe pagina mea.";
        else greeting = "Bună seara! Bine ai venit pe pagina mea.";
        headerGreeting.textContent = greeting;
    }

    const contactForm = document.querySelector('form');
    const feedback = document.createElement('p');
    feedback.id = "form-feedback";
    if (contactForm) {
        contactForm.appendChild(feedback);
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const nume = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const mesaj = document.getElementById("message").value.trim();
            let errors = [];
            if (nume.length < 2) errors.push("Nume prea scurt!");
            if (!email.includes('@')) errors.push("Email invalid!");
            if (mesaj.length < 10) errors.push("Mesajul trebuie să aibă minim 10 caractere!");
            if (errors.length > 0) {
                feedback.textContent = errors.join(" ");
                feedback.style.color = 'red';
            } else {
                feedback.textContent = `Mulțumim, ${nume}! Mesajul a fost trimis.`;
                feedback.style.color = 'green';
                contactForm.reset();
            }
        });
    }

    const navList = document.querySelector('nav ul');
    if (navList) {
        const darkModeBtn = document.createElement('li');
        darkModeBtn.style.cursor = "pointer";
        darkModeBtn.textContent = "Dark Mode";
        navList.appendChild(darkModeBtn);
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
             darkModeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
        });
    }
});
    