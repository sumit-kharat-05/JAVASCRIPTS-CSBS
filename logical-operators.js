//Logical Operators//

{
  let name = "SUMIT";
  let age = 20;
  let login = false;
  let data = "";

  //Logical AND//
  if (name == "SUMIT" && age == 20) {
    console.log("You Can Continue");
  }

  //Logical OR//

  if (name == "SUMIT" || age == 21) {
    console.log("You Can Continue");
  }

  //Logical NOT//
  if (!login) {
    console.log("Please Login");
  }

  //Logical Nullish//
  data = data ?? name;
  console.log(data);

  //Logical AND Assignment//

  name &&= age;
  console.log(name);

  //Logical OR Assignment//

  name ||= age;
  console.log(name);

  //Nullish//

  data ??= name;
  console.log(data);
}
