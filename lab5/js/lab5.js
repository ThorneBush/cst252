let solarSystem = createSolarSystem();


solarSystem.newPlanet();
let sun = solarSystem.planets[0];
sun.color = "yellow";
sun.planetRadius = 50;
sun.orbitRadius = 0;

sun.newPlanet();
let earth = sun.planets[0];
earth.color = "green";
earth.planetRadius = 25; 
earth.orbitRadius = 200;

earth.newPlanet();
let earthMoon = earth.planets[0];
earthMoon.color = "lightblue";
earthMoon.planetRadius = 10;
earthMoon.orbitRadius = 30;


//ADD ADDITIONAL CODE HERE!

// let sunPlanet = solarSystem.planets[0];

solarSystem.planets[0].newPlanet();
solarSystem.planets[0].planets[1].color = "purple";
solarSystem.planets[0].planets[1].planetRadius = 20;
solarSystem.planets[0].planets[1].orbitRadius = 100;
    solarSystem.planets[0].planets[1].newPlanet();
    solarSystem.planets[0].planets[1].newPlanet();

solarSystem.planets[0].newPlanet();
solarSystem.planets[0].planets[2].color = "orange";
solarSystem.planets[0].planets[2].planetRadius = 50;
solarSystem.planets[0].planets[2].orbitRadius = 400;
    

// let earthPlanet = sunPlanet.planets[0];





//Leave this line here, don't change it! setInterval might be a fun thing to Google!
setInterval(function () { orbitPlanets(solarSystem);}, 20);