<template>
  <div>
    <div>
      <body style="background-color: #121212">
        <form name="form" @submit.prevent="handleRegister">
          <div class="card-deck bg-light">
            <div class="card">
              <div class="card-body bg-dark text-white">
                <div class="container">
                  <h3>Background Info</h3>
                  <br />
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="name">Character Name:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="charactername"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                  <div v-if="loading">Loading race dropdown...</div>
                  <div v-else class="row">
                    <fieldset class="col-4">
                      <label for="race">Race:</label>
                    </fieldset>
                    <fieldset class="col-8">
                      <b-form-select
                        v-model="characterRace"
                        :options="raceOptions"
                        type="text"
                        id="race"
                        name="race"
                      /><br />
                    </fieldset>
                  </div>
                  <div v-if="loading2">Loading class dropdown...</div>
                  <div v-else class="row">
                    <fieldset class="col-4">
                      <label for="class">Class:</label>
                    </fieldset>
                    <fieldset class="col-8">
                      <b-form-select
                        v-model="characterClass"
                        :options="classOptions"
                        type="text"
                        id="class"
                        name="class"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="background">Background:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="background"
                        type="text"
                        id="background"
                        name="background"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="flaw">Flaw:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="flaw"
                        type="text"
                        id="flaw"
                        name="flaw"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="bond">Bond:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="bond"
                        type="text"
                        id="bond"
                        name="bond"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="ideal">Ideal:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="ideal"
                        type="text"
                        id="ideal"
                        name="ideal"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                  <br />
                  <h3>Appearance</h3>
                  <br />
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Height">Height:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="height"
                        type="text"
                        id="Height"
                        name="Height"
                        placeholder="Float (e.g, 5.6, 2.4, etc)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Eye Color">Eye Color:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="eyeColor"
                        type="text"
                        id="Eye Color"
                        name="Eye Color"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Hair Color">Hair Color:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="hairColor"
                        type="text"
                        id="Hair Color"
                        name="Hair Color"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Weight">Weight:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="weight"
                        type="text"
                        id="Weight"
                        name="Weight"
                        placeholder="Integer (e.g, 25, 693, etc)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Age">Age:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="age"
                        type="text"
                        id="Age"
                        name="Age"
                        placeholder="Integer (e.g, 25, 693, etc)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Skin Color">Skin Color:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="skinColor"
                        type="text"
                        id="Skin Color"
                        name="Skin Color"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Unique Mark">Unique Mark:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="uniqueMark"
                        type="text"
                        id="Unique Mark"
                        name="Unique Mark"
                        placeholder="String (1024 letter max)"
                      /><br />
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body bg-dark text-white">
                <div class="container">
                  <h3>Skills: Proficiency (P) and Expertise (E)</h3>
                  <br />
                  <div class="row">
                    <fieldset class="col-8">
                      <span></span>
                    </fieldset>
                    <fieldset class="col-1">
                      <span>P</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <span>E</span>
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Acrobatics</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="AcrobaticsProf"
                        type="checkbox"
                        id="AcrobaticsProf"
                        name="AcrobaticsProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="AcrobaticsExpert"
                        type="checkbox"
                        id="AcrobaticsExpert"
                        name="AcrobaticsExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Animal Handling</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="AnimalHandlingProf"
                        type="checkbox"
                        id="AnimalHandlingProf"
                        name="AnimalHandlingProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="AnimalHandlingExpert"
                        type="checkbox"
                        id="AnimalHandlingExpert"
                        name="AnimalHandlingExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Arcana</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="ArcanaProf"
                        type="checkbox"
                        id="ArcanaProf"
                        name="ArcanaProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="ArcanaExpert"
                        type="checkbox"
                        id="ArcanaExpert"
                        name="ArcanaExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Athletics</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="AthleticsProf"
                        type="checkbox"
                        id="AthleticsProf"
                        name="AthleticsProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="AthleticsExpert"
                        type="checkbox"
                        id="AthleticsExpert"
                        name="AthleticsExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Deception</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="DeceptionProf"
                        type="checkbox"
                        id="DeceptionProf"
                        name="DeceptionProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="DeceptionExpert"
                        type="checkbox"
                        id="DeceptionExpert"
                        name="DeceptionExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>History</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="HistoryProf"
                        type="checkbox"
                        id="HistoryProf"
                        name="HistoryProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="HistoryExpert"
                        type="checkbox"
                        id="HistoryExpert"
                        name="HistoryExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Insight</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="InsightProf"
                        type="checkbox"
                        id="InsightProf"
                        name="InsightProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="InsightExpert"
                        type="checkbox"
                        id="InsightExpert"
                        name="InsightExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Intimidation</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="IntimidationProf"
                        type="checkbox"
                        id="IntimidationProf"
                        name="IntimidationProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="IntimidationExpert"
                        type="checkbox"
                        id="IntimidationExpert"
                        name="IntimidationExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Investigation</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="InvestigationProf"
                        type="checkbox"
                        id="InvestigationProf"
                        name="InvestigationProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="InvestigationExpert"
                        type="checkbox"
                        id="InvestigationExpert"
                        name="InvestigationExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Medicine</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="MedicineProf"
                        type="checkbox"
                        id="MedicineProf"
                        name="MedicineProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="MedicineExpert"
                        type="checkbox"
                        id="MedicineExpert"
                        name="MedicineExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Nature</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="NatureProf"
                        type="checkbox"
                        id="NatureProf"
                        name="NatureProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="NatureExpert"
                        type="checkbox"
                        id="NatureExpert"
                        name="NatureExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Perception</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="PerceptionProf"
                        type="checkbox"
                        id="PerceptionProf"
                        name="PerceptionProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="PerceptionExpert"
                        type="checkbox"
                        id="PerceptionExpert"
                        name="PerceptionExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Performance</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="PerformanceProf"
                        type="checkbox"
                        id="PerformanceProf"
                        name="PerformanceProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="PerformanceExpert"
                        type="checkbox"
                        id="PerformanceExpert"
                        name="PerformanceExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Persuasion</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="PersuasionProf"
                        type="checkbox"
                        id="PersuasionProf"
                        name="PersuasionProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="PersuasionExpert"
                        type="checkbox"
                        id="PersuasionExpert"
                        name="PersuasionExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Religion</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="ReligionProf"
                        type="checkbox"
                        id="ReligionProf"
                        name="ReligionProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="ReligionExpert"
                        type="checkbox"
                        id="ReligionExpert"
                        name="ReligionExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Sleight Of Hand</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="SleightOfHandProf"
                        type="checkbox"
                        id="SleightOfHandProf"
                        name="SleightOfHandProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="SleightOfHandExpert"
                        type="checkbox"
                        id="SleightOfHandExpert"
                        name="SleightOfHandExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Stealth</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="StealthProf"
                        type="checkbox"
                        id="StealthProf"
                        name="StealthProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="StealthExpert"
                        type="checkbox"
                        id="StealthExpert"
                        name="StealthExpert"
                      />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-8">
                      <span>Survival</span>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="SurvivalProf"
                        type="checkbox"
                        id="SurvivalProf"
                        name="SurvivalProf"
                      />
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="SurvivalExpert"
                        type="checkbox"
                        id="SurvivalExpert"
                        name="SurvivalExpert"
                      />
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body bg-dark text-white">
                <div class="container">
                  <h3>Statistics</h3>
                  <br />
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="level">Character Level:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="level"
                        type="text"
                        id="level"
                        name="level"
                        placeholder="Integer"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="hitpoints">Max Hitpoints:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="hitpoints"
                        type="text"
                        id="hitpoints"
                        name="hitpoints"
                        placeholder="Integer"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Strength">Strength:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="strength"
                        type="text"
                        id="strength"
                        name="strength"
                        placeholder="Integer"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Dexterity">Dexterity:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="dexterity"
                        type="text"
                        id="Dexterity"
                        name="Dexterity"
                        placeholder="Integer"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Constitution">Constitution:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="constitution"
                        type="text"
                        id="Constitution"
                        name="Constitution"
                        placeholder="Integer"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Intelligence">Intelligence:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="intelligence"
                        type="text"
                        id="Intelligence"
                        name="Intelligence"
                        placeholder="Integer"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Wisdom">Wisdom:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="wisdom"
                        type="text"
                        id="Wisdom"
                        name="Wisdom"
                        placeholder="Integer"
                      /><br />
                    </fieldset>
                  </div>
                  <div class="row">
                    <fieldset class="col-4">
                      <label for="Charisma">Charisma:</label>
                    </fieldset>
                    <fieldset class="col-1">
                      <input
                        v-model="charisma"
                        type="text"
                        id="Charisma"
                        name="Charisma"
                        placeholder="Integer"
                      /><br />
                    </fieldset>
                  </div>
                  <br /><br />
                  <div class="form-group">
                    <button
                      class="btn btn-primary btn-block"
                      :disabled="loading || loading2"
                    >
                      <span
                        v-show="loading || loading2"
                        class="spinner-border spinner-border-sm"
                      ></span>
                      <span>Create!</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div v-if="message" class="alert alert-danger">
          {{ message }}
        </div>
      </body>
    </div>
  </div>
</template>

<style scoped>
.checkbox {
  column-count: 2;
}
</style>

<script>
import Api from "../api";
export default {
  name: "Register",
  data() {
    return {
      characterRace: null,
      characterClass: null,
      height: "",
      eyeColor: "",
      hairColor: "",
      weight: "",
      age: "",
      skinColor: "",
      uniqueMark: "",
      charactername: "",
      background: "",
      flaw: "",
      bond: "",
      ideal: "",
      AcrobaticsProf: false,
      AcrobaticsExpert: false,
      AnimalHandlingProf: false,
      AnimalHandlingExpert: false,
      ArcanaProf: false,
      ArcanaExpert: false,
      AthleticsProf: false,
      AthleticsExpert: false,
      DeceptionProf: false,
      DeceptionExpert: false,
      HistoryProf: false,
      HistoryExpert: false,
      InsightProf: false,
      InsightExpert: false,
      IntimidationProf: false,
      IntimidationExpert: false,
      InvestigationProf: false,
      InvestigationExpert: false,
      MedicineProf: false,
      MedicineExpert: false,
      NatureProf: false,
      NatureExpert: false,
      PerceptionProf: false,
      PerceptionExpert: false,
      PerformanceProf: false,
      PerformanceExpert: false,
      PersuasionProf: false,
      PersuasionExpert: false,
      physicalityID: null,
      ReligionProf: false,
      ReligionExpert: false,
      SleightOfHandProf: false,
      SleightOfHandExpert: false,
      StealthProf: false,
      StealthExpert: false,
      SurvivalProf: false,
      SurvivalExpert: false,
      level: "",
      hitpoints: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      loading: true,
      loading2: true,
      message: "",
      msg: [],
      classes: [],
      races: [],
    };
  },
  methods: {
    handleRegister() {
      this.message = "";
      Api.getIDFromRaceName(this.characterRace).then((res) => {
        this.characterRace = res.data[0].raceid;
      });
      Api.getIDFromClassName(this.characterClass).then((res) => {
        this.characterClass = res.data[0].dndclassid;
        Api.createPhysicality(
          this.height,
          this.eyeColor,
          this.hairColor,
          this.weight,
          this.age,
          this.skinColor,
          this.uniqueMark
        ).then(() => {
          Api.getPhysID(
            this.height,
            this.eyeColor,
            this.hairColor,
            this.weight,
            this.age,
            this.skinColor,
            this.uniqueMark
          ).then((res) => {
            this.physicalityID = res.data[0].physicalityid;
            Api.createCharacter(
              this.charactername,
              this.level,
              this.strength,
              this.intelligence,
              this.charisma,
              this.constitution,
              this.wisdom,
              this.dexterity,
              this.hitpoints,
              this.flaw,
              this.bond,
              this.ideal,
              this.background,
              this.characterRace,
              this.characterClass,
              this.physicalityID
            )
              .then(() => {
                this.$router.push("/");
                console.log(856);
              })
              .catch((error) => {
                console.log(error);
                if (error.response) {
                  this.message = error.response.data.message;
                  console.log(862);
                }
                this.loading = false;
              });
          });
        });
      });
    },
  },
  created: function () {
    document.title = "Create a Character";
    this.loading = true;
    Api.getAllClasses().then((res) => {
      //console.log(res);
      var newArray = [{ value: null, text: "Select a class" }];
      for (var i = 1; i <= res.data.length; i++) {
        newArray[i] = res.data[i - 1].subclass;
      }
      this.classOptions = newArray;
      this.classes = res.data;
      this.loading2 = false;
    });
    Api.getAllRaces().then((res) => {
      //console.log(res);
      var newArray = [{ value: null, text: "Select a race" }];
      for (var i = 1; i <= res.data.length; i++) {
        newArray[i] = res.data[i - 1].racename;
      }
      this.raceOptions = newArray;
      this.races = res.data;
      this.loading = false;
      //console.log(this.races)
    });
  },
};
</script>