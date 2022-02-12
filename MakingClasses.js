function makeClass(){

    class Planet{
        construtor(targetPlanet){
            this.targetPlanet = targetPlanet;
        }
    }
  return Planet;
}

const Planet = makeClass();

const planet = new Planet('Jupiter');
console.log(planet.targetPlanet);