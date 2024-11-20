var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler{
  constructor(array){ //constructor
    this.pets = array;
  }

  //filter by age
  findPetsInAgeRange(minAge, maxAge){
    if(Number.isNaN(minAge) || Number.isNaN(maxAge)){
      return this.pets;
    }
    else{
      return this.pets.filter((pet)=>{
        return pet.age >= minAge && pet.age <= maxAge;
      });
    }
  }

  //sort
  listAdoptedPetsByDate(){
    if(this.pets === undefined){
        return [];
    }else{
      return this.pets.filter((pet)=>{  //filter adopted pets only
        return pet.adopted === true;  
      }).sort((a, b)=>{ //now sort by date (most recent)
        return new Date(b.adoptedDate) - new Date(a.adoptedDate); //for descending order use (a - b)
      });
    }
  }

  listPets() {
    let petsToDisplay = [];

    if (arguments.length === 0) { //no arguments provided
        petsToDisplay = this.pets;
    } else if (arguments.length === 1 && typeof arguments[0] === 'array') {
        // If one argument is passed and it's an array, use that array
        petsToDisplay = arguments[0];
    } else {//multiple arguments
        petsToDisplay = arguments;
    }

    // Call the function to create formatted pet items
    return createPetItem(petsToDisplay);

    // Function to format each pet into a string
    function createPetItem(petsArr) {
        return petsArr.map(pet => {
            const adoptionStatus = pet.adopted ? " | Adopted!" : "";
            return `${pet.name} | ${pet.species} | ${pet.age} ${adoptionStatus}`;
        }).join('\n');
    }
  } 

  calculateUniqueAdoptionFee() {
    let pet_names = [];
  
    // If one argument is passed and it's a string, treat it as the pet name
    if (arguments.length === 1 && typeof arguments[0] === 'string') {
      pet_names[0] = arguments[0];
    } else {
      // If multiple arguments are passed, store them as an array
      pet_names = [...arguments];
    }
  
    // Find pets that match the names provided and accumulate adoption fees
    const returned_pets = this.pets.filter((pet) => {
      return pet_names.includes(pet.name)

    });
  
    // Calculate the total adoption fee for the specified pets
    return returned_pets.reduce((accumulator, pet) => {
      return accumulator + pet.adoptionFee; // Sum the adoption fees
    }, 0); // Initial adoption fee is 0
  }
 
}

//Extend Array Functionality
// Extend the Array prototype to add PetHandler's member functions
Array.prototype.findPetsInAgeRange = function (minAge, maxAge) {
  const petHandler = new PetHandler(this); // Use the array as the pets
  return petHandler.findPetsInAgeRange(minAge, maxAge); // Return the filtered pets array
};

Array.prototype.listPets = function () {
  const petHandler = new PetHandler(this); // Use the array as the pets
  return petHandler.listPets(); // Return the list of formatted pet strings
};



//#####################################################################
//  Test our PetHandler
//#####################################################################

const petHandler = new PetHandler(pets);
// console.log("filterByAge: " + petHandler.findPetsInAgeRange(3,4));
// console.log("sortByDate: " + petHandler.listAdoptedPetsByDate());
// console.log("list: " + petHandler.listPets());
// console.log("calculateUniqueAdoptionFee: " + petHandler.calculateUniqueAdoptionFee("Milo", "Coco", "Milo"))
console.log("filterByAge: " + petHandler.findPetsInAgeRange(3,4).listPets());
