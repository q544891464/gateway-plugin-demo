const data = [
    {
        title: "安全类",
        iconClass: "fa-solid fa-shield-halved safe-icon",
        plugins: [
            { id: "smart-safe", name: "智能保险箱", icon: "fa-solid fa-vault", videoUrl: "video/智能保险箱.mp4" },
            { id: "behavior", name: "应用控制", icon: "fa-solid fa-user-shield", videoUrl: "video/应用控制.mp4" }
        ]
    },
    {
        title: "加速类",
        iconClass: "fa-solid fa-bolt speed-icon",
        plugins: [
            { id: "acceleration", name: "网络加速", icon: "fa-solid fa-rocket", videoUrl: "video/网络加速.mp4" },
            { id: "uplink", name: "超级上行", icon: "fa-solid fa-cloud-arrow-up", videoUrl: "video/超级上行.mp4" }
        ]
    },
    {
        title: "组网类",
        iconClass: "fa-solid fa-network-wired net-icon",
        plugins: [
            { id: "wifi-opt", name: "一键Wifi优化", icon: "fa-solid fa-wifi", videoUrl: "video/一键wifi优化.mp4" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('categories-container');

    data.forEach((category, index) => {
        // Create section for each category
        const section = document.createElement('section');
        section.className = 'category-section';

        // Title
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.innerHTML = `<i class="${category.iconClass} category-icon"></i> ${category.title}`;
        section.appendChild(title);

        // Plugins grid
        const grid = document.createElement('div');
        grid.className = 'plugins-grid';

        category.plugins.forEach(plugin => {
            // Plugin Card
            const card = document.createElement('a');
            card.className = 'plugin-card';
            card.href = `player.html?src=${encodeURIComponent(plugin.videoUrl)}&name=${encodeURIComponent(plugin.name)}`; // The link will navigate to player page
            card.target = "_self";      // Open videos in same tab for better mobile experience
            card.dataset.id = plugin.id;

            card.innerHTML = `
                <div class="plugin-icon-wrapper">
                    <i class="${plugin.icon}"></i>
                </div>
                <div class="plugin-name">${plugin.name}</div>
                <div class="play-badge"><i class="fa-solid fa-play"></i></div>
            `;

            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
});
