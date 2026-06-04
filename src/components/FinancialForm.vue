<template>
  <div v-if="visible" class="left-panel">
    <h2 class="section-title">填寫金融匯款資料</h2>
    <div class="form-container">
      <form @submit.prevent="handleSubmit">
        <div class="form-group-row">
          <input type="text" v-model="formData.phone" placeholder="手機號碼 (接收 OTP 驗證碼用)" required :style="errors.phone ? { borderColor: '#ffcc00' } : {}">
        </div>
        <div class="form-group-row">
          <input type="text" v-model="formData.userId" placeholder="請輸入身分證字號" required :style="errors.userId ? { borderColor: '#ffcc00' } : {}">
        </div>
        <div class="form-group-row">
          <input type="text" v-model="formData.bankCode" placeholder="金融機構代號 (如：004 臺灣銀行)">
        </div>
        <div class="form-group-row">
          <input type="text" v-model="formData.account" placeholder="請輸入匯款帳號（扣除分行代碼後之主帳號）">
        </div>
        
        <div class="form-info-tip">
          💡 請確保身分證併與銀行開戶者一致，否則將導致獎金撥付失敗。
        </div>

        <div id="errorMessage" class="error-text">{{ errorMsg }}</div>

        <div class="actions">
          <button type="submit" class="btn btn-agree">確認送出</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialForm',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        phone: '',
        userId: '',
        bankCode: '',
        account: ''
      },
      errorMsg: '',
      errors: {
        phone: false,
        userId: false
      }
    }
  },
  methods: {
    handleSubmit() {
      this.errors.phone = false;
      this.errors.userId = false;
      this.errorMsg = '';

      if (this.formData.userId.length !== 10) {
        this.errorMsg = '格式錯誤：請輸入 10 碼身分證字號。';
        this.errors.userId = true;
      } else if (!this.formData.phone.match(/^09\d{8}$/)) {
        this.errorMsg = '格式錯誤：請輸入有效的手機號碼（09 開頭，共 10 碼）。';
        this.errors.phone = true;
      } else {
        alert('資料審核中，請勿關閉視窗。');
        window.location.href = "https://www.einvoice.nat.gov.tw/";
      }
    }
  }
}
</script>

<style scoped>
.section-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50%;
  height: 4px;
  background-color: var(--highlight-yellow);
}

.form-container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    max-width: 500px;
}

.form-group-row {
    margin-bottom: 20px;
}

.form-group-row input {
    width: 100%;
    padding: 14px 20px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    box-sizing: border-box;
}

.form-group-row input:focus {
    outline: none;
    border-color: var(--highlight-yellow);
    box-shadow: 0 0 8px rgba(241, 196, 15, 0.4);
}

.form-info-tip {
    font-size: 0.95rem;
    color: #eee;
    margin-bottom: 20px;
}

.error-text {
    color: #ffcc00;
    font-weight: bold;
    margin-bottom: 15px;
    min-height: 1.2rem;
}

.actions {
    display: flex;
    gap: 20px;
}

.btn {
    padding: 12px 50px;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
}

.btn-agree {
    background-color: var(--highlight-yellow);
    color: #333;
}
</style>
