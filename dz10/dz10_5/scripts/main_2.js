const viewPage = JSON.parse(localStorage.getItem('viewPage'));
for (const view of viewPage) {
    const p = document.createElement('p');
    p.textContent = view.toString();
    document.body.appendChild(p);
}
