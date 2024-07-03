const apps = [
    {
        "id": "_1",
        "title": "Vanquish Todo",
        "link": "https://vanquish-todo.netlify.app/",
        "img": "https://vanquish-todo.netlify.app/vite.svg"
    },
    {
        "id": "_2",
        "title": "Iris Bot",
        "link": "https://iris-ai.netlify.app/",
        "img": "https://iris-ai.netlify.app/iris.jpeg"
    },
    {
        "id": "_3",
        "title": "Sekai Music Player",
        "link": "https://sekai-player.netlify.app/",
        "img": "https://sekai-player.netlify.app/images/favicon.jpeg"
    },
    {
        "id": "_4",
        "title": "Tic Tac Toe Game",
        "link": "https://tictac99.netlify.app/",
        "img": "https://tictac99.netlify.app/vite.svg"
    },
    {
        "id": "_5",
        "title": "Currency Convertor",
        "link": "https://vanquish-currency-convertor.netlify.app/",
        "img": "https://vanquish-currency-convertor.netlify.app/vite.svg"
    },
    {
        "id": "_6",
        "title": "Password Generator",
        "link": "https://passgenrt.netlify.app/",
        "img": "https://passgenrt.netlify.app/vite.svg"
    },
    {
        "id": "_7",
        "title": "Background Changer",
        "link": "https://bg-changer7023.netlify.app/",
        "img": "https://bg-changer7023.netlify.app/vite.svg"
    },
    {
        "id": "_8",
        "title": "GitHub Data Fetcher",
        "link": "https://github-data-fetcher.netlify.app/",
        "img": "https://github-data-fetcher.netlify.app/favicon.ico"
    },
    {
        "id": "_9",
        "title": "MonsterTap Game",
        "link": "https://monstertap.netlify.app/",
        "img": "https://monstertap.netlify.app/favicon.ico"
    },
    {
        "id": "_10",
        "title": "Color Picker",
        "link": "https://pickerz.netlify.app/",
        "img": "https://pickerz.netlify.app/favicon.ico"
    },
    {
        "id": "_11",
        "title": "Sigma Colors",
        "link": "https://sigmacolors.netlify.app/",
        "img": "https://sigmacolors.netlify.app/favicon.ico"
    },
    {
        "id": "_12",
        "title": "Fitbar",
        "link": "https://fitbar.netlify.app/",
        "img": "https://fitbar.netlify.app/favicon.ico"
    },
    {
        "id": "_13",
        "title": "Personaforge",
        "link": "https://personaforge.netlify.app/",
        "img": "https://personaforge.netlify.app/favicon.ico"
    },
    {
        "id": "_14",
        "title": "Noris",
        "link": "https://noris.netlify.app/",
        "img": "https://noris.netlify.app/favicon.ico"
    },
    {
        "id": "_15",
        "title": "Shadow Text Editor",
        "link": "https://shadowtext.netlify.app/",
        "img": "https://shadowtext.netlify.app/favicon.ico"
    },
    {
        "id": "_16",
        "title": "BBC News",
        "link": "https://bbcnews-clone.netlify.app/",
        "img": "https://static.files.bbci.co.uk/core/website/assets/static/icons/favicon/news/favicon-32.5cf4e6db028a596f5dc3.png"
    },
];



// Sort apps array by title
apps.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
    return 0;
});

export default apps;