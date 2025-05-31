document.getElementById('downloadCSV').addEventListener('click', function() {
    
    const link = document.createElement('a');
    link.href = 'BBDD-Banco.csv';
    link.download = 'BBDD-Banco.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
