<template>
  <div v-if="visible" class="left-panel">
    <h2 class="section-title">服務聲明</h2>
    <div class="terms-container">
      <div class="terms-box" ref="termsBox" @scroll="handleScroll">
        <h3 class="terms-title">領獎帳戶設定服務條款及隱私權宣告</h3>
        <p>申請人使用本平台設定「中獎發票自動匯款帳戶」時，視為已同意本平台基於「財稅行政」、「身分核實」及「獎金匯撥」等特定目的，蒐集、處理及利用申請人之個人與金融資料，包括但不限於：身分證統一編號、金融機構代號、匯款帳號及聯絡方式等。</p>
        <p>本平台依據《個人資料保護法》及相關法令規定，對申請人提供之金融資料負保密義務。申請人應確保所提供之金融機構帳戶為本人所有且狀態正常。若因帳號填寫錯誤、帳戶結清或遭列為警示帳戶，致使中獎獎金無法匯入或遭退匯，本平台不負延遲給付之責。</p>
        <p>其他作業事項請詳閱本平台公告之「電子發票專屬獎匯款作業要點」，或撥打客服專線(0800-521-988)。若您同意上述規範，請滾動至頁面底端點選「同意」以進入金融資料綁定流程。</p>
      </div>
    </div>

    <div class="reminder-text">
      請下滑閱讀完服務聲明條款並點選「同意」後，方能進行匯款帳號綁定
    </div>

    <div class="actions">
      <button class="btn btn-cancel" @click="handleCancel">不同意</button>
      <button class="btn btn-agree" :disabled="!isScrolledToBottom" @click="handleAgree">同意</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsOfService',
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isScrolledToBottom: false
    }
  },
  methods: {
    handleScroll() {
      const el = this.$refs.termsBox;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
        this.isScrolledToBottom = true;
      }
    },
    handleCancel() {
      alert('若不同意聲明條款，將無法繼續進行匯款帳戶綁定作業。');
    },
    handleAgree() {
      this.$emit('agree');
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

.terms-container {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.terms-box {
  height: 280px;
  overflow-y: auto;
  padding: 20px 30px;
  background: white;
  color: #333;
  border-radius: 8px;
  line-height: 1.8;
  font-size: 1.1rem;
}

/* 自訂捲軸樣式 */
.terms-box::-webkit-scrollbar {
  width: 8px;
}
.terms-box::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.terms-box::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}
.terms-box::-webkit-scrollbar-thumb:hover {
  background: #999;
}

.terms-title {
  color: #007b83;
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: bold;
}

.reminder-text {
  color: var(--highlight-yellow);
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 30px;
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

.btn-cancel {
  background-color: #e0e0e0;
  color: #666;
}

.btn-agree {
  background-color: var(--highlight-yellow);
  color: #333;
}

.btn-agree:disabled {
  background-color: #cccccc;
  color: #888;
  cursor: not-allowed;
}
</style>
