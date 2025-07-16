/**
 * Object Intersection
 */

type PrimitiveIntersection = string & number;

type PersonType = {
  name: string;
  age: number;
};

type CompanyType = {
  company: string;
  companyRegisterationNumber: string;
};

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
  name: "안유진",
  age: 23,
  company: "YG",
  companyRegisterationNumber: "1234567890",
};

type PetType = {
  petName: string;
  petAge: number;
};

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
  // PersonType
  name: "안유진",
  age: 23,
  // CompanyType
  company: "YG",
  companyRegisterationNumber: "1234567890",
  // PetType
  petName: "별이",
  petAge: 1,
};
