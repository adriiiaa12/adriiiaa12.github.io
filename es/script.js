// WELCOME ALERT
alert("Hola! Gracias por visitar mi portfolio pero aún no está terminado. Sigo haciéndolo por lo que aún le faltan cosas. Para ver todos mis proyectos y todo lo que he programado en mi github -> adriiiaa12");


// HEADER SELECT OPTION CONFIGURATION
const options = document.querySelectorAll('.header nav a');

options.forEach(function(button) {
    button.addEventListener('click', function() {
        options.forEach(function(button){
            button.classList.remove('active');
        });
        this.classList.toggle('active');
    });
});


// MOBILE HEADER SELECT OPTION CONFIGURATION
const mobile_options = document.querySelectorAll('.menu-links li a');

mobile_options.forEach(function(button) {
    button.addEventListener('click', function() {
        mobile_options.forEach(function(button){
            button.classList.remove('active');
        });
        this.classList.toggle('active');
    });
});


// THEMES CHANGER CONFIGURATION
const themes = document.querySelectorAll('.theme');
const allObjects = document.querySelectorAll('*');

function toggleActiveThemes() {
    themes.forEach(theme => {
        theme.classList.toggle('active');
    });

    allObjects.forEach(all => {
        all.classList.toggle('dark');
    });
}

themes.forEach(theme => {
    theme.addEventListener('click', toggleActiveThemes);
});


// HAMBURGUER MENU (RESPONSIVE WEBSITE)
menu = document.querySelector('.menu-links');

function toggleMenu() {
    menu.classList.toggle('active');
}


// CONTACT SEND INFORMATION
const webhookUrl = 'https://discord.com/api/webhooks/1238970517059403927/dUZHRZfZbckd1QMtYC3nbXHeZuerCFyW7sV0wBxtezUTVcu1frb_xWD2AqlQYe4WV81n';

const form = document.querySelector('form');
const nameInput = document.querySelector('input[placeholder="Nombre"]');
const surnameInput = document.querySelector('input[placeholder="Apellido"]');
const emailInput = document.querySelector('input[placeholder="Correo"]');
const subjectInput = document.querySelector('input[placeholder="Asunto"]');
const messageInput = document.querySelector('textarea');
let lastMessageTime = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentTime = new Date().getTime();
    const elapsedTimeSinceLastMessage = currentTime - lastMessageTime;

    if (elapsedTimeSinceLastMessage >= 600000) {
        const name = nameInput.value;
        const surname = surnameInput.value;
        const email = emailInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;

        sendMessageToDiscord(name, surname, email, subject, message);
        lastMessageTime = currentTime;
    } else {
        const remainingTime = (600000 - elapsedTimeSinceLastMessage) / 60000;
        alert(`Tienes que esperar ${remainingTime.toFixed(2)} minutos antes de enviar otro mensage.`);
    }
});

function sendMessageToDiscord(name, surname, email, subject, message) {
    const content = `**Name:** \`\`\`${name}\`\`\`\n**Surname:** \`\`\`${surname}\`\`\`\n**Email:** \`\`\`${email}\`\`\`\n**Subject:** \`\`\`${subject}\`\`\`\n**Message:** \`\`\`${message}\`\`\``;

    const payload = {
        content: content,
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then((response) => {
        if (response.ok) {
            alert('Mensage enviado correctamente.');
            window.location.href = 'https://adriiiaa12.github.io#contact';
        } else {
            alert('Error al enviar el mensage');
        }
    })
    .catch((error) => {
        alert('Error:', error);
    });
}


// HIRE SERVICE SEND INFORMATION
