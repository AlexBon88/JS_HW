let viewPage;
if (localStorage.getItem('viewPage')) {
    viewPage = JSON.parse(localStorage.getItem('viewPage'));
} else {
    viewPage = [];
}
viewPage.push(new Date());
localStorage.setItem('viewPage', JSON.stringify(viewPage));
