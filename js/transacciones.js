
    const transactions = [
        {code: 14, status: "ERROR"},
        {code: 40, status: "ERROR"},
        {code: 61, status: "ERROR"},
        {code: 132, status: "ERROR"},
        {code: 136, status: "ERROR"},
        {code: 144, status: "ERROR"},
        {code: 198, status: "ERROR"},
        {code: 203, status: "ERROR"},
        {code: 217, status: "ERROR"},
        {code: 250, status: "ERROR"},
        {code: 252, status: "ERROR"},
        {code: 264, status: "ERROR"},
        {code: 268, status: "ERROR"},
        {code: 285, status: "ERROR"},
        {code: 292, status: "ERROR"},
        {code: 309, status: "ERROR"},
        {code: 322, status: "ERROR"},
        {code: 338, status: "ERROR"},
        {code: 375, status: "ERROR"},
        {code: 377, status: "ERROR"},
        {code: 383, status: "ERROR"},
        {code: 387, status: "ERROR"},
        {code: 391, status: "ERROR"},
        {code: 476, status: "ERROR"},
        {code: 481, status: "ERROR"},
        {code: 493, status: "ERROR"},
        {code: 514, status: "ERROR"},
        {code: 536, status: "ERROR"},
        {code: 689, status: "ERROR"},
        {code: 758, status: "ERROR"},
        {code: 765, status: "ERROR"},
        {code: 790, status: "ERROR"},
        {code: 801, status: "ERROR"},
        {code: 825, status: "ERROR"},
        {code: 839, status: "ERROR"},
        {code: 852, status: "ERROR"},
        {code: 876, status: "ERROR"},
        {code: 879, status: "ERROR"},
        {code: 896, status: "ERROR"},
        {code: 916, status: "ERROR"},
        {code: 984, status: "ERROR"},
        {code: 992, status: "ERROR"},
        {code: 26, status: "Rechazada"},
        {code: 27, status: "Rechazada"},
        {code: 57, status: "Rechazada"},
        {code: 65, status: "Rechazada"},
        {code: 74, status: "Rechazada"},
        {code: 83, status: "Rechazada"},
        {code: 107, status: "Rechazada"},
        {code: 110, status: "Rechazada"},
        {code: 119, status: "Rechazada"},
        {code: 128, status: "Rechazada"},
        {code: 147, status: "Rechazada"},
        {code: 148, status: "Rechazada"},
        {code: 165, status: "Rechazada"},
        {code: 176, status: "Rechazada"},
        {code: 190, status: "Rechazada"},
        {code: 191, status: "Rechazada"},
        {code: 209, status: "Rechazada"},
        {code: 241, status: "Rechazada"},
        {code: 253, status: "Rechazada"},
        {code: 280, status: "Rechazada"},
        {code: 287, status: "Rechazada"},
        {code: 289, status: "Rechazada"},
        {code: 293, status: "Rechazada"},
        {code: 311, status: "Rechazada"},
        {code: 317, status: "Rechazada"},
        {code: 342, status: "Rechazada"},
        {code: 353, status: "Rechazada"},
        {code: 357, status: "Rechazada"},
        {code: 390, status: "Rechazada"},
        {code: 393, status: "Rechazada"},
        {code: 403, status: "Rechazada"},
        {code: 405, status: "Rechazada"},
        {code: 410, status: "Rechazada"},
        {code: 427, status: "Rechazada"},
        {code: 453, status: "Rechazada"},
        {code: 455, status: "Rechazada"},
        {code: 462, status: "Rechazada"},
        {code: 463, status: "Rechazada"},
        {code: 464, status: "Rechazada"},
        {code: 465, status: "Rechazada"},
        {code: 469, status: "Rechazada"},
        {code: 472, status: "Rechazada"},
        {code: 473, status: "Rechazada"},
        {code: 480, status: "Rechazada"},
        {code: 489, status: "Rechazada"},
        {code: 522, status: "Rechazada"},
        {code: 545, status: "Rechazada"},
        {code: 560, status: "Rechazada"},
        {code: 567, status: "Rechazada"},
        {code: 569, status: "Rechazada"},
        {code: 573, status: "Rechazada"},
        {code: 612, status: "Rechazada"},
        {code: 613, status: "Rechazada"},
        {code: 619, status: "Rechazada"},
        {code: 633, status: "Rechazada"},
        {code: 634, status: "Rechazada"},
        {code: 636, status: "Rechazada"},
        {code: 640, status: "Rechazada"},
        {code: 672, status: "Rechazada"},
        {code: 691, status: "Rechazada"},
        {code: 695, status: "Rechazada"},
        {code: 696, status: "Rechazada"},
        {code: 699, status: "Rechazada"},
        {code: 703, status: "Rechazada"},
        {code: 720, status: "Rechazada"},
        {code: 726, status: "Rechazada"},
        {code: 730, status: "Rechazada"},
        {code: 735, status: "Rechazada"},
        {code: 768, status: "Rechazada"},
        {code: 771, status: "Rechazada"},
        {code: 791, status: "Rechazada"},
        {code: 807, status: "Rechazada"},
        {code: 815, status: "Rechazada"},
        {code: 862, status: "Rechazada"},
        {code: 868, status: "Rechazada"},
        {code: 881, status: "Rechazada"},
        {code: 891, status: "Rechazada"},
        {code: 901, status: "Rechazada"},
        {code: 906, status: "Rechazada"},
        {code: 946, status: "Rechazada"},
        {code: 971, status: "Rechazada"},
        {code: 973, status: "Rechazada"},
        {code: 976, status: "Rechazada"},
        {code: 987, status: "Rechazada"},
        {code: 990, status: "Rechazada"}
    ];

    
    const showErrorBtn = document.getElementById('showError');
    const showRejectedBtn = document.getElementById('showRejected');
    const showAllBtn = document.getElementById('showAll');
    const errorList = document.getElementById('errorList');
    const rejectedList = document.getElementById('rejectedList');
    const errorCount = document.getElementById('errorCount');
    const rejectedCount = document.getElementById('rejectedCount');
    const errorResults = document.getElementById('errorResults');
    const rejectedResults = document.getElementById('rejectedResults');

   
    function renderLists() {
        
        const errorTransactions = transactions.filter(t => t.status === "ERROR");
        const rejectedTransactions = transactions.filter(t => t.status === "Rechazada");
        
        
        errorCount.textContent = errorTransactions.length;
        rejectedCount.textContent = rejectedTransactions.length;
        
        
        errorList.innerHTML = errorTransactions.map(t => 
            `<div class="code-item error-item">${t.code}</div>`
        ).join('');
        
        rejectedList.innerHTML = rejectedTransactions.map(t => 
            `<div class="code-item rejected-item">${t.code}</div>`
        ).join('');
    }

    
    function showOnlyErrors() {
        errorResults.style.display = 'block';
        rejectedResults.style.display = 'none';
    }

    function showOnlyRejected() {
        errorResults.style.display = 'none';
        rejectedResults.style.display = 'block';
    }

    function showAll() {
        errorResults.style.display = 'block';
        rejectedResults.style.display = 'block';
    }

    
    showErrorBtn.addEventListener('click', showOnlyErrors);
    showRejectedBtn.addEventListener('click', showOnlyRejected);
    showAllBtn.addEventListener('click', showAll);

    
    renderLists();
    showAll();
