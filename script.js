function calculate() {
    const weight = document.getElementById('weight').value;
    const feet = document.getElementById('feet').value;
    const inches = document.getElementById('inches').value;
    const gender = document.getElementById('gender').value;

    if (!weight || !feet || !inches || !gender) {
        document.getElementById('result').innerHTML = "Please fill out all fields.";
        return;
    }

    // Convert height to cm
    const heightInCm = (parseInt(feet) * 30.48) + (parseInt(inches) * 2.54);

    let bmr;

    // Basic BMR calculation based on gender
    if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * heightInCm) - (5.7 * 25); // Example for a 25-year-old male
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * heightInCm) - (4.3 * 25); // Example for a 25-year-old female
    }

    const weightGainCalories = (bmr * 1.2 + 500).toFixed(2); // Caloric surplus for weight gain
    const proteinIntake = (weight * 1.6).toFixed(2);

    document.getElementById('result').innerHTML = `
        Your BMR is ${bmr.toFixed(2)} kcal/day. <br>
        To gain weight, you need approximately ${weightGainCalories} calories per day. <br>
        You need approximately ${proteinIntake} grams of protein per day.
    `;
}
