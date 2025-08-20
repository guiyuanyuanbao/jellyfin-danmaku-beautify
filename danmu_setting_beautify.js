// ==UserScript==
// @name         Jellyfin弹幕插件美化版
// @description  Jellyfin弹幕插件美化主题 - 紫粉渐变主题
// @namespace    https://github.com/guiyuanyuanbao
// @author       guiyuanyuanbao
// @version      1.0
// @copyright    2025, guiyuanyuanbao
// @license      MIT
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @connect      *
// @match        *://*/*/web/index.html
// @match        *://*/web/index.html
// @match        *://*/*/web/
// @match        *://*/web/
// @match        https://jellyfin-web.pages.dev/
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    console.log('🎨 Jellyfin弹幕插件美化版已加载');
    
    // 新的渐变色主题配置
    const themeColors = {
        // 主渐变色：紫色到蓝色
        primaryGradient: 'linear-gradient(135deg, rgb(169, 91, 194), rgb(0, 164, 219))',
        // 主色调 - 紫色
        primary: 'rgb(169, 91, 194)',
        primaryRgba: 'rgba(169, 91, 194, 1)',
        // 次要色调 - 蓝色  
        secondary: 'rgb(0, 164, 219)',
        secondaryRgba: 'rgba(0, 164, 219, 1)',
        // 透明变体
        primaryLight: 'rgba(169, 91, 194, 0.1)',
        primaryMedium: 'rgba(169, 91, 194, 0.3)',
        primaryDark: 'rgba(169, 91, 194, 0.8)',
        secondaryLight: 'rgba(0, 164, 219, 0.1)',
        secondaryMedium: 'rgba(0, 164, 219, 0.3)',
        secondaryDark: 'rgba(0, 164, 219, 0.8)',
        // 混合渐变透明色 - 多层次透明度
        gradientUltraLight: 'linear-gradient(135deg, rgba(169, 91, 194, 0.02), rgba(0, 164, 219, 0.02))',
        gradientLight: 'linear-gradient(135deg, rgba(169, 91, 194, 0.05), rgba(0, 164, 219, 0.05))',
        gradientMediumLight: 'linear-gradient(135deg, rgba(169, 91, 194, 0.08), rgba(0, 164, 219, 0.08))',
        gradientMedium: 'linear-gradient(135deg, rgba(169, 91, 194, 0.15), rgba(0, 164, 219, 0.15))',
        gradientMediumStrong: 'linear-gradient(135deg, rgba(169, 91, 194, 0.25), rgba(0, 164, 219, 0.25))',
        gradientStrong: 'linear-gradient(135deg, rgba(169, 91, 194, 0.35), rgba(0, 164, 219, 0.35))',
    };
    
    // 等待页面加载完成
    function waitForElement(selector, callback) {
        const observer = new MutationObserver((mutations, obs) => {
            const element = document.querySelector(selector);
            if (element) {
                obs.disconnect();
                callback(element);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        // 如果元素已存在，直接调用回调
        const existingElement = document.querySelector(selector);
        if (existingElement) {
            callback(existingElement);
        }
    }
    
    // 创建美化样式
    function createBeautifyStyle() {
        const style = document.createElement('style');
        style.id = 'jellyfin-danmaku-beautify-theme';
        style.textContent = `
        /* Jellyfin弹幕插件美化主题 - 紫粉渐变版 */
        
        /* 统一滚动条样式 */
        .danmakuSidebar .danmakuSettingsContainer::-webkit-scrollbar,
        .danmakuTabsContainer::-webkit-scrollbar {
            width: 6px;
            height: 4px;
        }

        .danmakuSidebar .danmakuSettingsContainer::-webkit-scrollbar-track,
        .danmakuTabsContainer::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
        }

        .danmakuSidebar .danmakuSettingsContainer::-webkit-scrollbar-thumb,
        .danmakuTabsContainer::-webkit-scrollbar-thumb {
            background: ${themeColors.primaryGradient} !important;
            border-radius: 3px;
        }

        /* 控制卡片悬停效果 */
        .controlCard::before {
            background: ${themeColors.gradientUltraLight} !important;
        }

        .controlCard:hover::before {
            background: ${themeColors.gradientLight} !important;
        }

        /* 滑块相关样式 */
        .danmakuSidebar input[type="range"] {
            background: ${themeColors.primaryGradient} !important;
        }

        .danmakuSidebar input[type="range"]::-webkit-slider-thumb,
        .danmakuSidebar input[type="range"]::-moz-range-thumb {
            background: ${themeColors.primaryGradient} !important;
            box-shadow: 0 2px 6px ${themeColors.primaryMedium} !important;
        }

        .danmakuSidebar input[type="range"]::-webkit-slider-thumb:hover {
            box-shadow: 0 3px 8px ${themeColors.primaryMedium} !important;
        }

        /* 滑块值标签样式 */
        .danmakuSidebar .range-value-label {
            background: ${themeColors.primaryGradient} !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            border: 1px solid ${themeColors.primaryMedium} !important;
        }

        .danmakuSidebar .range-value-label:hover {
            background: ${themeColors.gradientMediumStrong} !important;
            -webkit-background-clip: text !important;
            border-color: ${themeColors.primaryMedium} !important;
            background-clip: text !important;
        }

        /* 侧边栏按钮样式 */
        .danmakuSidebarSaveButton {
            background: ${themeColors.primaryGradient} !important;
        }

        .danmakuSidebarSaveButton:hover {
            box-shadow: 0 4px 12px ${themeColors.primaryMedium} !important;
        }

        /* 对话框确认按钮 */
        #dialogConfirm,
        .dialogConfirmButton {
            background: ${themeColors.primaryGradient} !important;
        }

        #dialogConfirm:hover,
        .dialogConfirmButton:hover {
            background: ${themeColors.primaryGradient} !important;
        }

        /* 选择对话框滚动条 */
        .selectDialogList::-webkit-scrollbar-thumb {
            background: ${themeColors.primaryMedium} !important;
        }

        .selectDialogList::-webkit-scrollbar-thumb:hover {
            background: ${themeColors.primaryRgba} !important;
        }

        /* 选择对话框选项 */
        .select-dialog-item.selected {
            background: ${themeColors.gradientMediumStrong} !important;
        }

        .select-dialog-item:hover:not(.selected) {
            background: ${themeColors.gradientUltraLight} !important;
        }

        /* 标签页按钮激活状态 */
        .danmaku-tab-button.active {
            background: ${themeColors.primaryGradient} !important;
        }

        /* 标签页容器滚动条 */
        .danmakuTabsContainer {
            scrollbar-color: ${themeColors.primaryMedium} rgba(0, 0, 0, 0.1) !important;
        }

        /* 开关卡片和其他卡片的渐变背景 */
        .danmakuSwitchCard,
        .logSwitchCard,
        .searchItemCard,
        .addSourceItemCard {
            background: ${themeColors.gradientUltraLight} !important;
            border: 1px solid rgba(169, 91, 194, 0.15) !important;
        }

        .danmakuSwitchCard:hover {
            background: ${themeColors.gradientMediumLight} !important;
            border-color: ${themeColors.primaryMedium} !important;
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px ${themeColors.primaryMedium} !important;
        }

        /* 复选框和单选框选中状态 */
        .danmakuSidebar input[type="checkbox"]:checked,
        .danmakuSidebar input[type="radio"]:checked,
        danmakuSidebar input[type="checkbox"]:hover:not(:checked),
        .danmakuSidebar input[type="radio"]:hover:not(:checked) {
            background: ${themeColors.primaryGradient} !important;
            border-color: ${themeColors.primaryRgba} !important;
        }

        /* 选择器下拉框选中项 */
        .danmakuSidebar select option:checked {
            background: ${themeColors.primaryLight} !important;
        }

        /* 输入框焦点状态 */
        .danmakuSidebar input[type="text"]:focus,
        .danmakuSidebar input[type="number"]:focus,
        .danmakuSidebar textarea:focus,
        .danmakuSidebar select:focus {
            border-color: ${themeColors.primaryRgba} !important;
            box-shadow: 0 0 0 2px ${themeColors.primaryLight} !important;
        }

        /* 特定输入框的增强焦点效果 */
        input#danmakuFontFamily:focus,
        input#danmakuOffsetTime:focus,
        input#danmakuFontOptions:focus,
        input#dialogInput:focus,
        input.custom-input-field:focus {
            background: ${themeColors.gradientMedium} !important;
            border-color: ${themeColors.primaryMedium} !important;
            box-shadow: 
                0 0 0 3px ${themeColors.primaryLight},
                0 5px 10px ${themeColors.primaryMedium},
                inset 0 1px 2px rgba(255, 255, 255, 0.2),
                inset 0 -1px 1px rgba(0, 0, 0, 0.05) !important;
            outline: none !important;
            transform: translateY(-1px) scale(1.01) !important;
        }

        /* 侧边栏标题渐变效果 */
        .danmakuSidebarTitle {
            background: ${themeColors.primaryGradient} !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            font-weight: 700 !important;
        }

        /* 为侧边栏添加整体渐变边框效果 */
        .danmakuSidebar {
            border-left: 3px solid transparent !important;
            background-image: 
                linear-gradient(rgba(18, 18, 20, 0.95), rgba(18, 18, 20, 0.95)),
                ${themeColors.primaryGradient} !important;
            background-origin: border-box !important;
            background-clip: padding-box, border-box !important;
        }

        /* checkbox选中状态渐变色 */
        .checkbox-item-parent.checked {
            background: ${themeColors.gradientMediumStrong} !important;
            border-color: ${themeColors.primaryMedium} !important;
            box-shadow-color: ${themeColors.primaryMedium} !important;
        }

        .checkbox-item-parent.checked:hover {
            background: ${themeColors.gradientStrong} !important;
            border-color: ${themeColors.primaryMedium} !important;
            box-shadow-color: ${themeColors.primaryMedium} !important;
        }

        .checkbox-item-parent.unchecked:hover {
            background: ${themeColors.gradientMediumLight} !important;
            border-color: ${themeColors.primaryLight} !important;
            box-shadow-color: ${themeColors.primaryLight} !important;
        }

        .checkbox-item-parent:hover .checkbox-item-custom:not(.checked) {
            border: 2px solid ${themeColors.primaryDark} !important;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(0, 164, 220, 0.1)) !important;
            transform: scale(1.1) !important;
        }

        /* modernSlider打开状态渐变色 */
        .modernSlider.checked,
        .modernSlider:checked,
        .modernSwitch input:checked + .modernSlider {
            background: ${themeColors.primaryGradient} !important;
        }

        .modernSlider.checked:hover,
        .modernSlider:checked:hover,
        .modernSwitch input:checked + .modernSlider:hover {
            background: ${themeColors.gradientMediumStrong} !important;
        }

        /* 增强的按钮和卡片悬停效果 */
        .danmaku-tab-button:hover:not(.active) {
            background: ${themeColors.gradientMediumLight} !important;
        }

        /* 输入框和文本域的一般悬停效果 */
        .danmakuSidebar input[type="text"]:hover:not(:focus),
        .danmakuSidebar input[type="number"]:hover:not(:focus),
        .danmakuSidebar textarea:hover:not(:focus),
        .danmakuSidebar select:hover:not(:focus) {
            background: ${themeColors.gradientUltraLight} !important;
            border-color: ${themeColors.primaryLight} !important;
        }

        /* 对话框背景增强 */
        .inputDialog,
        .selectDialog {
            background: radial-gradient(ellipse at center, rgba(20, 20, 25, 0.7), rgba(15, 15, 20, 0.8)), 
                        ${themeColors.gradientUltraLight} !important;
        }

        /* 动画效果增强 */
        @keyframes pulseGradient {
            0%, 100% { 
                box-shadow: 0 0 20px ${themeColors.primaryMedium};
            }
            50% { 
                box-shadow: 0 0 30px ${themeColors.primaryMedium}, 0 0 40px ${themeColors.secondaryMedium};
            }
        }

        .danmakuSidebarSaveButton:hover {
            animation: pulseGradient 2s infinite !important;
        }

        /* 为整个插件界面添加微妙的渐变光效 */
        .danmakuSidebar::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, ${themeColors.primaryLight} 0%, transparent 70%);
            opacity: 0.1;
            pointer-events: none;
            z-index: -1;
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        `;
        
        return style;
    }
    
    // 应用美化主题
    function applyBeautifyTheme() {
        // 移除旧的样式
        const oldStyle = document.getElementById('jellyfin-danmaku-beautify-theme');
        if (oldStyle) {
            oldStyle.remove();
        }
        
        // 添加新的美化样式
        const style = createBeautifyStyle();
        document.head.appendChild(style);
        
        console.log('🎨 Jellyfin弹幕插件美化主题已应用');
    }
    
    // 监听DOM变化，确保样式持续生效
    function observeStyleChanges() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                // 检查是否有弹幕插件相关的样式被添加或修改
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.tagName === 'STYLE') {
                        // 如果检测到原始插件的样式，重新应用美化主题
                        if (node.textContent && node.textContent.includes('danmakuSidebar')) {
                            setTimeout(() => {
                                applyBeautifyTheme();
                            }, 100);
                        }
                    }
                });
            });
        });
        
        observer.observe(document.head, {
            childList: true,
            subtree: true
        });
        
        // 也监听body，防止样式被动态添加到body中
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // 主初始化函数
    function init() {
        // 立即应用主题
        applyBeautifyTheme();
        
        // 开始监听变化
        observeStyleChanges();
        
        // 定期检查并重新应用主题（备用机制）
        setInterval(() => {
            if (!document.getElementById('jellyfin-danmaku-beautify-theme')) {
                applyBeautifyTheme();
            }
        }, 5000);
        
        console.log('🎨 Jellyfin弹幕插件美化版初始化完成');
    }
    
    // 等待页面基本加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // 确保在页面完全加载后再次应用
    window.addEventListener('load', () => {
        setTimeout(applyBeautifyTheme, 1000);
    });
    
})();
