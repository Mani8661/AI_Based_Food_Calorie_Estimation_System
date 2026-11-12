export function calculateBMI(weightKg, heightCm) {
  if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) return null
  const heightM = heightCm / 100
  return Number((weightKg / (heightM * heightM)).toFixed(1))
}

export function getBMIStatus(bmi) {
  if (bmi == null || bmi <= 0) return { label: 'Unknown', color: 'slate' }
  if (bmi < 18.5) return { label: 'Underweight', color: 'amber' }
  if (bmi < 25) return { label: 'Perfect / Normal', color: 'emerald' }
  if (bmi < 30) return { label: 'Overweight', color: 'orange' }
  return { label: 'Obese', color: 'red' }
}

export function calculateWaterIntake(weightKg) {
  if (!weightKg || weightKg <= 0) return null
  // ~35ml per kg body weight per day
  const ml = Math.round(weightKg * 35)
  return { ml, glasses: Math.round(ml / 250) }
}

export function calculateProteinRequirement(weightKg, goal) {
  if (!weightKg || weightKg <= 0) return null
  // g per kg: sedentary 0.8, slim 1.0-1.2, build muscle 1.6-2.2
  let gPerKg
  if (goal === 'slim') gPerKg = 1.2
  else if (goal === 'muscle') gPerKg = 1.8
  else gPerKg = 1.0
  return Math.round(weightKg * gPerKg)
}

export function calculateBMR(weightKg, heightCm, age, gender) {
  if (!weightKg || !heightCm || !age || !gender) return null
  if (gender === 'male') {
    return 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age
  }
  return 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * age
}

export function calculateTDEE(bmr, activityLevel = 1.375) {
  if (!bmr) return null
  return Math.round(bmr * activityLevel)
}
