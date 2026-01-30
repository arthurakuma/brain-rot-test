const translations = {
    ar: {
        // Index page
        index: {
            title: "اختبار نسبة تعفن الدماغ بسبب إدمان الفيديوهات القصيرة",
            introTitle: "اختبار نسبة تعفن الدماغ بسبب إدمان الفيديوهات القصيرة",
            introText: "تعفن الدماغ هو تراجع التركيز، ضعف الصبر، والاعتماد على محتوى سريع مثل TikTok وReels وShorts. هذا الاختبار ترفيهي وتوعوي فقط وليس تشخيصًا طبيًا.",
            startBtn: "ابدأ الاختبار",
            questions: [
                {
                    question: "كم مرة تفتح تطبيقات الفيديوهات القصيرة يوميًا بدون وعي؟",
                    options: ["أبدًا", "1-2 مرات", "3-5 مرات", "أكثر من 5 مرات"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "هل تجد صعوبة في التوقف بعد مشاهدة فيديو واحد؟",
                    options: ["لا، أتوقف بسهولة", "أحيانًا", "غالباً", "دائمًا"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "كيف تشعر عندما لا يكون هاتفك معك؟",
                    options: ["طبيعي", "قلق خفيف", "قلق متوسط", "قلق شديد"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "هل يؤثر استخدام الفيديوهات القصيرة على تركيزك في العمل أو الدراسة؟",
                    options: ["لا تأثير", "تأثير خفيف", "تأثير متوسط", "تأثير كبير"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "كم وقت تقضيه يوميًا في مشاهدة الفيديوهات القصيرة؟",
                    options: ["أقل من 30 دقيقة", "30 دقيقة - ساعة", "ساعة - ساعتين", "أكثر من ساعتين"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "هل تفضل المحتوى السريع على القراءة أو المشاهدة الطويلة؟",
                    options: ["لا، أفضل المحتوى الطويل", "أحيانًا", "غالباً", "دائمًا"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "كم مرة تشعر بالملل بدون هاتفك؟",
                    options: ["أبدًا", "نادرًا", "أحيانًا", "كثيرًا"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "هل تلاحظ تغيرات في قدرتك على التركيز لفترات طويلة؟",
                    options: ["لا تغيير", "تغيير خفيف", "تغيير متوسط", "تغيير كبير"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "كم مرة تفكر في فتح التطبيق أثناء أنشطة أخرى؟",
                    options: ["أبدًا", "نادرًا", "أحيانًا", "كثيرًا"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "هل تشعر بالرضا بعد مشاهدة عدة فيديوهات قصيرة؟",
                    options: ["نعم، دائمًا", "أحيانًا", "نادرًا", "لا، أشعر بالذنب"],
                    scores: [0, 1, 2, 3]
                }
            ],
            prevBtn: "السابق",
            nextBtn: "التالي",
            calculateBtn: "احسب النتيجة",
            resultTitle: "نتيجتك",
            analyses: [
                "دماغك سليم! استمر في الحفاظ على توازنك.",
                "تعفن خفيف. حاول تقليل وقت الشاشة قليلاً.",
                "تعفن متوسط. قد تحتاج إلى تغييرات في عاداتك.",
                "تعفن متقدم. حان وقت اتخاذ إجراءات جادة."
            ],
            tipsTitle: "نصائح لتحسين تركيزك",
            tips: [
                { icon: "📱", title: "تقليل وقت الشاشة", desc: "قلل وقت الشاشة تدريجيًا لتحسين تركيزك وصحتك العقلية." },
                { icon: "🔕", title: "إيقاف الإشعارات", desc: "أوقف الإشعارات لتجنب التشتت والحفاظ على انتباهك." },
                { icon: "🧘", title: "صيام الدوبامين", desc: "جرب صيام الدوبامين لإعادة توازن مستويات الدوبامين في جسمك." },
                { icon: "🚶", title: "استبدال الأنشطة", desc: "استبدل الفيديوهات القصيرة بالمشي أو القراءة لأنشطة أكثر إنتاجية." },
                { icon: "🧠", title: "تمارين التركيز", desc: "مارس تمارين تركيز بسيطة يوميًا لتعزيز قدرتك على التركيز." }
            ],
            mobilePopupTip: "نصيحة: قلل من وقت الشاشة لتحسين تركيزك!",
            alertMessage: "يرجى اختيار إجابة قبل المتابعة."
        },
        // About page
        about: {
            title: "من نحن - اختبار تعفن الدماغ",
            pageTitle: "من نحن",
            content: [
                "مرحباً بك في موقع \"اختبار نسبة تعفن الدماغ بسبب إدمان الفيديوهات القصيرة\"! نحن هنا لنقدم لك تجربة ممتعة وتفاعلية تساعدك على فهم تأثير الفيديوهات القصيرة على تركيزك ودماغك.",
                "هدفنا الرئيسي هو نشر التوعية حول كيفية تأثير الإدمان على الفيديوهات القصيرة مثل TikTok وReels وShorts على حياتنا اليومية. نقدم لك اختباراً ترفيهياً يساعدك على معرفة نفسك بشكل أفضل، مع التركيز على أن هذا ليس تشخيصاً طبياً بل مجرد أداة توعوية.",
                "نحن نؤمن بأن الوعي هو الخطوة الأولى نحو التغيير. لذلك، نقدم نصائح بسيطة وفعالة لتحسين تركيزك وتقليل الاعتماد على المحتوى السريع. استمتع بالاختبار وشاركه مع أصدقائك!"
            ]
        },
        // Privacy page
        privacy: {
            title: "سياسة الخصوصية - اختبار تعفن الدماغ",
            pageTitle: "سياسة الخصوصية",
            content: [
                "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. هذا الموقع لا يجمع أي بيانات شخصية من المستخدمين. الاختبار يعمل محليًا على جهازك دون إرسال أي معلومات إلى خوادمنا.",
                "إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى الاتصال بنا."
            ]
        },
        // Disclaimer page
        disclaimer: {
            title: "إخلاء مسؤولية - اختبار تعفن الدماغ",
            pageTitle: "إخلاء مسؤولية",
            content: [
                "هذا الاختبار ترفيهي وتوعوي فقط ولا يُعتبر تشخيصًا طبيًا أو نصيحة مهنية. نتائج الاختبار مبنية على إجاباتك الشخصية ولا تعكس حالة صحية حقيقية. إذا كنت تعاني من مشاكل تركيز أو صحة نفسية، يرجى استشارة متخصص طبي أو نفسي.",
                "الموقع غير مسؤول عن أي استخدام خاطئ للمعلومات المقدمة. جميع المحتويات محمية بحقوق الطبع والنشر."
            ]
        },
        // Common elements
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navPrivacy: "الخصوصية",
        navDisclaimer: "إخلاء مسؤولية",
        siteName: "تعفن الدماغ",
        footer: "&copy; 2026 اختبار تعفن الدماغ. جميع الحقوق محفوظة.",
        bannerAd: "مساحة إعلان أفقي",
        adLabel: "إعلان",
        ad1: "إعلان #1 - Placeholder",
        ad2: "إعلان #2 - Placeholder",
        ad3: "إعلان #3 - Placeholder",
        ad4: "إعلان #4 - Placeholder"
    },
    en: {
        // Index page
        index: {
            title: "Brain Rot Test Due to Short Video Addiction",
            introTitle: "Brain Rot Test Due to Short Video Addiction",
            introText: "Brain rot is the decline in focus, reduced patience, and dependence on fast content like TikTok, Reels, and Shorts. This test is for entertainment and awareness only and is not a medical diagnosis.",
            startBtn: "Start Test",
            questions: [
                {
                    question: "How many times do you open short video apps daily without realizing?",
                    options: ["Never", "1-2 times", "3-5 times", "More than 5 times"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "Do you find it hard to stop after watching one video?",
                    options: ["No, I stop easily", "Sometimes", "Often", "Always"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "How do you feel when your phone is not with you?",
                    options: ["Normal", "Mild anxiety", "Moderate anxiety", "Severe anxiety"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "Does using short videos affect your focus at work or study?",
                    options: ["No effect", "Mild effect", "Moderate effect", "Major effect"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "How much time do you spend daily watching short videos?",
                    options: ["Less than 30 minutes", "30 minutes - 1 hour", "1-2 hours", "More than 2 hours"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "Do you prefer fast content over reading or long watching?",
                    options: ["No, I prefer long content", "Sometimes", "Often", "Always"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "How often do you feel bored without your phone?",
                    options: ["Never", "Rarely", "Sometimes", "Often"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "Do you notice changes in your ability to focus for long periods?",
                    options: ["No change", "Mild change", "Moderate change", "Major change"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "How often do you think about opening the app during other activities?",
                    options: ["Never", "Rarely", "Sometimes", "Often"],
                    scores: [0, 1, 2, 3]
                },
                {
                    question: "Do you feel satisfied after watching several short videos?",
                    options: ["Yes, always", "Sometimes", "Rarely", "No, I feel guilty"],
                    scores: [0, 1, 2, 3]
                }
            ],
            prevBtn: "Previous",
            nextBtn: "Next",
            calculateBtn: "Calculate Result",
            resultTitle: "Your Result",
            analyses: [
                "Your brain is healthy! Keep maintaining your balance.",
                "Mild rot. Try reducing screen time a bit.",
                "Moderate rot. You may need to change your habits.",
                "Advanced rot. It's time to take serious action."
            ],
            tipsTitle: "Tips to Improve Your Focus",
            tips: [
                { icon: "📱", title: "Reduce Screen Time", desc: "Gradually reduce screen time to improve your focus and mental health." },
                { icon: "🔕", title: "Turn Off Notifications", desc: "Turn off notifications to avoid distractions and maintain your attention." },
                { icon: "🧘", title: "Dopamine Fasting", desc: "Try dopamine fasting to rebalance dopamine levels in your body." },
                { icon: "🚶", title: "Replace Activities", desc: "Replace short videos with walking or reading for more productive activities." },
                { icon: "🧠", title: "Focus Exercises", desc: "Practice simple focus exercises daily to enhance your concentration ability." }
            ],
            mobilePopupTip: "Tip: Reduce screen time to improve your focus!",
            alertMessage: "Please select an answer before proceeding."
        },
        // About page
        about: {
            title: "About Us - Brain Rot Test",
            pageTitle: "About Us",
            content: [
                "Welcome to the \"Brain Rot Test Due to Short Video Addiction\" website! We are here to provide you with a fun and interactive experience to help you understand the impact of short videos on your focus and brain.",
                "Our main goal is to raise awareness about how addiction to short videos like TikTok, Reels, and Shorts affects our daily lives. We offer you an entertaining test to help you know yourself better, with the emphasis that this is not a medical diagnosis but just an awareness tool.",
                "We believe that awareness is the first step towards change. Therefore, we provide simple and effective tips to improve your focus and reduce dependence on fast content. Enjoy the test and share it with your friends!"
            ]
        },
        // Privacy page
        privacy: {
            title: "Privacy Policy - Brain Rot Test",
            pageTitle: "Privacy Policy",
            content: [
                "We respect your privacy and are committed to protecting your personal data. This website does not collect any personal data from users. The test works locally on your device without sending any information to our servers.",
                "If you have any questions about the privacy policy, please contact us."
            ]
        },
        // Disclaimer page
        disclaimer: {
            title: "Disclaimer - Brain Rot Test",
            pageTitle: "Disclaimer",
            content: [
                "This website and its content are for entertainment and educational purposes only. The test provided is not a substitute for professional medical advice or diagnosis.",
                "We do not assume any responsibility for the use of this website or interpretation of the results. Please consult a medical professional for any health concerns."
            ]
        },
        // Common elements
        navHome: "Home",
        navAbout: "About Us",
        navPrivacy: "Privacy",
        navDisclaimer: "Disclaimer",
        siteName: "Brain Rot",
        footer: "&copy; 2026 Brain Rot Test. All rights reserved.",
        bannerAd: "Horizontal Ad Space",
        adLabel: "Ad",
        ad1: "Ad #1 - Placeholder",
        ad2: "Ad #2 - Placeholder",
        ad3: "Ad #3 - Placeholder",
        ad4: "Ad #4 - Placeholder"
    }
};

// Get current page
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('about.html')) return 'about';
    if (path.includes('privacy.html')) return 'privacy';
    if (path.includes('disclaimer.html')) return 'disclaimer';
    return 'index';
}

// Language switching function
function switchLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyLanguage(lang);
    if (window.refreshQuiz) {
        window.refreshQuiz(lang);
    }
}

// Apply language to page
function applyLanguage(lang) {
    const page = getCurrentPage();
    const trans = translations[lang];

    // Set document language and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update page title
    document.title = trans[page].title;

    // Update common elements
    const siteName = document.querySelector('.site-name');
    if (siteName) siteName.textContent = trans.siteName;

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href.includes('index.html')) link.textContent = trans.navHome;
        if (link.href.includes('about.html')) link.textContent = trans.navAbout;
        if (link.href.includes('privacy.html')) link.textContent = trans.navPrivacy;
        if (link.href.includes('disclaimer.html')) link.textContent = trans.navDisclaimer;
    });

    const footer = document.querySelector('footer p');
    if (footer) footer.innerHTML = trans.footer;

    // Update page-specific content
    if (page === 'index') {
        // Update intro section
        const introTitle = document.querySelector('#intro h1');
        if (introTitle) introTitle.textContent = trans.index.introTitle;

        const introText = document.querySelector('#intro p');
        if (introText) introText.textContent = trans.index.introText;

        const startBtn = document.getElementById('start-btn');
        if (startBtn) startBtn.textContent = trans.index.startBtn;

        // Update result section if exists
        const resultTitle = document.querySelector('#result h2');
        if (resultTitle) resultTitle.textContent = trans.index.resultTitle;

        // Update tips section if exists
        const tipsTitle = document.querySelector('#tips h2');
        if (tipsTitle) tipsTitle.textContent = trans.index.tipsTitle;

        const tipCards = document.querySelectorAll('.tip-card');
        trans.index.tips.forEach((tip, index) => {
            if (tipCards[index]) {
                const iconEl = tipCards[index].querySelector('.tip-icon');
                const titleEl = tipCards[index].querySelector('h3');
                const descEl = tipCards[index].querySelector('p');
                if (iconEl) iconEl.textContent = tip.icon;
                if (titleEl) titleEl.textContent = tip.title;
                if (descEl) descEl.textContent = tip.desc;
            }
        });

        // Update mobile popup tip if exists
        const mobilePopupP = document.querySelector('#mobile-popup p');
        if (mobilePopupP) mobilePopupP.textContent = trans.index.mobilePopupTip;

        // Update ad placeholders
        const ad1 = document.getElementById('ad1');
        if (ad1) ad1.textContent = trans.ad1;

        const ad2 = document.getElementById('ad2');
        if (ad2) ad2.textContent = trans.ad2;

        const ad3 = document.getElementById('ad3');
        if (ad3) ad3.textContent = trans.ad3;

        const ad4 = document.getElementById('ad4');
        if (ad4) ad4.textContent = trans.ad4;

        // Update banner ad placeholder
        const bannerAd = document.querySelector('.banner-ad-placeholder');
        if (bannerAd) bannerAd.textContent = trans.bannerAd;

        // Update ad labels
        const adLabels = document.querySelectorAll('.ad-label');
        adLabels.forEach(label => label.textContent = trans.adLabel);
    } else {
        // Update page title and content for other pages
        const pageTitle = document.querySelector('main h1');
        if (pageTitle) pageTitle.textContent = trans[page].pageTitle;

        const paragraphs = document.querySelectorAll('main p');
        trans[page].content.forEach((text, index) => {
            if (paragraphs[index]) paragraphs[index].textContent = text;
        });

        // Update mobile popup tip if exists (for about page)
        const mobilePopupTip = document.getElementById('mobile-popup-tip');
        if (mobilePopupTip) mobilePopupTip.textContent = trans.index.mobilePopupTip;
    }

    // Update language switcher highlighting
    const langAr = document.getElementById('lang-ar');
    const langEn = document.getElementById('lang-en');
    if (lang === 'ar') {
        langAr.checked = true;
        langEn.checked = false;
    } else {
        langAr.checked = false;
        langEn.checked = true;
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ar';
    applyLanguage(savedLang);

    // Add event listeners for language switcher
    const langAr = document.getElementById('lang-ar');
    const langEn = document.getElementById('lang-en');

    if (langAr) langAr.addEventListener('change', () => switchLanguage('ar'));
    if (langEn) langEn.addEventListener('change', () => switchLanguage('en'));
});
