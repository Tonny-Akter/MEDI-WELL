


function checkSymptoms() {
  const input = document.getElementById("symptomInput").value.toLowerCase();
  const solutionDiv = document.getElementById("solution");

  if (!input.trim()) {
    solutionDiv.textContent = "Please enter your symptoms.";
    return;
  }

  const symptomSolutions = {
    "feeling cold": "Try to keep warm and check your temperature. If persistent, consult a doctor.",
    "chills": "Rest and keep warm. If chills come with fever or severe symptoms, seek medical attention.",
    "swelling": "Elevate the affected area, apply cold compress, and rest. See a doctor if swelling worsens.",
    "bleeding": "Apply pressure to stop bleeding. If bleeding is heavy or won’t stop, seek emergency care.",
    "vomiting": "Stay hydrated with small sips of water. Avoid solid foods until vomiting stops. See a doctor if it persists.",
    "constipation": "Increase fiber and water intake, and stay active. If constipation lasts more than a few days, get medical advice.",
    "runny nose": "Use saline nasal spray, rest, and stay hydrated. Consult a doctor if it lasts more than 10 days or worsens.",
    "ear pain": "Avoid inserting anything in your ear. Use warm compress and consult a doctor if pain is severe.",
    "nosebleed": "Sit upright and pinch your nostrils for 10 minutes. Seek help if bleeding is heavy or frequent.",
    "muscle pain": "Rest, apply ice or heat, and take pain relievers if needed. Persistent pain should be evaluated by a doctor.",
    "anxiety": "Practice deep breathing and relaxation. Seek professional help if anxiety is severe or ongoing.",
    "depression": "Reach out to trusted people and consider professional counseling.",
    "insomnia": "Maintain good sleep hygiene and relaxation techniques. If persistent, seek help from a healthcare provider.",
    "palpitations": "Avoid caffeine and stress, and consult a doctor if palpitations are frequent or with dizziness.",
    "blurred vision": "Avoid eye strain and consult an eye specialist if blurred vision continues.",
    "weight loss": "Unintentional weight loss should be checked by a healthcare professional.",
    "appetite loss": "Try small, frequent meals and stay hydrated. Consult a doctor if prolonged.",
    "cold sweat": "Could indicate infection or other serious issues; seek medical advice if persistent.",
    "chest tightness": "Could be serious; seek emergency care if sudden or severe.",
    "leg cramps": "Stretch and hydrate. Persistent cramps may need medical evaluation.",
    "itching": "Avoid scratching, use moisturizers or antihistamines. See a doctor if severe or persistent.",
    "memory loss": "Seek medical advice if you experience sudden or worsening memory problems.",
    "feeling faint": "Sit or lie down immediately and rest. If frequent, consult a doctor.",
    "fever": "You may have a fever. Stay hydrated, rest, and consider fever-reducing medicine like paracetamol. If fever lasts more than 3 days, see a doctor.",
    "cough": "For cough, stay hydrated, avoid irritants, and consider cough syrups. If persistent or with blood, seek medical advice.",
    "headache": "Rest in a quiet, dark room, stay hydrated, and consider pain relief medication. If headaches are severe or frequent, consult a doctor.",
    "stomach ache": "Avoid heavy or spicy food, drink plenty of fluids, and rest. If pain is severe or lasts more than 2 days, get medical help.",
    "sore throat": "Gargle warm salt water, drink warm liquids, and rest your voice. If sore throat is severe or with fever, see a healthcare provider.",
    "fatigue": "Ensure proper rest, balanced diet, and hydration. If fatigue persists for weeks, consider consulting a healthcare professional.",
    "nausea": "Drink clear fluids, avoid solid food until vomiting stops, and rest. If vomiting is severe or persistent, seek medical care.",
    "diarrhea": "Stay hydrated with oral rehydration solutions, avoid dairy and fatty foods. If diarrhea persists more than 2 days or with blood, see a doctor.",
    "chest pain": "Chest pain can be serious. If sudden, severe, or with shortness of breath, call emergency services immediately.",
    "shortness of breath": "Try to stay calm and sit upright. If symptoms are severe or worsening, seek emergency medical help.",
    "back pain": "Apply heat or cold packs, avoid heavy lifting, and rest. If pain radiates or causes numbness, see a doctor.",
    "dizziness": "Sit or lie down immediately, drink water, and avoid sudden movements. If dizziness is frequent or severe, consult a healthcare provider.",
    "rash": "Avoid scratching, keep skin clean and dry. Use antihistamines if itchy. If rash spreads rapidly or with fever, see a doctor.",
    "joint pain": "Rest the joint, apply ice, and consider over-the-counter pain relievers. Persistent joint pain needs medical evaluation.",
    "eye redness": "Avoid rubbing eyes, use clean water to rinse, and consider artificial tears. If vision is affected or pain is severe, seek medical help.",
    "frequent urination": "Could be a sign of urinary tract infection or diabetes. Drink water and consult a doctor if it continues.",
    "burning urination": "May indicate a urinary tract infection. Drink plenty of water and seek medical advice.",
    "yellowing of skin or eyes": "May be jaundice. Seek prompt medical evaluation to check liver function.",
    "night sweats": "Could be due to infections, hormonal changes, or other conditions. See a doctor if persistent.",
    "dry mouth": "Stay hydrated and chew sugar-free gum. If chronic, seek medical advice.",
    "difficulty swallowing": "Try soft foods and drink fluids. If ongoing or painful, consult a healthcare provider.",
    "hoarseness": "Rest your voice and stay hydrated. If it lasts more than two weeks, see a doctor.",
    "frequent headaches": "Monitor triggers and stay hydrated. Seek medical evaluation if frequent or severe.",
    "tingling or numbness": "May be from nerve issues or circulation problems. Persistent symptoms need medical attention.",
    "lump or bump": "Monitor changes in size or tenderness. Any new or growing lump should be checked by a doctor.",
    "difficulty concentrating": "Can result from stress, fatigue, or health conditions. If persistent, seek professional assessment.",
    "light sensitivity": "Rest your eyes and avoid bright lights. Seek care if it worsens or affects vision.",
    "hallucinations": "Seek immediate medical evaluation, especially if new or worsening.",
    "trouble speaking": "May indicate a neurological issue. Seek emergency care if sudden or associated with weakness.",
    "drooping face": "Could signal a stroke. Seek emergency help immediately.",
    "difficulty walking": "May result from neurological or muscular issues. See a healthcare provider if ongoing.",
    "tremors": "Involuntary shaking could be related to medication or neurological conditions. Consult a doctor.",
    "hot flashes": "Often hormonal, especially in menopause. If disruptive or unusual, seek advice.",
    "excessive sweating": "May be from stress, infection, or other causes. Persistent sweating should be evaluated.",
    "hair loss": "Could be stress, hormonal, or nutritional. See a doctor if sudden or patchy.",
    "bruising easily": "May be due to medications or a blood condition. Seek medical advice if frequent.",
    "unsteady gait": "Loss of balance should be checked by a doctor, especially if worsening.",
    "vision loss": "Any sudden or partial vision loss requires immediate medical attention.",
    "hearing loss": "Could be due to infection, wax, or nerve damage. Seek hearing evaluation.",
    "enlarged lymph nodes": "Swollen glands may indicate infection or other conditions. Persistent swelling needs medical review.",
    "flushing": "May be hormonal or related to medication. If frequent or severe, consult a doctor.",
    "gas or bloating": "Avoid gas-producing foods. If ongoing, especially with pain, see a doctor.",
    "acid reflux": "Avoid spicy/fatty foods and eat smaller meals. Persistent symptoms may need medication.",
    "hiccups": "Usually temporary. Persistent hiccups may indicate an underlying issue and need evaluation.",
    "mouth sores": "Use saltwater rinses and avoid spicy foods. Seek medical help if not healing in 10–14 days.",
    "cracked lips": "Use lip balm and stay hydrated. Persistent dryness may indicate a deficiency or condition.",
    "bad breath": "Maintain oral hygiene. Persistent halitosis may need dental or medical evaluation.",
    "pain": "Pain can arise from various causes such as injury, inflammation, infection, or chronic health conditions. It may feel sharp, dull, aching, burning, or throbbing and can be localized to one area or spread throughout the body. There are different types of pain including acute pain, which is sudden and usually related to injury or illness; chronic pain that lasts longer than three months and is often linked to conditions like arthritis or nerve damage; neuropathic pain caused by nerve damage, described as burning or shooting; and visceral pain that originates from internal organs and is often dull or cramping. Managing pain typically involves resting the affected area, using over-the-counter painkillers like paracetamol or ibuprofen as directed, and applying cold or heat packs depending on the situation. Staying hydrated and avoiding activities that worsen the pain can also help. It is important to seek medical attention if the pain is severe, sudden, unexplained, or accompanied by symptoms such as chest pain, difficulty breathing, weakness, numbness, or loss of bladder or bowel control. Additionally, if pain persists for several days despite treatment or significantly impacts daily activities or sleep, consulting a healthcare professional is recommended to obtain a proper diagnosis and appropriate treatment."

  
};






const solution = symptomSolutions[input];

  if (solution) {
    solutionDiv.textContent = solution;
  } else {
    solutionDiv.textContent = "Sorry, we couldn't find a solution for that symptom. Please consult a doctor.";
  }

}

function toggleRemedy(index) {
  document.querySelectorAll('.remedy-description')[index].classList.toggle('active');
}
function showDiet(group) {
  const plans = {
    age5to12: `
      <strong>Fruits & Vegetables:</strong> Provide vitamins A, C, and fiber essential for immunity and digestion.<br>
      <strong>Dairy:</strong> Sources like milk and yogurt supply calcium and vitamin D for healthy bones and teeth.<br>
      <strong>Grains:</strong> Whole grains like oats and brown rice offer sustained energy through complex carbs and fiber.<br>
      <strong>Proteins:</strong> Lean meats, eggs, legumes, and lentils help build muscles and repair tissues.<br>
      <strong>Hydration:</strong> Encourage water over sugary drinks to maintain hydration and prevent tooth decay.<br>
      <strong>Limit:</strong> Processed snacks, sugary cereals, and sodas to reduce risks of obesity and dental problems.<br>
      <strong>Tips:</strong> Make meals colorful and fun to encourage healthy eating habits early.
    `,
    age12to17: `
      <strong>Healthy Fats:</strong> Nuts, seeds, and avocados support brain development and hormone production.<br>
      <strong>Fruits & Vegetables:</strong> Provide antioxidants that reduce inflammation and improve skin health.<br>
      <strong>Hydration:</strong> Water is critical; avoid caffeinated or sugary drinks.<br>
      <strong>Limit:</strong> Fast food, excessive junk food, and energy drinks.<br>
      <strong>Tips:</strong> Encourage regular meals and healthy snacks like fruit and nuts for steady energy.
    `,
    age18to27: `
      <strong>Green Leafy Vegetables:</strong> Spinach, kale, and broccoli provide vitamins, minerals, and fiber for overall health.<br>
      <strong>Lean Proteins:</strong> Chicken, turkey, fish, legumes, and eggs support muscle maintenance and repair.<br>
      <strong>Healthy Fats:</strong> Olive oil, nuts, seeds, and fatty fish provide omega-3 fatty acids for heart and brain health.<br>
      <strong>Whole Grains:</strong> Brown rice, quinoa, oats provide sustained energy and help maintain healthy blood sugar.<br>
      <strong>Limit:</strong> Processed foods, refined sugars, trans fats, and excessive alcohol.<br>
      <strong>Tips:</strong> Plan balanced meals with a mix of macronutrients; stay physically active to complement healthy eating.
    `,
    age27to40: `
      <strong>Fiber-Rich Foods:</strong> Whole grains, legumes, fruits, and vegetables promote digestion and weight control.<br>
      <strong>Omega-3 Fatty Acids:</strong> Fish like salmon, flaxseeds, and walnuts reduce inflammation and support heart health.<br>
      <strong>Antioxidants:</strong> Blueberries, tomatoes, carrots, and dark chocolate help protect against cellular damage.<br>
      <strong>Portion Control:</strong> Manage calorie intake to avoid weight gain.<br>
      <strong>Calcium & Vitamin D:</strong> Dairy and leafy greens maintain bone strength.<br>
      <strong>Limit:</strong> Excess salt, sugar, and saturated fats.<br>
      <strong>Tips:</strong> Try meal prepping and mindful eating for a healthy lifestyle.
    `,
    age40to60: `
      <strong>Calcium & Vitamin D:</strong> Prevent osteoporosis with dairy, cereals, and greens.<br>
      <strong>Lean Protein:</strong> Chicken, fish, legumes help maintain muscle mass.<br>
      <strong>Fiber:</strong> Fruits, vegetables, and whole grains aid digestion and heart health.<br>
      <strong>Antioxidants:</strong> Vitamins C and E help reduce oxidative stress.<br>
      <strong>Healthy Fats:</strong> Nuts, seeds, and olive oil for cardiovascular health.<br>
      <strong>Limit:</strong> Sodium and sugar to prevent high BP and diabetes.<br>
      <strong>Tips:</strong> Stay active with weight-bearing exercises and drink plenty of water.
    `,
    age60plus: `
      <strong>Soft, Easy-to-Digest Foods:</strong> Soups, stews, cooked veggies, and smoothies aid digestion.<br>
      <strong>Fiber:</strong> Prevent constipation via fruits, vegetables, and whole grains.<br>
      <strong>Protein:</strong> To prevent muscle loss—fish, eggs, dairy, legumes.<br>
      <strong>Calcium & Vitamin D:</strong> Dairy, fortified foods, and safe sun exposure.<br>
      <strong>Hydration:</strong> Water and low-fat milk for kidney and heart support.<br>
      <strong>Limit:</strong> Greasy, spicy, or heavy foods.<br>
      <strong>Tips:</strong> Eat small, frequent meals. Consider supplements with a doctor's advice.
    `
  };

  document.getElementById("diet-plan").innerHTML = `
    <div class="diet-content">${plans[group]}</div>
  `;
}

  document.getElementById('loginForm').onsubmit = function() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email.');
      return false; 
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return false; 
    }
    return true; 
  };

