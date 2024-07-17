const checkBtn = document.getElementById('check-btn');
const resultText = document.getElementById('result');

function checkPalindrome(str) {
    str = str.replace(/\s/g, '');
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    str = str.toLowerCase();
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

checkBtn.addEventListener('click', function (e) {
    e.preventDefault();
    
    const text = document.getElementById('text-input').value;

    if (!text) {
        alert("Please input a value");
        return
    }

    if (checkPalindrome(text)) {
        resultText.innerHTML = `<strong>${text}</strong> is a palindrome`;
    } else {
        resultText.innerHTML = `<strong>${text}</strong> is not a palindrome`;
    }
})