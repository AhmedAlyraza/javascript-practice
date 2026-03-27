function submitText() {
    let inputText = document.querySelector("#input-text-field");
    let inputValue = inputText.value;
    let vowelCounts = countVowels(inputValue);

    let tableBody = document.querySelector("#vowelTableBody");
    tableBody.innerHTML = ""; // clear old data

    for (let vowel in vowelCounts) {
        tableBody.innerHTML += `
            <tr>
                <td>${vowel}</td>
                <td>${vowelCounts[vowel]}</td>
            </tr>
        `;
    }

    document.querySelector(".result-box").style.display="block";

}
function countVowels(str) {
    let counts = {};
    let vowels = str.match(/[aeiou]/gi);

    if (vowels) {
        vowels.forEach(vowel => {
            vowel = vowel.toLowerCase();
            counts[vowel] = (counts[vowel] || 0) + 1;
        });
    }

    return counts;
}
function showText() {
    let inputText = document.querySelector("#input-text-field").value;

    let highlightedText = inputText.replace(/[aeiou]/gi, function(match) {
        return `<span style="color:red; font-weight:bold;">${match}</span>`;
    });

    document.querySelector("#text").innerHTML = highlightedText;
}