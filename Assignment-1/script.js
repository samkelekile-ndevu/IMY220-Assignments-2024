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
  constructor(array){
    this.pets = array;
  }

  findPetsInAgeRange(minAge, maxAge){
    if(Number.isNaN(minAge) || Number.isInteger(maxAge)){
      return this.pets;
    }
    else{
      var filtered_pets = [];
      this.pets.filter((pet)=>{
        //Add only pets within age range (inclusive)
        if(pet.age >= minAge && pet.age <= maxAge){
          filtered_pets.push(pet);
        }
      });

      return filtered_pets;
    }
  }
}

//Test
const petHandler = new PetHandler(pets);
console.log(petHandler.findPetsInAgeRange(3,4));