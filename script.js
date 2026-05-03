document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    const cards = document.querySelectorAll('.product-card, .stat-card, .org-card, .team-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 40px rgba(157, 78, 221, 0.4)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.animation = 'fadeInUp 1s ease-out';
    }

    function updateNavStyle() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 15, 26, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            nav.style.background = 'rgba(15, 15, 26, 0.95)';
            nav.style.boxShadow = 'none';
        }
    }

    window.addEventListener('scroll', updateNavStyle);
    updateNavStyle();

    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const productData = {
        schedule: {
            title: '桌面课表系统',
            content: '<p>轻量化课表工具，支持多端使用，让校园生活更便捷。支持课程导入、时间提醒、课程分享等功能，帮助学生高效管理学习时间。</p><div class="modal-features"><div class="modal-feature"><div class="modal-feature-title">课程管理</div><div class="modal-feature-desc">支持手动添加课程、批量导入课表、课程分类管理</div></div><div class="modal-feature"><div class="modal-feature-title">智能提醒</div><div class="modal-feature-desc">课前自动提醒、作业截止提醒、考试倒计时</div></div><div class="modal-feature"><div class="modal-feature-title">多端同步</div><div class="modal-feature-desc">支持PC端、移动端数据同步，随时随地查看课表</div></div><div class="modal-feature"><div class="modal-feature-title">课程分享</div><div class="modal-feature-desc">一键分享课表给同学，支持多种分享方式</div></div></div><div style="margin-top: 1.5rem;"><a href="tcn.zip" download class="download-btn" style="display: inline-block; padding: 0.75rem 1.5rem; background: linear-gradient(90deg, #9d4edd, #c77dff); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 0.95rem;">点击下载安装包</a></div>'
        },
        whisper: {
            title: '轻语（暂未开放）',
            content: '<p>AI情绪陪伴应用，用科技温暖心灵。支持智能对话、情绪分析、心情记录等功能，为用户提供全天候的情感陪伴。</p><div class="modal-features"><div class="modal-feature"><div class="modal-feature-title">智能对话</div><div class="modal-feature-desc">自然语言交互，支持日常聊天、学习答疑、生活建议</div></div><div class="modal-feature"><div class="modal-feature-title">情绪分析</div><div class="modal-feature-desc">通过对话内容分析用户情绪状态，提供针对性支持</div></div><div class="modal-feature"><div class="modal-feature-title">心情记录</div><div class="modal-feature-desc">记录每日心情变化，生成可视化心情曲线</div></div><div class="modal-feature"><div class="modal-feature-title">隐私保护</div><div class="modal-feature-desc">端到端加密，数据本地存储，确保隐私安全</div></div></div>'
        },
        game: {
            title: '逃离CD模拟器（在研）',
            content: '<p>校园背景解压模拟游戏，释放学习压力。玩家扮演学生角色，在校园场景中完成各种有趣的任务，体验轻松愉快的校园生活。</p><div class="modal-features"><div class="modal-feature"><div class="modal-feature-title">校园场景</div><div class="modal-feature-desc">真实还原校园环境，沉浸式游戏体验</div></div><div class="modal-feature"><div class="modal-feature-title">趣味任务</div><div class="modal-feature-desc">多样化任务系统，丰富的游戏玩法</div></div><div class="modal-feature"><div class="modal-feature-title">解压放松</div><div class="modal-feature-desc">轻松愉快的游戏氛围，释放学习压力</div></div><div class="modal-feature"><div class="modal-feature-title">角色养成</div><div class="modal-feature-desc">角色成长系统，增强游戏粘性</div></div></div>'
        },
        hidden: {
            title: '隐藏的话',
            content: '<p>关注青少年心理健康的公益项目，传递人文温度。通过线上平台收集和分享青少年的心声，提供匿名倾诉空间，促进心理健康交流。</p><div class="modal-features"><div class="modal-feature"><div class="modal-feature-title">匿名倾诉</div><div class="modal-feature-desc">安全的匿名倾诉空间，让心声被听见</div></div><div class="modal-feature"><div class="modal-feature-title">情感共鸣</div><div class="modal-feature-desc">分享真实故事，寻找情感共鸣</div></div><div class="modal-feature"><div class="modal-feature-title">专业支持</div><div class="modal-feature-desc">连接专业心理咨询资源</div></div><div class="modal-feature"><div class="modal-feature-title">社群互助</div><div class="modal-feature-desc">温暖的互助社群，共同成长</div></div></div>'
        }
    };

    const modalOverlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            if (productData[productId]) {
                modalTitle.textContent = productData[productId].title;
                modalContent.innerHTML = productData[productId].content;
                modalOverlay.classList.add('active');
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeModal() {
        modalOverlay.classList.remove('active');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});