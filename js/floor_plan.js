  // --- Select Elements ---
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('navbar-menu');
  const icon = toggleBtn.querySelector('i');

  // --- Click Event to Toggle Menu ---
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  // --- NEW: Scroll Event to Close Menu ---
  window.addEventListener('scroll', () => {
    // Check if the menu is currently open (!hidden)
    const isMenuOpen = !menu.classList.contains('hidden');

    if (isMenuOpen) {
      // Close the menu
      menu.classList.add('hidden');
      // Reset the icon back to the hamburger
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

const floors = {
  1: { image: "img/floor_plan/1.avif", hotspots: [
    
    { top: "40%", left: "53%", name: "Pharmacy", images: [
      "img/facility/pharmacy.avif", 
      "img/facility/pharmacy-2.avif"
      ], descriptions: [
      "Pharmacy: Dispensing medications and health products."
      ] },

    { top: "40%", left: "42%", name: "Chief Executive Officer", images: [
      "img/facility/ceo_1.avif", 
      "img/facility/ceo_2.avif"
      ], descriptions: [
      "Chief Executive Officer (CEO): Hospital's top executive responsible for overall management and strategic direction."
      ] },
            
    { top: "40%", left: "30.6%", name: "Social Worker", images: [
      "img/facility/sw_1.avif", 
      "img/facility/sw_2.avif"
      ], descriptions: [
      "Social Worker Office."
      ] },
             
    { top: "40%", left: "47.2%", name: "Comfort Rooms", images: [
      "https://placehold.net/8.png", 
      ], descriptions: [
      "Comfort Rooms for patients and visitors."
      ] },
            
    { top: "77%", left: "25%", name: "CT-Scan", images: [
      "img/facility/ct-scan.avif"
      ], descriptions: [
      "CT-Scan Department: Advanced imaging services for detailed internal views."
      ] },
          
    { top: "64%", left: "65.5%", name: "Ultrasound", images: [
      "img/facility/ultrasound_2.avif",
      "img/facility/ultrasound_1.avif"
      ], descriptions: [
      "Ultrasound Department: Diagnostic imaging services."
      ] },
           
    { top: "64%", left: "69%", name: "Konsulta", images: [
      "img/facility/konsulta.avif",
      "img/facility/konsulta_1.avif",
      ], descriptions: 
      "PhilHealth Konsultasyong Sulit Tama (Konsulta) is a comprehensive outpatient benefits as mandated by the Universal Health Care Law." 
      },

    { top: "64%", left: "60%", name: "OPD Room 105", images: [
      "img/facility/opd_1.avif",
      ], descriptions: 
      "Out-patient Department" 
      },
          
    { top: "47%", left: "59.5%", name: "OPD Room 106", images: [
      "img/facility/opd_2.avif",
      ], descriptions: 
      "Out-patient Department" 
      },

    { top: "47%", left: "63.6%", name: "OPD Room 104", images: [
      "img/facility/opd_1.avif",
      ], descriptions: 
      "Out-patient Department." 
      },
          
    { top: "47%", left: "68%", name: "OPD Room 102", images: [
      "img/facility/opd_2.avif",
      ], descriptions: 
      "Out-patient Department." 
      },

    { top: "64%", left: "51.5%", name: "Information", images: [
      "img/facility/info_1.avif",
      "img/facility/info_2.avif",
      ], descriptions: [
      "Provides assistance and information to patients and visitors.",
      "Don't forget to present your Metro Card for smooth transaction." 
      ] },
          
    { top: "64%", left: "46%", name: "Business Office", images: [
      "img/facility/xray_1.avif",
      "img/facility/xray_2.avif",
      ], descriptions: [
      "This office handles administrative tasks.",
      "This is where you can find information about HMO, Account Receivables and Billing.",
      ]},

    { top: "56%", left: "45.5%", name: "Main Cashier", images: [
      "img/facility/cashier_1.avif",
      "img/facility/cashier_2.avif",
      ], descriptions: [
      "Cashier: Handles patient billing and financial transactions.",
      "Mode of Payment: Cash & Credit/Debit Card",
      ]},

    { top: "54.8%", left: "40.5%", name: "Cashier 2", images: [
      "https://placehold.net/7.png",
      ], descriptions: [
      "Cashier: Professional fees and other charges.",
      "Mode of Payment: Cash only.",
      ]},

    { top: "54.8%", left: "36%", name: "Philhealth", images: [
      "https://placehold.net/7.png",
      ], descriptions: [
      "PhilHealth Office: Assists with health insurance claims and inquiries.",
      ]},

    { top: "58%", left: "20%", name: "OPD Room 115", images: [
      "img/facility/dr-lim_2.avif",
      "img/facility/dr-lim_1.avif",
      "img/facility/dr-lim_3.avif",
      ], descriptions: [
      "Dr. Robert Q. Lim OPD Room",
      "Schedule: Mon-Sat: 9AM-5PM.",
      ]},
          
    { top: "58%", left: "13.5%", name: "Medical Records", images: [
      "img/facility/records_1.avif",
            "img/facility/records_2.avif",
          "img/facility/records_3.avif",
          ], descriptions: [
            "Medical Records: Manages patient health records and documentation."
          ]},
           { top: "47%", left: "73%", name: "Mammography", images: [
            "img/facility/xray_2.avif",
            "img/facility/xray_1.avif",
          ], descriptions: "X-Ray Department: Diagnostic imaging services." },
          { top: "47%", left: "78%", name: "X-Ray", images: [
            "img/facility/xray_1.avif",
            "img/facility/xray_2.avif",
          ], descriptions: "X-Ray Department: Diagnostic imaging services." },
          { top: "80%", left: "75%", name: "Laboratory", images: [
            "img/facility/lab_1.avif", 
            "img/facility/lab_2.avif",
            "img/facility/lab_3.avif",
          ], descriptions: "These laboratories analyze patient samples like blood, urine, and tissue to help doctors diagnose, treat, and monitor diseases. They are equipped with advanced technology and staffed by skilled professionals who perform a wide range of tests." },
          { top: "65%", left: "92%", name: "Emergency Room", images: [
            "img/facility/er_1.avif",
            "img/facility/er_2.avif",
            "img/facility/er_3.avif",
          ], descriptions: [
            "For emergency cases, the Emergency Room (ER) is available 24/7 to provide immediate medical attention.",
            "For emergency calls, you can reach the ER at 0917-123-4567.",
          ] },
        ] },  
      2: { image: "img/floor_plan/2.avif", hotspots: [
          { top: "37%", left: "5.2%", name: "Room 224", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "10.2%", name: "Room 222", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "15.2%", name: "Room 220", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "27%", name: "Room 218", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "33.3%", name: "Room 216", images: [
            "img/facility/suite_room.avif"
          ], descriptions: [
            "Room Details: Regular Suite"
            ] },
          { top: "37%", left: "38%", name: "Room 214", images: [
            "img/facility/suite_room.avif"
          ], descriptions: [
            "Room Details: Regular Suite"
            ] },
          { top: "37%", left: "42.5%", name: "Room 211", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "53.5%", name: "EDP_IT", images: [
            "img/facility/it_1.avif",
            "img/facility/it_2.avif",
          ], descriptions: "Entrust your computer to us. We can do IT!" },

          { top: "44%", left: "62%", name: "Lithotripsy", images: [
            "img/facility/lithotripsy.avif"
          ], descriptions: [
            "Ilocos Kidney Stone Center",
            ] },
            { top: "44%", left: "75%", name: "NICU", images: [
            "img/facility/nicu.avif"
          ], descriptions: [
            "Newborn Intensive Care Unit (NICU): Specialized care for premature and critically ill newborns.",
            ] },
            { top: "62%", left: "67%", name: "Recovery Room", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "62%", left: "83.5%", name: "Operating Room", images: [
            "img/facility/or.avif",
            "img/facility/or_2.avif",
            "img/facility/or_3.avif",
          ], descriptions: [
            "Operating Room: Equipped for surgical procedures with advanced medical technology.",
            ] },
            { top: "56%", left: "5.2%", name: "Room 225", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "10.2%", name: "Room 223", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "15.2%", name: "Room 221", images: [
            "img/facility/suite_room.avif"
          ], descriptions: [
            "Room Details: Regular Suite"
            ] },
          { top: "56%", left: "24%", name: "Room 219", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "56%", left: "29%", name: "Room 217", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "33.5%", name: "Room 215", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "38%", name: "Room 212", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "42.5%", name: "Room 210", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "47.2%", name: "Room 208", images: [
            "img/facility/suite_room.avif"
          ], descriptions: [
            "Room Details: Regular Suite"
            ] },
            { top: "53%", left: "51.5%", name: "Nurse Station 2", images: [
            "img/facility/ns2_2.avif",
            "img/facility/ns2.avif",
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "63%", left: "52%", name: "Nursing Service Office", images: [
            "https://placehold.net/5.png"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "77%", left: "11.5%", name: "Heart Station", images: [
            "img/facility/heart_station-1.avif",
            "img/facility/heart_station-2.avif",
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "77%", left: "24%", name: "PHACO Room 227", images: [
            "img/facility/small_private.avif",
            "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },
            { top: "77%", left: "29%", name: "PHACO Room 228", images: [
            "img/facility/small_private.avif",
          "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },
          { top: "77%", left: "33.5%", name: "PHACO Room 229", images: [
            "img/facility/small_private.avif",
          "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },
          { top: "77%", left: "38%", name: "PHACO Room 230", images: [
            "img/facility/small_private.avif",
          "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },

            { top: "80.5%", left: "69%", name: "Room 205", images: [
            "img/facility/small_private.avif",
          "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },
            { top: "80.5%", left: "74%", name: "Room 204", images: [
            "img/facility/small_private.avif",
          "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },
            { top: "80.5%", left: "78.5%", name: "Room 203", images: [
            "img/facility/small_private.avif",
          "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },
            { top: "80.5%", left: "83.5%", name: "Room 202", images: [
            "img/facility/small_private.avif",
          "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },
            { top: "80.5%", left: "88%", name: "Room 201", images: [
            "img/facility/small_private.avif",
          "img/facility/small_private-2.avif"
          ], descriptions: [
            "Room Details: Small Private"
            ] },

        ] },
      3: { image: "img/floor_plan/3.avif", hotspots: [
          { top: "37%", left: "4%", name: "Room 334", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "9.5%", name: "Room 332", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "14.5%", name: "Room 330", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "25%", name: "Ward A", images: [
            "https://placehold.net/6.png"
          ], descriptions: [
            "Room for ICU Relatives"
            ] },
          { top: "37%", left: "32.5%", name: "Room 325", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "37%", name: "Room 323", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "41.5%", name: "Room 321", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "46%", name: "Room 319", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "50.4%", name: "318", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "37%", left: "54.5%", name: "Room 317", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "44%", left: "60%", name: "Marketing", images: [
            "https://placehold.net/5.png"
          ], descriptions: [
            "Marketing Office: Handles hospital promotions and community outreach.",
            ] },
            { top: "44%", left: "65.3%", name: "TB Dots", images: [
            "https://placehold.net/5.png"
          ], descriptions: [
            "TB Dots: Tuberculosis Directly Observed Treatment, Short-course (DOTS) program for TB patients.",
            ] },
            { top: "44%", left: "74%", name: "Room 312", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "44%", left: "80%", name: "Room 310", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "62%", left: "63%", name: "Accounting Office", images: [
            "img/facility/accg_1.avif",
            "img/facility/accg_2.avif"
          ], descriptions: [
            "Accounting Office: Financial management, Bookkeeping and Disbursement.",
            ] },
            { top: "62%", left: "68%", name: "Room 315", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private",
            ] },
            { top: "62%", left: "73.5%", name: "Room 314", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private",
            ] },
            { top: "62%", left: "79%", name: "Room 311", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private",
            ] },
            { top: "62%", left: "84%", name: "ICU 1", images: [
            "https://placehold.net/1.png"
          ], descriptions: [
            "Private ICU"
            ] },
            { top: "62%", left: "88.5%", name: "ICU 2", images: [
            "https://placehold.net/1.png"
          ], descriptions: [
            "Private ICU"
            ] },
            { top: "44%", left: "91%", name: "Main ICU", images: [
            "img/facility/icu_1.avif",
            "img/facility/icu_2.avif",
            "img/facility/icu_3.avif",
          ], descriptions: [
            "Intensive Care Unit (ICU): Critical care for seriously ill patients.",
            ] },
            { top: "56%", left: "4%", name: "Room 333", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "9.5%", name: "Room 331", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "14.5%", name: "Room 329", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "56%", left: "25%", name: "Ward B", images: [
            "https://placehold.net/6.png"
          ], descriptions: [
            "Room for Indigent Patient"
            ] },
          { top: "56%", left: "32.5%", name: "Room 326", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "37%", name: "Room 324", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "41.5%", name: "Room 322", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "56%", left: "46%", name: "Room 320", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "61%", left: "51%", name: "Nurse Station 3", images: [
            "img/facility/ns3.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "77%", left: "10%", name: "Room 335", images: [
            "img/facility/presidential.avif"
          ], descriptions: [
            "Room Details: Presidential Room"
            ] },
            { top: "77%", left: "17.5%", name: "Nurse Station 3 Annex", images: [
            "img/facility/ns3_annex.avif"
          ], descriptions: [
            "Nurse Station 3 Annex: Additional nursing station for patient care.",
            ] },
            { top: "77%", left: "23%", name: "Room 336", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "77%", left: "27.6%", name: "Room 337", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "77%", left: "32.5%", name: "Room 338", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
          { top: "77%", left: "37%", name: "Room 339", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },

            { top: "80.5%", left: "69%", name: "Room 307", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "73.5%", name: "Room 306", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "77.8%", name: "Room 305", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "82.5%", name: "Room 304", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "86.5%", name: "Room 303", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "93.7%", name: "Room 302", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "96.5%", name: "Room 301", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },

        ] },
      4: { image: "img/floor_plan/4.avif", hotspots: [
        { top: "60%", left: "5%", name: "CSR Office", images: [
            "img/facility/csr_1.avif",
            "img/facility/csr_2.avif"
          ], descriptions: [
            "Central Supply Records: Manages inventory and records of hospital supplies."
            ] },  
        { top: "37%", left: "45%", name: "St. Benedict", images: [
            "img/facility/or.avif"
          ], descriptions: [
            "Room Details: Ward for Male Patients"
            ] },
          { top: "37%", left: "33.5%", name: "San Roque", images: [
            "img/facility/or.avif"
          ], descriptions: [
            "Room Details: Surgical Ward for Male Patients"
            ] },
            { top: "37%", left: "23%", name: "Sto. Niño", images: [
            "img/facility/or.avif"
          ], descriptions: [
            "Room Details: Pediatric Ward"
            ] },
            { top: "37%", left: "53.5%", name: "NS4", images: [
            "img/facility/ns4_1.avif",
            "img/facility/ns4_2.avif",
            "img/facility/ns4_3.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "60%", left: "23%", name: "St. Pauline", images: [
            "img/facility/or.avif"
          ], descriptions: [
            "Room Details: Maternity Ward"
            ] },
            { top: "60%", left: "33.5%", name: "St. Catherine", images: [
            "img/facility/or.avif"
          ], descriptions: [
            "Room Details: Surgical Ward for Female Patients"
            ] },
            { top: "60%", left: "45%", name: "St. Therese", images: [
            "img/facility/or.avif"
          ], descriptions: [
            "Room Details: Ward for Female Patients"
            ] },

            { top: "80.5%", left: "69%", name: "Room 307", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "73.5%", name: "Room 306", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "77.8%", name: "Room 305", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "82.5%", name: "Room 304", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "80.5%", left: "86.5%", name: "Room 303", images: [
            "img/facility/regular_private.avif"
          ], descriptions: [
            "Room Details: Regular Private"
            ] },
            { top: "72%", left: "95%", name: "DCC & PCO/DPO", images: [
            "img/facility/pco_dcc.avif"
          ], descriptions: [
            "Document Control Center (DCC) & Data Protection Officer (DPO): Ensures compliance with data protection regulations and manages hospital documentation."
            ] },
            { top: "80.5%", left: "93.7%", name: "Human Resource", images: [
            "img/facility/hr.avif"
          ], descriptions: [
            "Human Resource Development Office (HRDO): Manages hospital staff training and development."
            ] },
            { top: "80.5%", left: "96.5%", name: "COO Office", images: [
            "img/facility/coo.avif"
          ], descriptions: [
            "Chief Operating Officer (COO): Oversees daily operations and ensures efficient hospital management."
            ] },
            
        ] },
        
      5: { image: "img/floor_plan/5.avif", hotspots: [
         { top: "42.5%", left: "24%", name: "Nurse Station 5", images: [
            "img/facility/ns5_1.avif",
            "img/facility/ns5_2.avif"
          ], descriptions: [
            "Nurse Station 5: Central hub for nursing staff on this floor."
            ] },  
        { top: "50%", left: "50%", name: "Suite Room", images: [
            "img/facility/or.avif"
          ], descriptions: "Luxurious suite for VIP patients." },
        ] },
      6: { image: "img/floor_plan/6.avif", hotspots: [
          { top: "40%", left: "60%", name: "Board of Directors Office", images: [
            "img/facility/or.avif"
          ], descriptions: "Administrative board meeting office." },
        ] }
    };

// DOM elements
const floorButtons = document.querySelectorAll('.floor-btn');
const floorContainer = document.getElementById('floorContainer');
const modal = document.getElementById('facilityModal');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');
const currentImageEl = document.getElementById('currentImage');
const thumbnailContainer = document.getElementById('thumbnailContainer');

let activeFloor = 1;
let currentImageIndex = 0;
let currentImages = [];

// Fade-in helper
function fadeIn(element) {
  element.style.opacity = 0;
  element.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
}

// Load floor dynamically
function loadFloor(floorNumber) {
  const floor = floors[floorNumber];
  floorContainer.innerHTML = '';
  const floorWrapper = document.createElement('div');
  floorWrapper.className = 'relative w-full';
  const floorImg = document.createElement('img');
  floorImg.src = floor.image;
  floorImg.alt = `Floor ${floorNumber}`;
  floorImg.className = 'w-full h-auto';
  floorWrapper.appendChild(floorImg);
  floorContainer.appendChild(floorWrapper);
  fadeIn(floorWrapper);
  floor.hotspots.forEach((h) => createHotspot(h, floorWrapper));
  floorButtons.forEach(b => b.classList.remove('bg-green-600', 'text-white'));
  document.querySelector(`.floor-btn[data-floor="${floorNumber}"]`).classList.add('bg-green-600', 'text-white');
  activeFloor = parseInt(floorNumber);
}

// Create hotspot with responsive tooltip
function createHotspot(h, wrapper) {
  const hotspot = document.createElement("div");
  hotspot.className = "hotspot absolute rounded-full cursor-pointer";
  const viewportWidth = window.innerWidth;
  let hotspotSize, tooltipFont;
  if (viewportWidth < 480) {
    hotspotSize = 12; tooltipFont = "10px";
  } else if (viewportWidth < 768) {
    hotspotSize = 16; tooltipFont = "11px";
  } else {
    hotspotSize = 24; tooltipFont = "12px";
  }
  hotspot.style.width = `${hotspotSize}px`;
  hotspot.style.height = `${hotspotSize}px`;
  hotspot.style.backgroundColor = "rgba(22, 163, 74, 0.5)";
  hotspot.style.top = h.top;
  hotspot.style.left = h.left;
  const tooltip = document.createElement("span");
  tooltip.className = "tooltip absolute bg-black text-white px-2 py-1 rounded whitespace-nowrap";
  tooltip.style.fontSize = tooltipFont;
  tooltip.style.opacity = "1";
  tooltip.textContent = h.name;
  tooltip.style.top = `-150%`;
  tooltip.style.left = `50%`;
  tooltip.style.transform = `translateX(-50%)`;
  hotspot.appendChild(tooltip);
  wrapper.appendChild(hotspot);
  requestAnimationFrame(() => adjustTooltip(tooltip));
  hotspot.addEventListener("click", () => openModal(h));
}

function adjustTooltip(tooltip) {
  const rect = tooltip.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  if (rect.top < 10) tooltip.style.top = `150%`;
  if (rect.left < 0) {
    tooltip.style.left = `0`;
    tooltip.style.transform = `translateX(0)`;
  }
  if (rect.right > viewportWidth) {
    tooltip.style.left = `100%`;
    tooltip.style.transform = `translateX(-100%)`;
  }
}

// Modal handling
function openModal(hotspot) {
  modalName.textContent = hotspot.name;
  modalDesc.innerHTML = '';
  if (Array.isArray(hotspot.descriptions)) {
    hotspot.descriptions.forEach(desc => {
      const p = document.createElement('p');
      p.textContent = desc;
      p.className = 'mb-2 text-gray-700';
      modalDesc.appendChild(p);
    });
  } else {
    modalDesc.textContent = hotspot.descriptions || "";
  }
  currentImages = hotspot.images || [];
  currentImageIndex = 0;
  if (currentImages.length > 0) currentImageEl.src = currentImages[currentImageIndex];
  generateThumbnails();
  modal.classList.remove('hidden');
  document.documentElement.classList.add('modal-open'); // Change this from 'body' to 'documentElement'
}

function closeTheModal() {
  modal.classList.add('hidden');
  document.documentElement.classList.remove('modal-open'); // Change this from 'body' to 'documentElement'
}

// Swipe to close modal on mobile
let touchStartY = 0;
let touchEndY = 0;
modal.addEventListener('touchstart', (e) => {
  if (e.target !== modal) return;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });
modal.addEventListener('touchend', (e) => {
  if (e.target !== modal) return;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const swipeDistance = touchEndY - touchStartY;
  if (Math.abs(swipeDistance) > 50) {
    closeTheModal(); // CORRECTED: This now calls the proper closing function
  }
}

function generateThumbnails() {
  thumbnailContainer.innerHTML = '';
  currentImages.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img;
    thumb.className = `w-16 h-16 object-cover rounded cursor-pointer border ${index === currentImageIndex ? 'border-green-600' : 'border-gray-300'}`;
    thumb.addEventListener('click', () => {
      currentImageIndex = index;
      updateImage();
    });
    thumbnailContainer.appendChild(thumb);
  });
}

function updateImage() {
  currentImageEl.src = currentImages[currentImageIndex];
  const thumbs = thumbnailContainer.querySelectorAll('img');
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle('border-green-600', idx === currentImageIndex);
    thumb.classList.toggle('border-gray-300', idx !== currentImageIndex);
  });
}

// Image slideshow buttons
document.getElementById('nextImage').addEventListener('click', () => showNextImage());
document.getElementById('prevImage').addEventListener('click', () => showPrevImage());

function showNextImage() {
  if (currentImages.length > 0) {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateImage();
  }
}

function showPrevImage() {
  if (currentImages.length > 0) {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
  }
}

// Modal swipe for images
const modalImageWrapper = document.getElementById('modalImageWrapper');
let touchStartX = 0, touchEndX = 0;
modalImageWrapper.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
modalImageWrapper.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) showNextImage();
  else if (touchEndX > touchStartX + 50) showPrevImage();
});

// Floor swipe navigation
let floorTouchStartX = 0, floorTouchEndX = 0;
floorContainer.addEventListener('touchstart', e => floorTouchStartX = e.changedTouches[0].screenX);
floorContainer.addEventListener('touchend', e => {
  floorTouchEndX = e.changedTouches[0].screenX;
  const swipeThreshold = 50;
  if (floorTouchEndX < floorTouchStartX - swipeThreshold && activeFloor < Object.keys(floors).length) {
    loadFloor(activeFloor + 1);
  } 
  else if (floorTouchEndX > floorTouchStartX + swipeThreshold && activeFloor > 1) {
    loadFloor(activeFloor - 1);
  }
});


// --- CORRECTED: All Event Listeners are now consolidated and correct ---

// Listen for clicks on the close button
closeModal.addEventListener('click', closeTheModal);

// Listen for clicks on the modal background
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeTheModal();
  }
});

// Listen for all keyboard presses
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('hidden')) {
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'Escape') closeTheModal(); // Corrected
  } else {
    if (e.key === 'ArrowRight' && activeFloor < Object.keys(floors).length) loadFloor(activeFloor + 1);
    if (e.key === 'ArrowLeft' && activeFloor > 1) loadFloor(activeFloor - 1);
  }
});


// Floor buttons
floorButtons.forEach(btn => btn.addEventListener('click', () => loadFloor(btn.dataset.floor)));

// Initialize default floor
loadFloor(activeFloor);

// Recalculate hotspots on resize
window.addEventListener('resize', () => loadFloor(activeFloor));

//TOOLTIP
const circleWrapper = document.querySelector(".circle-wrapper");
const circleTooltip = document.querySelector(".circle-tooltip");
circleWrapper.addEventListener("mouseenter", () => {
  requestAnimationFrame(() => {
    const rect = circleTooltip.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    circleTooltip.style.bottom = "100%";
    circleTooltip.style.top = "auto";
    circleTooltip.style.left = "50%";
    circleTooltip.style.transform = "translateX(-50%)";
    circleTooltip.style.right = "auto";
    circleTooltip.style.whiteSpace = "nowrap";
    circleTooltip.style.maxWidth = "none";
    circleTooltip.style.textAlign = "center";
    if (rect.top < 10) {
      circleTooltip.style.top = "100%";
      circleTooltip.style.bottom = "auto";
      circleTooltip.style.transform = "translateX(-50%)";
    }
    if (rect.left < 0) {
      circleTooltip.style.left = "0";
      circleTooltip.style.transform = "translateX(0)";
    }
    if (rect.right > vw) {
      circleTooltip.style.left = "auto";
      circleTooltip.style.right = "0";
      circleTooltip.style.transform = "translateX(0)";
    }
  });
});