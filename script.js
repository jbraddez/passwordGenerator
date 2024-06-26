function generate() {
    let length = Math.floor(Math.random() * (14 - 8 + 1)) + 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+:;?><,./";
    let password = "";

    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    let text = document.getElementById('display');
    text.value = password;
}

function copy() {
    let text = document.getElementById('display');
    onDis = text.value;

    navigator.clipboard.writeText(text.value)
        .then(() => {
            text.value = 'Copied!';
            setTimeout(() => {
                text.value = onDis;
            }, 500);
    
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}

let button = document.getElementById('generate');
button.addEventListener('click', generate);
