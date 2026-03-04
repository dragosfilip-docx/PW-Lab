document.addEventListener('DOMContentLoaded', () => {
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

    const contactForm = document.querySelector('form');
    const feedback = document.createElement('p');
    feedback.id = "form-feedback";
    
    if (contactForm) {
        contactForm.appendChild(feedback);
    }

    window.submitForm = function() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nume = nameInput.value.trim();
        const email = emailInput.value.trim();
        const mesaj = messageInput.value.trim();

        console.log("Nume:", nume);
        console.log("Email:", email);
        console.log("Mesaj:", mesaj);

        let errors = [];
        if (nume.length < 2) errors.push("Nume prea scurt!");
        if (!email.includes('@')) errors.push("Email invalid!");
        if (mesaj.length < 10) errors.push("Mesajul trebuie să aibă minim 10 caractere!");
        
        if (errors.length > 0) {
            feedback.textContent = errors.join(" ");
            feedback.style.color = '#ff4d4d';
        } else {
            feedback.textContent = `Mulțumim, ${nume}! Mesajul a fost trimis.`;
            feedback.style.color = '#2ecc71';
            if (contactForm) contactForm.reset();
        }

        console.warn("Goodbye World!");
    };

    const navList = document.querySelector('nav ul');
    if (navList) {
        const darkModeBtn = document.createElement('li');
        darkModeBtn.id = "theme-toggle";
        darkModeBtn.textContent = "Dark Mode";
        navList.appendChild(darkModeBtn);
        
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            darkModeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
        });
    }
});