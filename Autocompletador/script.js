const championInput = document.getElementById('champion-input');
const autocompleteList = document.getElementById('autocomplete-list');
const resultBox = document.getElementById('result-box');
const resultText = document.getElementById('result-text');

// Lista de campeones de top 
const champions = [
    'Aatrox', 'Akali', 'Camille', 'Darius', 'Dr. Mundo', 'Fiora', 
    'Garen', 'Gnar', 'Gragas', 'GP', 'Gwen', 'Illaoi', 'Irelia', 
    'Jax', 'Jayce', 'Kayle', 'Ksante', 'Kennen', 'Kled', 'Malphite', 
    'Maokai', 'Nasus', 'Ornn', 'Pantheon', 'Poppy', 'Quinn', 
    'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sett', 
    'Shen', 'Shyvana', 'Sion', 'Singed', 'Swain', 'Sylas', 
    'Tahm Kench', 'Teemo', 'Tryndamere', 'Urgot', 'Vayne', 'Vladimir', 
    'Volibear', 'Warwick', 'Wukong', 'Yasuo', 'Yone', 'Yorick', 
    'Zac'
];

// Mapeo de campeones a texto predefinido
const championLore = {
    'Rumble': 'TP - Escudo de Doran - Protobelt',
    'Aatrox': 'TP - Anillo de Doran - Riftmaker',
    'Olaf': 'Ignite - Anillo de Doran - Riftmaker',
    'Ornn': 'TP - Anillo de Doran - Riftmaker',
    'Jax': 'TP - Escudo de Doran - Riftmaker !PERMABAN!',
    'Fiora': 'TP - Anillo de Doran - Rush corta curas AP - Riftmaker',
    'Camille': 'TP - Anillo de Doran - Riftmaker',
    'Ksante': 'TP - Anillo de Doran - Riftmaker',
    'Pantheon': 'TP - Anillo de Doran - Riftmaker',
    'Gnar': 'TP - Escudo de Doran - Protobelt',
    'Darius': 'Ignite - Anillo de Doran - Riftmaker',
    'Kled': 'TP - Anillo de Doran - Protobelt',
    'GP': 'TP - Anillo de Doran - Protobelt',
    'Heimer': 'TP - Escudo de Doran - Rush mercs - Protobelt',
    'Renekton': 'TP - Anillo de Doran - Riftmaker',
    'Volibear': 'TP - Anillo de Doran - Riftmaker',
    'Illaoi': 'TP - Anillo de Doran - Riftmaker',
    'Nasus': 'Ignite - Escudo de Doran - Riftmaker',
    'Fiora': 'Ignite - Anillo de Doran - Riftmaker',

};

// Función para mostrar la lista de autocompletado
function displayList(matches) {
    autocompleteList.innerHTML = '';
    if (matches.length > 0) {
        matches.forEach(champion => {
            const li = document.createElement('li');
            li.textContent = champion;
            li.addEventListener('click', () => {
                championInput.value = champion;
                autocompleteList.style.display = 'none';
                displayResult(champion);
            });
            autocompleteList.appendChild(li);
        });
        autocompleteList.style.display = 'block';
    } else {
        autocompleteList.style.display = 'none';
    }
}

// Función para mostrar el resultado
function displayResult(champion) {
    const text = championLore[champion] || `No hay una descripción específica para ${champion}.`;
    resultText.textContent = text;
    resultBox.classList.add('visible');
}

// Evento de escucha para el input
championInput.addEventListener('input', (e) => {
    const inputValue = e.target.value.toLowerCase();
    
    // Ocultar el resultado si el input está vacío
    if (inputValue === '') {
        resultBox.classList.remove('visible');
        autocompleteList.style.display = 'none';
        return;
    }

    // Filtrar los campeones
    const matches = champions.filter(champion => 
        champion.toLowerCase().includes(inputValue)
    );

    displayList(matches);
});

// Ocultar la lista si se hace clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.autocomplete-wrapper')) {
        autocompleteList.style.display = 'none';
    }
});