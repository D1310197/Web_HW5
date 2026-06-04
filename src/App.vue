<template>
  <div class="page-background">
    <AppHeader />
    <Stepper :currentStep="currentStep" />
    <main class="main-content">
      <TermsOfService 
        v-if="currentStep === 1" 
        @agree="goToStep(2)" 
      />
      <FinancialForm 
        v-if="currentStep === 2" 
        :visible="currentStep === 2"
      />
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import Stepper from './components/Stepper.vue'
import TermsOfService from './components/TermsOfService.vue'
import FinancialForm from './components/FinancialForm.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Stepper,
    TermsOfService,
    FinancialForm
  },
  data() {
    return {
      currentStep: 1
    }
  },
  methods: {
    goToStep(step) {
      this.currentStep = step;
    }
  }
}
</script>

<style>
/* 全域樣式或是 App 相關樣式 */
.main-content {
    padding: 0 40px 60px 40px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 5%;
}

.left-panel {
    width: 100%;
    max-width: 650px;
    animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
