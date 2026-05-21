const data = [
    {
        title: "安全类",
        iconClass: "fa-solid fa-shield-halved safe-icon",
        plugins: [
            { id: "smart-safe", name: "智能保险箱", icon: "fa-solid fa-vault", videoUrl: "http://182.92.153.82:8080/videos/zhinengbaoxianxiang.mp4" },
            { id: "behavior", name: "应用控制", icon: "fa-solid fa-user-shield", videoUrl: "http://182.92.153.82:8080/videos/yingyongkongzhi.mp4" },
            { id: "safe-cat", name: "安全猫防护版", icon: "fa-solid fa-cat", videoUrl: "http://182.92.153.82:8080/videos/anquanmao.mp4" }
        ]
    },
    {
        title: "营销类",
        iconClass: "fa-solid fa-bullhorn marketing-icon",
        plugins: [
            { id: "web-behavior", name: "上网行为管理", icon: "fa-solid fa-chart-line", videoUrl: "http://182.92.153.82:8080/videos/shangwangxingwei.mp4" }
        ]
    },
    {
        title: "加速类",
        iconClass: "fa-solid fa-bolt speed-icon",
        plugins: [
            { id: "acceleration", name: "网络加速", icon: "fa-solid fa-rocket", videoUrl: "http://182.92.153.82:8080/videos/wangluojiasu.mp4" },
            { id: "uplink", name: "超级上行", icon: "fa-solid fa-cloud-arrow-up", videoUrl: "http://182.92.153.82:8080/videos/chaojishangxing.mp4" }
        ]
    },
    {
        title: "组网类",
        iconClass: "fa-solid fa-network-wired net-icon",
        plugins: [
            { id: "wifi-opt", name: "一键WiFi优化", icon: "fa-solid fa-wifi", videoUrl: "http://182.92.153.82:8080/videos/wifiyouhua.mp4" }
        ]
    },
    {
        title: "高阶网关应用",
        iconClass: "fa-solid fa-layer-group advanced-icon",
        plugins: [
            { id: "deepseek", name: "DeepSeek", icon: "fa-solid fa-brain", videoUrl: "http://182.92.153.82:8080/videos/deepseek.mp4" },
            { id: "video-ai", name: "视频AI", icon: "fa-solid fa-clapperboard", videoUrl: "http://182.92.153.82:8080/videos/shipinjiankong.mp4" },
            { id: "security-brain", name: "安全大脑", icon: "fa-solid fa-shield-heart", videoUrl: "http://182.92.153.82:8080/videos/anquandanao.mp4" }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("categories-container");

    data.forEach((category) => {
        const section = document.createElement("section");
        section.className = "category-section";

        const title = document.createElement("h2");
        title.className = "category-title";
        title.innerHTML = `<i class="${category.iconClass} category-icon"></i> ${category.title}`;
        section.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "plugins-grid";

        category.plugins.forEach((plugin) => {
            const hasVideo = Boolean(plugin.videoUrl);
            const card = document.createElement(hasVideo ? "a" : "div");
            card.className = `plugin-card${hasVideo ? "" : " plugin-card-disabled"}`;
            card.dataset.id = plugin.id;

            if (hasVideo) {
                card.href = plugin.videoUrl;
                card.target = "_self";
            } else {
                card.setAttribute("aria-disabled", "true");
                card.title = "视频稍后配置";
            }

            card.innerHTML = `
                <div class="plugin-icon-wrapper">
                    <i class="${plugin.icon}"></i>
                </div>
                <div class="plugin-name">${plugin.name}</div>
                <div class="play-badge">
                    <i class="fa-solid ${hasVideo ? "fa-play" : "fa-clock"}"></i>
                </div>
                ${hasVideo ? "" : `<div class="plugin-note">${plugin.soon ? "稍后配置视频" : "待配置视频"}</div>`}
            `;

            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
});
