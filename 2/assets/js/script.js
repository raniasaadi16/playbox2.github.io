const landingPagesEnglish = {
    title: 'Fun and excitement with the most exclusive and new games, without need to download',
    subtitle: 'ENTER YOUR MOBILE NUMBER',
    subtitle2: 'ENTER THE ACTIVATION CODE',
    button: 'Continue',
    button2: 'Send',
    paragraph: 'For Zain subscribers you can unsubscribe send U2 to 703420 for this service price 1 SAR, and subscribers Mobily you can unsubscribe send U10 to the number 606712 price of this service 1 SAR , For STC Subscribers the service price is 1.15 SAR daily (VAT Included). VAT Tax was already paid with a refill card for prepaid subscribers. and to unsubscribe send U 11 to 808883',
    error: 'Please enter number'
}
const landingPagesArabic = {
    title: 'المتعة والإثارة مع أقوى الألعاب  الحصرية والجديدة بدون الحاجة للتحميل ',
    subtitle: 'أدخل رقم الجـــوال',
    subtitle2: 'أدخل رمز التفعيل',
    button: 'إستمر',
    button2: 'إرسال',
    paragraph: 'يمكنك الغاء الاشتراك في أي وقت، لمشتركي زين ارسل غ 2 إلى الرقم 703420 سعر هذه الخدمة 1 ريال ، ومشتركين موبيلي ارسل غ10 إلى الرقم 606712 سعر هذه الخدمة 1 ريال ، بالنسبة لمشتركين الاتصالات السعودية (STC) سعر هذه الخدمة 1.15 ريال يوميا (شامل قيمة الضريبة المضافة) ، تم تحصيل مبلغ الضريبة لعملاء مسبق الدفع عند عملية شحن الرصيد. و لالغاء الاشتراك ارسل غ 11 إلى الرقم 808883',
    error: 'ارجو ان تدخل رقم'
}
const languageButton = (language)=>{
    const lgBtn = document.querySelector('#language')
    lgBtn.innerText = `${language}`
}
const changeLgLanding = (language) => {
    const landingTitles = document.querySelectorAll('#init-title')
    const paragraph = document.querySelector('#paragraph')
    landingTitles.forEach(title => title.innerText = language.title)
    paragraph.innerText = language.paragraph
    if(document.querySelector('#validation-error')) document.querySelector('#validation-error').innerText = language.error
    if(language === landingPagesArabic){
        paragraph.setAttribute('dir', 'rtl')
        landingTitles.forEach(title => title.setAttribute('dir', 'rtl'))
    }else{
        paragraph.removeAttribute('dir')
        landingTitles.forEach(title => title.removeAttribute('dir'))

    }
}
const changeLg1 = (language) => {
    const subtitle = document.querySelector('#subtitle')
    const button = document.querySelector('#continue')
    subtitle.innerText = language.subtitle
    button.innerText = language.button
}
const changeLg2 = (language) => {
    const subtitle = document.querySelector('#subtitle2')
    const button = document.querySelector('#send')
    subtitle.innerText = language.subtitle2
    button.innerText = language.button2
}
languageStorage = window.sessionStorage
document.querySelector('#language').addEventListener('click', () => {
    if(languageStorage.getItem('language') === 'English'){
        document.querySelector('#landingPage') && changeLgLanding(landingPagesArabic)
        document.querySelector('#page1') && changeLg1(landingPagesArabic)
        document.querySelector('#page2') && changeLg2(landingPagesArabic)
        languageButton('ENGLISH')
        languageStorage.setItem('language', 'Arabic')
    }else{
        languageStorage.setItem('language', 'English')
        document.querySelector('#landingPage') && changeLgLanding(landingPagesEnglish)
        document.querySelector('#page1') && changeLg1(landingPagesEnglish)
        document.querySelector('#page2') && changeLg2(landingPagesEnglish)
        languageButton('عربي')
    }
    
})
if(languageStorage.getItem('language') === 'English'){
    document.querySelector('#landingPage') && changeLgLanding(landingPagesEnglish)
    document.querySelector('#page1') && changeLg1(landingPagesEnglish)
    document.querySelector('#page2') && changeLg2(landingPagesEnglish)
    languageButton('عربي')
}else{
    document.querySelector('#landingPage') && changeLgLanding(landingPagesArabic)
    document.querySelector('#page1') && changeLg1(landingPagesArabic)
    document.querySelector('#page2') && changeLg2(landingPagesArabic)
    languageButton('ENGLISH')
}
/*************************Form validation********************************/
//index.html form
document.querySelector('#page1') && document.querySelector('#form').addEventListener('submit', function(e){
    const input = document.querySelector('#input')
    e.preventDefault()
    if(input.value === ''){
        document.querySelector('#validation-error').style.display = 'block'
        input.style.border = '3px solid red'
        setTimeout(() => {
            document.querySelector('#validation-error').style.display = 'none'
            input.style.border = '3px solid #540C6E'
        }, 2000);
    }else{
        window.location.href = "activationCode.html"
    }
})
//activationCode.html form
document.querySelector('#page2') && document.querySelector('#form-activation').addEventListener('submit', function(e){
    const input = document.querySelector('#input')
    e.preventDefault()
    if(input.value === ''){
        document.querySelector('#validation-error').style.display = 'block'
        input.style.border = '3px solid red'
        setTimeout(() => {
            document.querySelector('#validation-error').style.display = 'none'
            input.style.border = '3px solid #540C6E'
        }, 2000);
    }else{
        window.location.href = "success.html"
    }
})