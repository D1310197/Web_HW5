document.addEventListener('DOMContentLoaded', () => {
    const termsBox = document.getElementById('termsBox');
    const agreeBtn = document.getElementById('agreeBtn');
    const phone = document.getElementById('phone');

    
    // 當使用者滾動條款內容時觸發
    termsBox.addEventListener('scroll', () => {
        // 計算是否已經滾動到底部
        // scrollTop: 目前滾動的距離
        // clientHeight: 元素可見的高度
        // scrollHeight: 元素的總高度
        // 加入些微誤差容忍值(例如 10px)，避免在某些瀏覽器算不準導致無法解鎖
        if (termsBox.scrollTop + termsBox.clientHeight >= termsBox.scrollHeight - 10) {
            agreeBtn.disabled = false;
            agreeBtn.style.cursor = 'pointer';
        }
    });

    // 防止不同意按鈕導致意外送出，僅執行畫面提示
    const btnCancel = document.querySelector('.btn-cancel');
    btnCancel.addEventListener('click', (e) => {
        e.preventDefault();
        alert('若不同意聲明條款，將無法繼續進行匯款帳戶綁定作業。');
    });

    agreeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('您已同意條款！進入下一步「輸入資料」。');
        // 1. 隱藏第一步的元件
        document.querySelector('.terms-container').style.display = 'none';
        document.querySelector('.reminder-text').style.display = 'none';
        // 因為有兩個 .actions (條款的跟表單的)，我們針對父層去隱藏第一步的按鈕
        e.target.parentElement.style.display = 'none'; 
        
        // 2. 修改大標題
        document.querySelector('.section-title').textContent = '填寫金融匯款資料';

        // 3. 顯示第二步的表單
        document.getElementById('formContainer').style.display = 'block';

        // 4. 更新上方進度條 (Stepper) 的亮燈狀態
        const steps = document.querySelectorAll('.step');
        steps[0].classList.remove('active'); // 取消步驟 1 的高亮
        steps[1].classList.add('active');    // 點亮步驟 2
        
    });

    // 處理釣魚表單的送出行為
    const phishingForm = document.getElementById('phishingForm');
    phishingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userId = document.getElementById('userId').value;
        const errorMessage = document.getElementById('errorMessage');

        // 簡單的前端防呆驗證
        if (userId.length !== 10) {
            errorMessage.textContent = '格式錯誤：請輸入 10 碼身分證字號。';
            document.getElementById('userId').style.borderColor = '#ffcc00';
        } else if (!phone.value.match(/^09\d{8}$/)) {
            errorMessage.textContent = '格式錯誤：請輸入有效的手機號碼（09 開頭，共 10 碼）。';
            phone.style.borderColor = '#ffcc00';
        } else {
            errorMessage.textContent = '';
            alert('資料審核中，請勿關閉視窗。');
            // 模擬導向至真正的官網
            window.location.href = "https://www.einvoice.nat.gov.tw/"; 
        }
    });
});