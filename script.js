const doctors = {
  ravi: {
    name: "Dr. Ravi Sharma",
    hospital: "Apex Multispeciality",
    specialty: "General Physician",
    onlineConsultation: true,
    consultModes: ["chat", "video"],
    inPersonSlots: ["10:00 AM", "11:00 AM", "2:00 PM"],
    onlineSlots: ["5:00 PM", "6:00 PM"],
    fee: {
      inPerson: 300,
      video: 500,
    },
    photo: "assets/doctor1.jpg"
  },
  krishna: {
    name: "Dr. Krishna",
    hospital: "Apex Multispeciality",
    specialty: "General Physician",
    onlineConsultation: false,
    inPersonSlots: ["10:00 AM", "11:00 AM", "2:00 PM"],
    fee: {
      inPerson: 500,
    },
    photo: "assets/doctor2.jpg"
  }
};


function renderDoctor(doctorKey) {
  const doctor = doctors[doctorKey];

  document.getElementById("doctor-name").textContent = doctor.name;
  document.getElementById("specialty").textContent = doctor.specialty;
  document.getElementById("hospital").textContent = doctor.hospital;
  document.querySelector("img[alt='Doctor Photo']").src = doctor.photo;

  document.getElementById("inPersonSlots").innerHTML = "";
  document.getElementById("onlineSlots").innerHTML = "";


  const onlineTab = document.getElementById("online-tab-li");
  if (!doctor.onlineConsultation) {
    onlineTab.style.display = "none";
  } else {
    onlineTab.style.display = "block";
    doctor.onlineSlots.forEach(slot => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-secondary btn-sm me-2 mb-2";
      btn.textContent = slot;
      document.getElementById("onlineSlots").appendChild(btn);
    });
    document.getElementById("onlineFee").textContent = doctor.fee.video;
  }

  // In-person
  doctor.inPersonSlots.forEach(slot => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-secondary btn-sm me-2 mb-2";
    btn.textContent = slot;
    document.getElementById("inPersonSlots").appendChild(btn);
  });
  document.getElementById("inPersonFee").textContent = doctor.fee.inPerson;
}


document.getElementById("doctorSelect").addEventListener("change", (e) => {
  renderDoctor(e.target.value);
});


renderDoctor("ravi");
