var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data:{
  patients: {
        "patientGuid": "SOME-REALLY-LONG-1234",
        "firstName": "Sylvia",
        "lastName": "Hernandez",
        "dob": "2012-09-01",
        "sexAtBirth": "F",
        "priority": "high"
      }
    },
  methods: {
    fetchPatients() {
      fetch("dummy.php")
      .then(response => response.json())
      .then(json => {waitingApp.patients = json});

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchPatients()
  }
});
