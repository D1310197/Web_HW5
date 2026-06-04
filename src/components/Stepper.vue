<template>
  <nav class="stepper-wrapper">
    <div class="stepper">
      <div class="progress-line"></div>
      <div v-for="(step, index) in steps" :key="index" :class="['step', { active: currentStep === index + 1 }]">
        <span class="step-text">
          <span class="step-num">{{ index + 1 }}</span> {{ step }}
        </span>
        <div class="dot"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      steps: ['服務聲明', '填寫資料', '一次性密碼', '完成']
    }
  }
}
</script>

<style scoped>
.stepper-wrapper {
  margin: 10px 0 40px 0;
  display: flex;
  justify-content: center;
}

.stepper {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 900px;
}

.progress-line {
  position: absolute;
  top: 75%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 1;
  transform: translateY(-50%);
}

.step {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  flex: 1;
}

.step-text {
  font-size: 1.25rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s;
}

.step-num {
  margin-right: 5px;
}

.dot {
  width: 14px;
  height: 14px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transition: all 0.3s;
}

/* 啟動狀態樣式 */
.step.active .step-text {
  color: var(--highlight-yellow);
}

.step.active .dot {
  background-color: var(--highlight-yellow);
  box-shadow: 0 0 10px var(--highlight-yellow);
  transform: scale(1.3);
}
</style>
