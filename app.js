function searchPage() {
    // Get the search term from the input
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Get the content of the page
    let content = document.getElementById('content');
    
    // Remove any previous highlights
    content.innerHTML = content.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
    
    // If search term is empty, exit the function
    if (searchTerm === "") return;
    
    // Find and highlight the search term
    let innerHTML = content.innerHTML.toLowerCase();
    let index = innerHTML.indexOf(searchTerm);
    
    if (index >= 0) { 
        let originalText = content.innerHTML.substring(index, index + searchTerm.length);
        content.innerHTML = content.innerHTML.replace(new RegExp(originalText, "gi"), `<span class="highlight">${originalText}</span>`);
    }
}
