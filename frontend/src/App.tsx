// src/App.tsx
import { Landing } from './pages/Landing';

export function App() {
  const handleLogin = () => {
    console.log('Navigate to Login / Supabase Auth');
  };

  const handleGetStarted = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    console.log(`Selected Plan: ${planName}`);
    // Next step: Trigger signup modal or Stripe checkout flow
  };

  return (
    <Landing
      onLoginClick={handleLogin}
      onGetStartedClick={handleGetStarted}
      onSelectPlan={handleSelectPlan}
    />
  );
}

export default App;