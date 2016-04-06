function searchButtonClicked() {
    try {
        var siteSearchTextBox = document.getElementById('siteSearchTextBox').value;
        if (siteSearchTextBox != '' && siteSearchTextBox != 'Search ...') {
            window.location.href = 'http://www.aspose.com/community/search/search-results.aspx?q=' + siteSearchTextBox;
        }
        return false;
    } catch (e) {
    }
}

function searchButtonPressed(event) {
    try {
        var keyCode = ('which' in event) ? event.which : event.keyCode;
        if (keyCode == 13) {
            return searchButtonClicked();
        }
        return false;
    } catch (e) {
    }    
}