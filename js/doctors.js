document.addEventListener("DOMContentLoaded", function() {
    // 1. Give every doctor a default avatar image to start.
    doctors = doctorsList.map(doc => ({ ...doc, image: "img/doctors/avatar.avif" }));
    currentList = doctors;

    // 2. Render the page immediately with the default data.
    initPage();

    // 3. Start checking for real images in the background without blocking the page.
    updateImagesInBackground();
});

// ========================
// DATA
// ========================

const doctorsList = [
    // (Your full, corrected doctorsList remains here...)
    { name: "Frances Elaine F. Abelañes", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Anacleto F. Advincula", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Ma. Katrina T. Balan", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Estefanie C. Cabebe", specialty: "Anesthesiology", hmo: [], room: "Ground Floor, Room 102", schedule: "Tue & Thu: 9AM-12NN" },
    { name: "Mylene Fatima S. Cobangbang", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Leonor Isabel C. Dy", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Melvin Troy L. Ordoñez", specialty: "Anesthesiology", hmo: [], room: "OPD Extension, Room 2", schedule: "Tue: 1PM-4PM" },
    { name: "Herminia M. Pascua", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Nella F. Plete", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Constante M. Rabe II", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Emmanuel R. Reyes", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Albert G. Rondal", specialty: "Anesthesiology", hmo: [], room: "", schedule: "" },
    { name: "Mauritus T. De Vera", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
    { name: "Fatima F. Malcaba", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
    { name: "Lymuel R. Pascua", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
    { name: "Mirella I. Rosuman", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
    { name: "Paula Cynthia R. Valencia", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
    { name: "Sean V. Vera Cruz", specialty: "Dentistry", hmo: [], room: "", schedule: "" },
    { name: "Romen A. Almazar", specialty: "ENT", hmo: [], room: "Ground Floor, Room 106", schedule: "Fri: 8AM-10AM (by appointment" },
    { name: "Irlan C. Altura", specialty: "Otorhinolaryngology - Head and Neck", hmo: [], room: "", schedule: "" },
    { name: "Xyrose Lex-Deo P. Andres", specialty: "Ear, Nose, Throat - Head & Neck Surgery", hmo: [], room: "", schedule: "" },
    { name: "Jesson Deo G. Cabrera", specialty: "ENT", hmo: [], room: "Ground Floor, Room 106", schedule: "Tue & Sat: 9AM-12NN" },
    { name: "Gerson S. Contreras", specialty: "Otorhinolaryngology - Head and Neck Surgery, Craniomaxillofacial trauma and plastic surgery", hmo: [], room: "", schedule: "" },
    { name: "Aivan Maury A. De Vera", specialty: "Otorhinolaryngology - Head and Neck Surgery", hmo: [], room: "", schedule: "" },
    { name: "Nicanor B. Lacuesta", specialty: "ENT", hmo: [], room: "Ground Floor, Room 106", schedule: "Mon & Tue: 2PM-4PM" },
    { name: "Pedro R. Patao", specialty: "ENT", hmo: [], room: "Ground Floor, Room 105", schedule: "Wed & Fri: 2PM" },
    { name: "Danilo A. Sanchez", specialty: "ENT", hmo: [], room: "", schedule: "" },
    { name: "Camille Q. Tolentino", specialty: "ENT", hmo: [], room: "", schedule: "" },
    { name: "Peeble Narita G. Agdamag", specialty: "Cardiology", hmo: [], room: "OPD Extension, Room 7", schedule: "Mon-Sat (except Fri): 8AM-12NN" },
    { name: "Georgina D. Andal", specialty: "Dermatology", hmo: [], room: "", schedule: "" },
    { name: "Abigaille Ann C. Antonio", specialty: "Pulmonology", hmo: [], room: "OPD Extension, Room 7", schedule: "Wed: 9AM-12NN" },
    { name: "Steve S. Arellano", specialty: "Neurology", hmo: [], room: "", schedule: "" },
    { name: "Godard E. Artajos", specialty: "Neurology", hmo: [], room: "Ground Floor, Room 106", schedule: "Fri: 2PM" },
    { name: "Abraham Auberon B. Austria", specialty: "Pulmonology", hmo: [], room: "OPD Extension & Ground Floor, Room 102", schedule: "Tue, Wed, Thu & Sat: 9AM-12NN & Fri: 9AM-12NN" },
    { name: "Nijell Bangasan-Pizarro", specialty: "Internal Medicine", hmo: [], room: "OPD Extension", schedule: "Fri: 2PM-4PM" },
    { name: "Vida Margarette A. Bueno", specialty: "Neurology", hmo: [], room: "Ground Floor, Room 106", schedule: "Mon & Wed: 3PM" },
    { name: "Maria Chrisma Rodessa B. Burgos", specialty: "Child and Adolescent Psychiatry", hmo: [], room: "Ground Floor, Room 111", schedule: "Sat: 8AM-4PM (once a month)" },
    { name: "Max Geronimo T. Butardo", specialty: "Cardiology", hmo: [], room: "Ground Floor, Room 106", schedule: "Thu: 2PM" },
    { name: "Carie R. Cabinian", specialty: "Nephrology", hmo: [], room: "Ground Floor, Room 105", schedule: "Fri: 3PM" },
    { name: "Marsha Michelle L. Cabuena", specialty: "Internal Medicine", hmo: [], room: "OPD Extension", schedule: "Wed, Fri & Sat: 8AM-10AM / 1PM-2PM" },
    { name: "Jean Abigaile C. Caringal", specialty: "Endocrinology", hmo: [], room: "", schedule: "" },
    { name: "Criselda M. Ciubal", specialty: "Infectious Disease Specialty", hmo: [], room: "", schedule: "" },
    { name: "Ofelia D. Datu", specialty: "Nephrology", hmo: [], room: "Ground Floor, Room 106", schedule: "Tue & Fri: 11AM-12NN" },
    { name: "Michelleen C. Del Rosario", specialty: "Pulmonology", hmo: [], room: "", schedule: "" },
    { name: "Jelna Shane L. Feri", specialty: "Gastroenterology", hmo: [], room: "Ground Floor, Room 106", schedule: "Mon & Wed: 2PM-4PM" },
    { name: "Marie Liz B. Fortuna", specialty: "Allergology, Asthma and Immunology", hmo: [], room: "OPD Extension", schedule: "Mon & Tue: 3PM" },
    { name: "Marjorie Antonette C. Fragante", specialty: "Gastroenterology", hmo: [], room: "OPD Extension", schedule: "Mon: 9AM-12NN & Fri: 9AM-12NN & 2PM" },
    { name: "Melani T. Gallero", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
    { name: "Dominetta S. Gonzalo", specialty: "Pulmonology", hmo: [], room: "Ground Floor, Room 106", schedule: "Mon: 2PM-4PM & Wed: 9AM" },
    { name: "Mercy Grace G. Kindipan", specialty: "Oncology", hmo: [], room: "5th Floor, Oncology Room", schedule: "Thu: 8AM" },
    { name: "Maria Blanca O. Kua", specialty: "Gastroenterology", hmo: [], room: "Ground Floor, Room 106", schedule: "Tue: 9AM-11AM" },
    { name: "Gerardo R. Lahoz", specialty: "Family Medicine", hmo: [], room: "", schedule: "" },
    { name: "Gloria R. Lahoz", specialty: "Cardiology", hmo: [], room: "", schedule: "" },
    { name: "Jeanne Zherluck Z. Lapira", specialty: "Nephrology", hmo: [], room: "Ground Floor, Room 104", schedule: "Tue & Thu: 2PM" },
    { name: "Robert Q. Lim", specialty: "Cardiology", hmo: ["Asianlife/Etiqa", "Cocolife", "Valucare", "Intellicare", "Maxicare", "Medicard"], room: "Room 115", schedule: "Mon-Sat: 10AM onwards" },
    { name: "Oliver Nicolas P. Mabanag", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
    { name: "Joel Malixi", specialty: "Dermatology", hmo: [], room: "", schedule: "" },
    { name: "Kristal F. Mendoza", specialty: "Clinical Nutrition", hmo: [], room: "", schedule: "" },
    { name: "Amor Rhea Q. Narag", specialty: "Nephrology", hmo: [], room: "Ground Floor, Room 109", schedule: "Mon, Wed & Fri: 2PM-4PM" },
    { name: "Rainick Brenhizar T. Navarro", specialty: "Neurology", hmo: [], room: "Room 111", schedule: "Mon & Fri: 9AM-12NN" },
    { name: "Frances Monina M. Obrero-Artajos", specialty: "Endocrinology, Diabetes and Metabolism", hmo: [], room: "OPD Extension, Room 5", schedule: "Thu: 10AM-12NN" },
    { name: "Elton Ong", specialty: "Neurology", hmo: [], room: "Room 111", schedule: "Tue & Fri: 6AM" },
    { name: "Isabella R. Panelo", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
    { name: "Donaryn V. Pasamonte", specialty: "Hematology", hmo: [], room: "Ground Floor, Room 102", schedule: "Sat: 9AM" },
    { name: "Ma. Eileen O. Pascua", specialty: "Gastroenterology", hmo: [], room: "Ground Floor, Room 109", schedule: "Tue: 2PM-4PM" },
    { name: "Eugene R. Pipo III", specialty: "Dermatology", hmo: [], room: "", schedule: "" },
    { name: "Lorenza Evangelina R. Pipo", specialty: "Endocrinology", hmo: [], room: "Ground Floor, Room 106", schedule: "Fri: 9AM" },
    { name: "John Christopher Q. Quadra", specialty: "Pulmonary", hmo: [], room: "OPD Extension", schedule: "Wed: 2PM-4PM" },
    { name: "Deanne D. Quilala", specialty: "Pulmonology", hmo: [], room: "Ground Floor, Room 102", schedule: "Tue & Thu: 2PM-4PM" },
    { name: "Charles Hubert R. Rabara", specialty: "Family Medicine", hmo: [], room: "Ground Floor, Room 109", schedule: "Sat: 2PM" },
    { name: "Elyzel C. Rabara", specialty: "Nephrology", hmo: [], room: "", schedule: "" },
    { name: "Marvin M. Riambon", specialty: "Adult Cardiology", hmo: [], room: "Ground Floor, Room 106", schedule: "Tue & Fri: 9AM-12NN" },
    { name: "Maria Fatima B. Sabaten", specialty: "Gastroenterology", hmo: [], room: "Ground Floor, Room 106", schedule: "Sat: 2PM" },
    { name: "Marie Joyce U. Santos", specialty: "Infectious Disease Specialty", hmo: [], room: "", schedule: "" },
    { name: "Glenda O. Tagorda", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
    { name: "Joy M. Tolentino", specialty: "Internal Medicine", hmo: [], room: "", schedule: "" },
    { name: "Arnolfo B. Tomas Jr.", specialty: "Adult Cardiology", hmo: [], room: "", schedule: "" },
    { name: "Stephen A. Ujano", specialty: "Internal Medicine", hmo: [], room: "OPD Extension", schedule: "Thu: 2PM-4PM" },
    { name: "Annalyn Q. Urbano", specialty: "Rheumatology", hmo: [], room: "Ground Floor, Room 111", schedule: "Fri: 2PM-5PM (every 2nd-4th of the month)" },
    { name: "Jeremiah R. Vallente", specialty: "Hematology", hmo: [], room: "Ground Floor, Room 104", schedule: "Thu: 10AM" },
    { name: "Luz Gregoria L. Velasco", specialty: "Internal Medicine", hmo: ["Asianlife/Etiqa", "Cocolife", "Insular", "IMS Wellthcare", "Valucare", "Maxicare", "Medicard"], room: "OPD Ext, Room 5", schedule: "Fri & Sat: 11AM-2PM" },
    { name: "Leslie R. Viado", specialty: "Cardiology/Vascular", hmo: [], room: "Ground Floor, Room 102", schedule: "Tue: 8AM" },
    { name: "Johann D. Yee", specialty: "Psychiatry", hmo: [], room: "Ground Floor, Room 111", schedule: "Thu: 1PM-3PM" },
    { name: "Roland L. Zara", specialty: "Infectious Disease Specialty", hmo: [], room: "Ground Floor, Room 111", schedule: "Thu: 10AM" },
    { name: "Ma. Margaret S. Acebedo-Licnachan", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Caridad G. Advincula", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Emma Ruth P. Aquitania", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Jay Ian R. Argel", specialty: "OB-GYNE", hmo: [], room: "OPD Extension", schedule: "Mon & Thu: 1PM-4PM" },
    { name: "Czarina C. Artienda", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Lovely Anne C. Bantugon", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Lilybeth A. Bautista", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Cheryl A. Cabebe", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Mae Ramos Cadacio", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Shara Antonette Z. Cañero", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Marifel Gertrude A. Cortez", specialty: "OB-GYNE - Ultrasound", hmo: [], room: "", schedule: "" },
    { name: "Ruth Judith Gay V. Cristobal", specialty: "OB-GYNE - ONCOLOGY", hmo: [], room: "5th Floor, Oncology Room", schedule: "Mon, Fri & Sat: 9AM-12NN" },
    { name: "Evangeline A. De Vera", specialty: "OB-GYNE", hmo: ["Asianlife/Etiqa", "Cocolife", "Intellicare", "Maxicare", "Medicard"], room: "OPD Extension", schedule: "Mon-Sat: 9AM-12NN" },
    { name: "Humbeline R. Galut", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Florely Joy E. Gregorio", specialty: "OB-GYNE", hmo: [], room: "Ground Floor, Room 106", schedule: "Wed: 2PM" },
    { name: "Rachel D. Jalog", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Ryan Joseph B. Lirazan", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Jenelyn S. Mendoza", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Joyce Lizzette M. Montemayor", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Kristel Paulane Fleur L. Oandasan", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Jennifer T. Ordoñez", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Fides A. Paat", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Glenda P. Rabino", specialty: "OB-GYNE", hmo: [], room: "OPD Extension", schedule: "Wed & Fri: 8AM-10AM" },
    { name: "Maria Katherine A. Ranches", specialty: "OB-GYNE", hmo: [], room: "OPD Extension, Room 2", schedule: "Wed: 2PM-4PM" },
    { name: "Lerida G. Rosario", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Alda Gene P. Tremor", specialty: "OB-GYNE - Perinatology", hmo: ["Intellicare"], room: "", schedule: "" },
    { name: "Antonio G. Uclusin", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Asela Pearl Llane V. Vera Cruz", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Frances B. Vera Cruz", specialty: "OB-GYNE", hmo: [], room: "", schedule: "" },
    { name: "Domingo A. Cuanang III", specialty: "Radiation Oncologist", hmo: [], room: "", schedule: "" },
    { name: "Gretchen G. Agdamag-Calderon", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
    { name: "Simeon Emmanuel J. Aquino II", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
    { name: "Karen R. Cabrera", specialty: "Ophthalmology", hmo: [], room: "Ground Floor, Room 112", schedule: "Mon & Sat: 1PM-4PM" },
    { name: "Marc Frederick Q. Panganiban", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
    { name: "Jennifer Joy S. Rayos", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
    { name: "Victoria Anne Y. Rosario", specialty: "Ophthalmology", hmo: [], room: "Ground Floor, Room 112", schedule: "Tue, Wed & Thu: 10AM-1PM" },
    { name: "Sofia Cecilia S. Sipin", specialty: "Ophthalmology", hmo: [], room: "Ground Floor, Room 112", schedule: "Tue: 10AM-2PM" },
    { name: "Donald C. Subia", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
    { name: "Rolando N. Vermudez", specialty: "Ophthalmology", hmo: [], room: "", schedule: "" },
    { name: "Zeus Lord Angel M. Alcaraz", specialty: "Anatomic and Clinical Pathology", hmo: [], room: "", schedule: "" },
    { name: "Teresa Gail R. Galut", specialty: "Pathology", hmo: [], room: "", schedule: "" },
    { name: "Genie Claire P. Mercado-Refuerzo", specialty: "Clinical Pathology", hmo: [], room: "", schedule: "" },
    { name: "Sheryl Q. Racelis", specialty: "Pathology", hmo: [], room: "", schedule: "" },
    { name: "Brenda I. Rosuman", specialty: "Pathology", hmo: [], room: "", schedule: "" },
    { name: "Gail D. Tanawit", specialty: "Pathology", hmo: [], room: "", schedule: "" },
    { name: "Ailyn I. Agdeppa", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Maria L. Arquillo", specialty: "Pediatric Pulmonology", hmo: [], room: "", schedule: "" },
    { name: "Jennifer C. Baccay", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Rochelle B. Carta", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Judy P. Deveza", specialty: "Pediatrics - Neurology", hmo: [], room: "Ground Floor, Room 106", schedule: "Fri: 2PM-4PM" },
    { name: "Joan T. Galano", specialty: "Pediatrics - Hematology", hmo: [], room: "Ground Floor, Room 106", schedule: "Thu: 9AM (once a month)" },
    { name: "Maura Gonzales", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Irwina M. Lazo", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Jean T. Mahor", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Ria Rose Ann G. Manantan", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Teresita R. Martin", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Aurea Alicia D. Matias", specialty: "Pediatrics - Neonatology", hmo: [], room: "", schedule: "" },
    { name: "Dianne Alexis C. Millado-Riambon", specialty: "Pediatric Pulmonary & Critical Care Medicine and Pediatric Pulmonary Rehabilitation", hmo: [], room: "OPD Extension, Room 5", schedule: "Tue: 10AM-12NN" },
    { name: "Honely Q. Mores", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Djimbo Alexis F. Oandasan", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Imelda R. Pablico", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Marilyn Santa Maria Paz", specialty: "Pediatrics", hmo: [], room: "", schedule: "" },
    { name: "Melissa Donata A. Ragasa", specialty: "Pediatrics", hmo: [], room: "4th Floor, Room 403", schedule: "Mon-Sat (except Thu): 9AM-12NN" },
    { name: "Beatriz M. Reyes", specialty: "Pediatrics", hmo: [], room: "Ground Floor, Room 106", schedule: "Mon, Wed, Fri & Sat: 10AM-12NN" },
    { name: "Angeli Romerosa-Fernando", specialty: "Pediatrics", hmo: [], room: "OPD Extension", schedule: "Wed & Thu: 2PM-5PM" },
    { name: "Ma. Eloisa L. Salvador", specialty: "Pediatrics - Cardiology", hmo: [], room: "", schedule: "" },
    { name: "Joan R. Viado", specialty: "Pediatrics - Neurology", hmo: [], room: "4th Floor, Room 403", schedule: "Thu: 9AM-12NN" },
    { name: "Isaias P. Alipio", specialty: "Rehabilitation Medicine", hmo: [], room: "4th Floor, Room 407", schedule: "Fri: 8AM-12NN" },
    { name: "Jonas Claro A. Cauton", specialty: "Physical & Rehabilitation Med", hmo: [], room: "4th Floor, Room 407", schedule: "Wed: 1PM-4PM" },
    { name: "John Michael T. Mendoza", specialty: "Rehabilitation Medicine", hmo: [], room: "4th Floor, Room 407", schedule: "Sat: 2PM-4PM" },
    { name: "Ben Paolo C. Rabara", specialty: "Rehabilitation Medicine", hmo: [], room: "4th Floor, Room 407", schedule: "Mon: 1:30PM-3PM" },
    { name: "Marilou A. Almoite", specialty: "Radiologist", hmo: [], room: "", schedule: "" },
    { name: "Bernadette F. Bato", specialty: "Radiology", hmo: [], room: "", schedule: "" },
    { name: "Ivan Lemuel M. De Grano", specialty: "Radiologist", hmo: [], room: "", schedule: "" },
    { name: "Marc Dominic G. Rosario", specialty: "Radiology", hmo: [], room: "", schedule: "" },
    { name: "Hannah Regina V. Tabali", specialty: "Radiology", hmo: [], room: "", schedule: "" },
    { name: "Anthony R. Vera Cruz", specialty: "Radiologist", hmo: [], room: "", schedule: "" },
    { name: "Camelot C. Agdeppa", specialty: "Surgery - Hepatobiliary and Pancreatic", hmo: ["Intellicare"], room: "Ground Floor, Room 105", schedule: "Mon-Fri: 9AM" },
    { name: "Vivien Marie P. Abitong-Bolislis", specialty: "Surgery", hmo: [], room: "Ground Floor, Room 106", schedule: "Wed: 2PM" },
    { name: "Conrado M. Andal", specialty: "Surgery", hmo: ["Asianlife/Etiqa", "Cocolife", "Eastwest", "HPPI", "Insular", "IMS Wellthcare", "Valucare", "Intellicare", "Medicard"], room: "Ground Floor, Room 106", schedule: "Mon-Sat: 9AM-12NN" },
    { name: "Michael Martin C. Baccay", specialty: "Surgery - Thoracic and Cardiovascular", hmo: [], room: "", schedule: "" },
    { name: "Jobelle Joyce Anne R. Baldonado", specialty: "Surgery - Thoracic and Cardiovascular", hmo: [], room: "", schedule: "" },
    { name: "Modesto David A. Bolislis", specialty: "Surgery - Orthopedic", hmo: [], room: "Ground Floor, Room 105", schedule: "Wed: 8AM-10AM" },
    { name: "Laurence Owen R. Bundal", specialty: "Surgery", hmo: [], room: "", schedule: "" },
    { name: "Manuel D. Cajigal", specialty: "Surgery", hmo: [], room: "", schedule: "" },
    { name: "Claro G. Cauton", specialty: "Surgery - Orthopedic", hmo: ["Intellicare"], room: "Ground Floor, Room 106", schedule: "Tue & Thu: 2PM-4PM" },
    { name: "Margarita Jai B. Cobangco", specialty: "Surgery", hmo: [], room: "OPD Extension, Room 5", schedule: "Wed: 2PM-4PM" },
    { name: "Ana Patricia V. De Grano", specialty: "Surgery - Plastic", hmo: [], room: "", schedule: "" },
    { name: "John Clemente A. De Leon", specialty: "Surgery - Neuro", hmo: [], room: "Ground Floor, Room 109", schedule: "Tue & Thu: 10AM-1PM" },
    { name: "Marcelino D. De Peralta", specialty: "Surgery - Orthopedic", hmo: ["Cocolife", "Medicard"], room: "Ground Floor, Room 105", schedule: "Mon-Sat: 11AM-1PM" },
    { name: "Maureen Elvira V. Dumlao", specialty: "Surgery", hmo: [], room: "Ground Floor, Room 106", schedule: "Tue: 9AM-12NN" },
    { name: "Christian Dale R. Feri", specialty: "Surgery - Urology", hmo: [], room: "Ground Floor, Room 106", schedule: "Mon, Fri: 1PM & Tue, Thu: 9AM" },
    { name: "Miguel Carlo R. Galut", specialty: "Urology", hmo: [], room: "Ground Floor, Room 106", schedule: "Tue: 1PM-3PM & Wed: 10AM-12NN" },
    { name: "Susan F. Labuntong", specialty: "Surgery - Vascular", hmo: [], room: "", schedule: "" },
    { name: "Esperanza R. Lahoz", specialty: "Surgery", hmo: [], room: "", schedule: "" },
    { name: "Reynaldo P. Paz", specialty: "Surgery", hmo: [], room: "", schedule: "" },
    { name: "Leslie V. Rafanan", specialty: "Surgery - Urology", hmo: [], room: "Ground Floor, Room 106", schedule: "Mon, Tue & Fri: 9AM-12NN" },
    { name: "Digna R. Ragasa", specialty: "Surgery", hmo: ["Asianlife/Etiqa", "Cocolife", "Eastwest", "HMI", "HPPI", "Insular", "IMS Wellthcare", "Philcare", "Valucare", "Generali", "Kaizer", "Intellicare", "Maxicare", "Medicard", "Medasia", "Amaphil"], room: "Ground Floor, Room 106", schedule: "Mon-Sat: 9AM-12NN" },
    { name: "Vivencio R. Refuerzo", specialty: "Surgery - Colorectal", hmo: [], room: "Ground Floor, Room 105", schedule: "Sat: 2PM" },
    { name: "Marjorie B. Sierra", specialty: "Orthopedic - Oncology", hmo: [], room: "Ground Floor, Room 105", schedule: "Tue & Thu: 9AM" },
    { name: "Ernesto R. Tagorda Jr.", specialty: "Surgery", hmo: ["Cocolife", "Eastwest", "HMI", "HPPI", "Insular", "IMS Wellthcare", "Intellicare", "Maxicare"], room: "Ground Floor, Room 106", schedule: "Mon-Sat: 9AM-12NN" },
    { name: "Benjamin Q. Tolentino III", specialty: "Surgery", hmo: [], room: "", schedule: "" },
    { name: "Jonah Lyn P. Toribio", specialty: "Surgery", hmo: [], room: "OPD Extension", schedule: "Mon: 2PM-4PM" },
    { name: "Porfirio Tugas", specialty: "Surgery", hmo: [], room: "", schedule: "" },
    { name: "Ria Jane U. Uclaray", specialty: "Surgery/Pediatrics", hmo: [], room: "Ground Floor, Room 102", schedule: "Fri: 9AM" },
    { name: "Crispin Allan T. Viado", specialty: "Surgery - Neuro", hmo: [], room: "Ground Floor, Room 102", schedule: "Wed: 1PM & Sat: 10AM" },
    { name: "Johnson E. Zabat", specialty: "Surgery - Urology", hmo: [], room: "Ground Floor, Room 106", schedule: "Thu: 2PM-4PM" }
];


// ========================
// IMAGE HANDLING (OPTIMIZED)
// ========================
const imageFolder = "img/doctors/";

async function updateImagesInBackground() {
    const promises = doctors.map(async (doc, index) => {
        const nameKey = getFirstAndLastName(doc.name);
        const imagePath = `${imageFolder}dr_${nameKey}.avif`;
        const exists = await checkImageExists(imagePath);
        if (exists) {
            doctors[index].image = imagePath;
            const imgElement = document.querySelector(`img[data-name="${doc.name}"]`);
            if (imgElement) {
                imgElement.src = imagePath;
            }
        }
    });
    await Promise.all(promises);
    console.log("All image checks are complete.");
}

function checkImageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

function getFirstAndLastName(fullName) {
    const cleanName = fullName.replace(/,? ?(Jr|Sr|I|II|III|IV|V)\.?$/i, '');
    const parts = cleanName.trim().split(/\s+/);
    const firstName = parts[0].replace(/[^a-zA-Z]/g, "").toLowerCase();
    const lastNameParts = parts.slice(parts.findIndex(p => p.includes(".")) + 1);
    const lastName = (lastNameParts.length ? lastNameParts : parts.slice(-1))
        .join("-").replace(/[^a-zA-Z-]/g, "").toLowerCase();
    return `${firstName}_${lastName}`;
}

// =====================================================================
// NEW HELPER FUNCTION TO GROUP SPECIALTIES
// =====================================================================
function getSpecialtyGroup(specialty) {
    if (!specialty) return "Other";

    const lowerSpecialty = specialty.toLowerCase();

    if (lowerSpecialty.includes('surgery') || lowerSpecialty.includes('orthopedic') || lowerSpecialty.includes('urology')) {
        return "Surgery & Subspecialties";
    }
    if (lowerSpecialty.includes('otorhinolaryngology') || lowerSpecialty.includes('ent') || lowerSpecialty.includes('ear, nose, throat')) {
        return "ENT (Otorhinolaryngology)";
    }
    if (lowerSpecialty.includes('ob-gyne')) {
        return "Obstetrics & Gynecology (OB-GYNE)";
    }
    if (lowerSpecialty.includes('pediatric')) {
        return "Pediatrics & Subspecialties";
    }
    if (lowerSpecialty.includes('cardiology')) {
        return "Cardiology";
    }
    if (lowerSpecialty.includes('pulmonology') || lowerSpecialty.includes('pulmonary')) {
        return "Pulmonology";
    }
    if (lowerSpecialty.includes('radiology') || lowerSpecialty.includes('radiologist')) {
        return "Radiology";
    }
    if (lowerSpecialty.includes('pathology')) {
        return "Pathology";
    }
    if (lowerSpecialty.includes('rehabilitation') || lowerSpecialty.includes('physical & rehabilitation')) {
        return "Rehabilitation Medicine";
    }
    // For specialties that are already clean, we can return them directly
    const directMatches = [
        "Anesthesiology", "Dentistry", "Dermatology", "Gastroenterology", 
        "Nephrology", "Neurology", "Ophthalmology", "Internal Medicine", "Family Medicine"
    ];

    for (const match of directMatches) {
        if (specialty === match) {
            return match;
        }
    }

    // Fallback for any other specific cases or return the original if no group is found
    return specialty;
}


// ========================
// PAGE INITIALIZATION & LOGIC
// ========================

function initPage() {
    // Get references to all necessary DOM elements
    const grid = document.getElementById("doctorsGrid");
    const specialtyFilter = document.getElementById("specialtyFilter");
    const searchBox = document.getElementById("searchBox");
    const modal = document.getElementById("doctorModal");
    const modalName = document.getElementById("modalName");
    const modalSpecialty = document.getElementById("modalSpecialty");
    const modalRoom = document.getElementById("modalRoom");
    const modalSchedule = document.getElementById("modalSchedule");
    const modalImage = document.getElementById("modalImage");
    const modalHmo = document.getElementById("modalHmo");
    const loadMoreBtn = document.getElementById("loadMore");
    const closeModalBtn = document.getElementById("closeModal");

    // --- Populate Specialty Filter using the new grouping function ---
    const specialtyGroups = [...new Set(doctors.map(doc => getSpecialtyGroup(doc.specialty)))]
        .filter(group => group && group !== "Other")
        .sort();

    specialtyGroups.forEach(group => {
        const option = document.createElement("option");
        option.value = group;
        option.textContent = group;
        specialtyFilter.appendChild(option);
    });

    // --- Pagination Logic ---
    let displayedCount = 0;
    const increment = 20;

    let touchStartY = 0;
    let touchEndY = 0;

    function renderDoctors(list, reset = false) {
        if (reset) {
            grid.innerHTML = "";
            displayedCount = 0;
        }
        const slice = list.slice(displayedCount, displayedCount + increment);
        slice.forEach(doc => {
            const card = document.createElement("div");
            card.className = "bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer text-center py-6";
            card.innerHTML = `
                <img src="${doc.image}" data-name="${doc.name}" alt="Doctor IMG" class="w-28 h-28 mx-auto rounded-full mb-3 object-cover">
                <h3 class="text-lg font-semibold">Dr. ${doc.name}</h3>
                <p class="text-green-600">${doc.specialty || 'N/A'}</p>
            `;
            card.onclick = () => showModal(doc);
            grid.appendChild(card);
        });
        displayedCount += slice.length;
        loadMoreBtn.classList.toggle("hidden", displayedCount >= list.length);
    }

    // --- Modal Logic ---
    function closeDoctorModal() {
        modal.classList.add("hidden");
        document.documentElement.classList.remove("modal-open");
    }

    function handleModalSwipe() {
        const swipeDistance = touchEndY - touchStartY;
        const swipeThreshold = 50;
        if (Math.abs(swipeDistance) > swipeThreshold) {
            closeDoctorModal();
        }
    }

    function safeText(value) {
        if (!value) return "N/A";
        const trimmed = typeof value === 'string' ? value.trim() : '';
        if (trimmed === "" || trimmed === "-" || trimmed.toUpperCase() === "TBA") {
            return "N/A";
        }
        return trimmed;
    }

    function setModalField(element, label, value) {
        const safeValue = safeText(value);
        element.textContent = "";
        if (label) {
            const labelSpan = document.createElement("span");
            labelSpan.textContent = label + " ";
            element.appendChild(labelSpan);
        }
        const valueSpan = document.createElement("span");
        valueSpan.textContent = safeValue;
        if (safeValue === "N/A") {
            valueSpan.style.color = "#888";
            valueSpan.style.fontStyle = "italic";
        }
        element.appendChild(valueSpan);
    }

    function showModal(doc) {
        setModalField(modalName, "Dr.", doc.name);
        setModalField(modalSpecialty, "", doc.specialty);
        setModalField(modalRoom, "Clinic:", doc.room);
        setModalField(modalSchedule, "Schedule:", doc.schedule);
        const hmoList = doc.hmo && doc.hmo.length ? doc.hmo.join(", ") : "";
        setModalField(modalHmo, "HMO Accreditations:", hmoList);
        modalImage.src = doc.image;
        
        modal.classList.remove("hidden");
        document.documentElement.classList.add("modal-open");
    }

    // --- Filtering Logic (Updated to use the grouping function) ---
    function normalizeString(str) {
        if (!str) return "";
        return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function filterDoctors() {
        const search = normalizeString(searchBox.value);
        const specialtyGroup = specialtyFilter.value;

        currentList = doctors.filter(doc => {
            const nameMatch = normalizeString(doc.name).includes(search);
            const specialtyMatch = normalizeString(doc.specialty).includes(search);
            const roomMatch = normalizeString(doc.room).includes(search);
            const hmoMatch = doc.hmo && doc.hmo.some(hmo => normalizeString(hmo).includes(search));
            
            // This is the updated line for filtering
            const specialtyFilterMatch = (specialtyGroup === "all" || getSpecialtyGroup(doc.specialty) === specialtyGroup);
            
            return specialtyFilterMatch && (nameMatch || specialtyMatch || roomMatch || hmoMatch);
        });
        renderDoctors(currentList, true);
    }

    // --- Event Listeners ---
    searchBox.addEventListener("input", filterDoctors);
    specialtyFilter.addEventListener("change", filterDoctors);
    loadMoreBtn.addEventListener("click", () => renderDoctors(currentList));
    closeModalBtn.addEventListener("click", closeDoctorModal);
    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeDoctorModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeDoctorModal();
        }
    });

    modal.addEventListener('touchstart', (e) => {
        if (e.target === modal) {
            touchStartY = e.changedTouches[0].screenY;
        }
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
        if (e.target === modal) {
            touchEndY = e.changedTouches[0].screenY;
            handleModalSwipe();
        }
    });

    // Initial render of the first batch of doctors
    renderDoctors(doctors);
}