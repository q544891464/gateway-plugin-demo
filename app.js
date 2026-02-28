const data = [
    {
        title: "安全类",
        iconClass: "fa-solid fa-shield-halved safe-icon",
        plugins: [
            { id: "smart-safe", name: "智能保险箱", icon: "fa-solid fa-vault", videoUrl: "https://example.com/video/smart-safe" },
            { id: "behavior", name: "上网行为管理", icon: "fa-solid fa-user-shield", videoUrl: "https://example.com/video/behavior" }
        ]
    },
    {
        title: "加速类",
        iconClass: "fa-solid fa-bolt speed-icon",
        plugins: [
            { id: "acceleration", name: "网络加速", icon: "fa-solid fa-rocket", videoUrl: "https://example.com/video/acceleration" },
            { id: "uplink", name: "超级上行", icon: "fa-solid fa-cloud-arrow-up", videoUrl: "https://example.com/video/uplink" }
        ]
    },
    {
        title: "组网类",
        iconClass: "fa-solid fa-network-wired net-icon",
        plugins: [
            { id: "wifi-opt", name: "一键Wifi优化", icon: "fa-solid fa-wifi", videoUrl: "https://example.com/video/wifi-opt" }
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
            card.href = plugin.videoUrl; // The link will navigate here
            card.target = "_blank";      // Open videos in a new tab
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
