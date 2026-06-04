<template>
  <header class="header">
    <div class="logo-area">
      <!-- 財政部 Logo -->
      <img src="/images/logo.png" alt="財政部Logo" class="logo-img">
      <div class="logo-text">
        <span class="logo-text-top">財政部</span>
        <span class="logo-text-mid">電子發票整合服務平台</span>
        <span class="logo-text-bot">E-Invoice Platform</span>
      </div>
    </div>

    <div class="header-center">
      <!-- 購物袋 Icon 與標題 -->
      <img src="/images/shopping-bag.svg" alt="購物袋icon" class="title-icon">
      <span class="main-title">中獎獎金匯款帳戶設定</span>
      <a href="#" class="service-desc-btn">服務說明</a>
    </div>

    <div class="lang-toggle">
      <!-- 語系切換 (中/EN) -->
      <div class="lang-switch-pill">
        <span class="lang-active">中</span>
        <span class="lang-inactive">EN</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 40px;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-area .logo-img {
  height: 75px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.3;
}

.logo-text-top {
  font-size: 0.9rem;
  font-weight: 500;
}

.logo-text-mid {
  font-size: 1.35rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.logo-text-bot {
  font-size: 0.75rem;
  font-weight: 500;
}

.header-center {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.title-icon {
  height: 70px;
}

.main-title {
  font-size: 2.6rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.service-desc-btn {
  background-color: #ffffff;
  color: #009ea8;
  padding: 6px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  margin-left: 20px;
}

.lang-toggle {
    margin-top: 20px;
}

.lang-switch-pill {
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    padding: 3px;
    display: flex;
    overflow: hidden;
    cursor: pointer;
}

.lang-switch-pill span {
    padding: 4px 14px;
    font-size: 1rem;
    font-weight: bold;
}

.lang-active {
    background-color: var(--highlight-yellow);
    color: #333;
    border-radius: 15px;
}

.lang-inactive {
    color: #fff;
}
</style>
