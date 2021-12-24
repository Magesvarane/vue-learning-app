const vueApp = Vue.createApp({
  // template: "<h2>Template Example</h2>",
  data() {
    return {
      name: "Mages",
      age: 25,
      showButtons: false,
      showMouseEvents: false,
      x: 0,
      y: 0,
      persons: [
        { name: "John", age: 10, img: "assets/john.jpg", isEligible: true },
        {
          name: "Albert",
          age: 45,
          img: "assets/albert.jpg",
          isEligible: false,
        },
        {
          name: "MacQueen",
          age: 37,
          img: "assets/macqueen.jpg",
          isEligible: false,
        },
      ],
      url: "https://v3.vuejs.org/",
    };
  },
  methods: {
    changeName() {
      this.name = "Magesvarane S";
    },
    toggleButtons() {
      this.showButtons = !this.showButtons;
    },
    toggleMouseEvents() {
      this.showMouseEvents = !this.showMouseEvents;
    },
    handleEvent(e, userArg) {
      console.log(e);

      if (userArg) {
        console.log(userArg);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleIsEligible(person) {
      person.isEligible = !person.isEligible;
    },
  },
  computed: {
    // This function can be used anywhere in the template
    filteredPersons() {
      return this.persons.filter((person) => person.isEligible);
    },
  },
});

vueApp.mount("#app");
