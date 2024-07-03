import apps from './data/apps.js';

apps.sort();

console.log(apps);

$(document).ready(function () {
    // const apps = [
    //     { id: "_1", title: "Vanquish Todo", link: "https://vanquish-todo.netlify.app/", img: "https://vanquish-todo.netlify.app/vite.svg" },
    //     { id: "_2", title: "Iris Bot", link: "https://iris-ai.netlify.app/", img: "https://iris-ai.netlify.app/iris.jpeg" }
    // ];

    // Application listing
    apps.forEach((item) => {
        const application = `<li id="${item.id}" class="app-item">
                            <a href="#">
                                <img src="${item.img}" alt="A" class="app-img flex">
                                <p>${item.title}</p>
                            </a>
                        </li>`;
        $('#app-list').append(application);
    });

    let menuVisible = false;

    // Start Menu
    $('#startBtn').click(function () {
        if (menuVisible) {
            $('#menu').removeClass('slideInUp').addClass('slideOutDown');
            setTimeout(() => {
                $('#menu').hide();
            }, 500);
        } else {
            $('#menu').show().removeClass('slideOutDown').addClass('slideInUp');
        }
        menuVisible = !menuVisible;
    });

    // Function to create a new custom window
    function createCustomWindow(app) {
        const windowId = `window_${app.id}`;
        const customWindow = $(`<div id="${windowId}" class="custom-window">
                              <div class="custom-window-header">
                                <span>${app.title}</span>
                                <div class="buttons">
                                  <button class="minimizeBtn">_</button>
                                  <button class="maximizeBtn">□</button>
                                  <button class="closeBtn">X</button>
                                </div>
                              </div>
                              <div class="custom-window-content">
                                <iframe src="${app.link}" width="100%" height="100%"></iframe>
                              </div>
                            </div>`);

        $('#screen').append(customWindow);

        let isMaximized = false;
        const originalSize = { width: customWindow.width(), height: customWindow.height() };
        const originalPosition = { top: customWindow.position().top, left: customWindow.position().left };

        customWindow.draggable({
            handle: ".custom-window-header",
            containment: "#screen"
        }).resizable({
            containment: "#screen"
        });

        customWindow.find('.closeBtn').click(function () {
            customWindow.remove();
            $(`#taskbar_${app.id}`).remove();
        });

        customWindow.find('.minimizeBtn').click(function () {
            if (customWindow.is(':visible')) {
                customWindow.hide();
                $(`#taskbar_${app.id}`).addClass('minimized');
            } else {
                customWindow.show();
                $(`#taskbar_${app.id}`).removeClass('minimized');
            }
        });

        customWindow.find('.maximizeBtn').click(function () {
            if (isMaximized) {
                customWindow.css({
                    width: originalSize.width,
                    height: originalSize.height,
                    top: originalPosition.top,
                    left: originalPosition.left
                });
                isMaximized = false;
            } else {
                originalSize.width = customWindow.width();
                originalSize.height = customWindow.height();
                originalPosition.top = customWindow.position().top;
                originalPosition.left = customWindow.position().left;
                customWindow.css({
                    top: 0,
                    left: 0,
                    width: $('#screen').width(),
                    height: $('#screen').height()
                });
                isMaximized = true;
            }
        });

        customWindow.on("dragstop", function (event, ui) {
            const outOfBounds = ui.position.top < 0 || ui.position.left < 0 ||
                (ui.position.top + customWindow.height()) > $('#screen').height() ||
                (ui.position.left + customWindow.width()) > $('#screen').width();
            if (outOfBounds && !isMaximized) {
                customWindow.css({
                    top: 0,
                    left: 0,
                    width: $('#screen').width(),
                    height: $('#screen').height()
                });
                isMaximized = true;
            }
        });

        customWindow.show();

        // Add icon to taskbar
        const taskbarIcon = $(`<div id="taskbar_${app.id}" class="taskbar-icon">
                                <img src="${app.img}" alt="${app.title}">
                              </div>`);
        $('#taskbar-apps').append(taskbarIcon);

        // Taskbar icon click event
        taskbarIcon.click(function () {
            if (customWindow.is(':visible')) {
                customWindow.hide();
                taskbarIcon.addClass('minimized');
            } else {
                customWindow.show();
                taskbarIcon.removeClass('minimized');
            }
        });
    }

    // Click event handler for list items
    $('#app-list').on('click', '.app-item', function (event) {
        event.preventDefault();
        const appId = $(this).attr('id');
        const app = apps.find(app => app.id === appId);
        createCustomWindow(app);
    });
});
