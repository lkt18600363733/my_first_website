// DOM元素
const homePage = document.getElementById('home-page');
const function1Page = document.getElementById('function1-page');
const function2Page = document.getElementById('function2-page');
const function1Output = document.getElementById('function1-output');
const function2Output = document.getElementById('function2-output');

// 导航按钮
const homeLink = document.getElementById('home-link');
const serviceLink = document.getElementById('service-link');
const aboutLink = document.getElementById('about-link');

// 功能卡片按钮
const feature1Btn = document.getElementById('feature1-btn');
const feature2Btn = document.getElementById('feature2-btn');

// 返回按钮
const backFromFunction1 = document.getElementById('back-from-function1');
const backFromFunction2 = document.getElementById('back-from-function2');

// 表单和按钮
const insuranceForm = document.getElementById('insurance-form');
const analyzeBtn = document.getElementById('analyze-btn');
const uploadArea = document.getElementById('upload-area');

// 导航函数
function showPage(pageToShow) {
    // 隐藏所有页面
    homePage.style.display = 'none';
    function1Page.classList.remove('active');
    function2Page.classList.remove('active');
    
    // 显示目标页面
    if (pageToShow === 'home') {
        homePage.style.display = 'block';
    } else if (pageToShow === 'function1') {
        function1Page.classList.add('active');
        // 重置输出区域
        function1Output.style.display = 'none';
    } else if (pageToShow === 'function2') {
        function2Page.classList.add('active');
        // 重置输出区域
        function2Output.style.display = 'none';
    }
    
    // 更新导航链接状态
    updateNavLinks(pageToShow);
}

// 更新导航链接状态
function updateNavLinks(activePage) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));
    
    if (activePage === 'home') {
        homeLink.classList.add('active');
    } else if (activePage === 'service') {
        serviceLink.classList.add('active');
    } else if (activePage === 'about') {
        aboutLink.classList.add('active');
    }
}

// 事件监听器
homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('home');
});

serviceLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('服务介绍页面正在建设中...');
    updateNavLinks('service');
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('关于我们页面正在建设中...');
    updateNavLinks('about');
});

feature1Btn.addEventListener('click', () => {
    showPage('function1');
});

feature2Btn.addEventListener('click', () => {
    showPage('function2');
});

backFromFunction1.addEventListener('click', () => {
    showPage('home');
});

backFromFunction2.addEventListener('click', () => {
    showPage('home');
});

// 功能1表单提交
insuranceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // 模拟处理时间
    const submitBtn = insuranceForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 分析中...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // 显示结果
        function1Output.style.display = 'block';
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // 滚动到结果区域
        function1Output.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
});

// 功能2分析按钮
analyzeBtn.addEventListener('click', () => {
    // 模拟处理时间
    const originalText = analyzeBtn.innerHTML;
    analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 分析中...';
    analyzeBtn.disabled = true;
    
    setTimeout(() => {
        // 显示结果
        function2Output.style.display = 'block';
        analyzeBtn.innerHTML = originalText;
        analyzeBtn.disabled = false;
        
        // 滚动到结果区域
        function2Output.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
});

// 上传区域交互
uploadArea.addEventListener('click', () => {
    alert('文件上传功能需后端支持，此处为演示界面');
});

// 卡片点击事件
document.getElementById('feature1-card').addEventListener('click', (e) => {
    if (!e.target.closest('.feature-btn')) {
        showPage('function1');
    }
});

document.getElementById('feature2-card').addEventListener('click', (e) => {
    if (!e.target.closest('.feature-btn')) {
        showPage('function2');
    }
});

// 初始化页面
showPage('home');