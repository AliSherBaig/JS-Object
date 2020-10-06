let family = {
  name1: "john" + "<br/>",
  name2: "jack" + "<br/>",
  name3: "david" + "<br/>",
  john: {
    Son1: "<br/>" + "chris" + "<br/>",
    Son2: "alex" + "<br/>",
    chris: {
      Son1: "ali" + "<br/>",
      Son2: "kareem" + "<br/>",
    },
    alex: {
      Son1: "john" + "<br/>",
      Son2: "alex" + "<br/>",
      Son3: "garret" + "<br/>",
      Son4: "wood" + "<br/>",
      Son5: "hales" + "<br/>",
      john: {
        son1: "ali" + "<br/>",
        son2: "jack" + "<br/>",
        ali: {
          son1: "suleiman" + "<br/>",
          son2: "usman" + "<br/>",
          son3: "salman" + "<br/>",
          son4: "javed" + "<br/>",
          suleiman: {
            son1: "kareem" + "<br/>",
            son2: "raheem" + "<br/>",
            raheem: {
              son1: "nadeem" + "<br/>",
              son2: "kaleem" + "<br/>",
              kaleem: {
                son1: "amir" + "<br/>",
                son2: "liaqat" + "<br/>",
              },
            },
          },
        },
      },
      wood: {
        son1: "chris" + "<br/>",
        son2: "roy" + "<br/>",
        son3: "max" + "<br/>",
        son4: "nova" + "<br/>",
        son5: "root" + "<br/>",
        son6: "mark" + "<br/>",
        max: {
          son1: "usman" + "<br/>",
          son2: "salman" + "<br/>",
          son3: "javed" + "<br/>",
          son4: "mark" + "<br/>",
          son5: "alex" + "<br/>",
        },
        mark: {
          son1: "morgan" + "<br/>",
          son2: "watson" + "<br/>",
        },
      },
    },
  },
  jack: {
    son1: "Kevin" + "<br/>",
    son2: "DerekWood" + "<br/>",
  },
  david: {
    son: "kegan" + "<br/>",
    kegan: {
      son: "alex" + "<br/>",
      alex: {
        son1: "jackma" + "<br/> ",
        son2: "bill" + "<br/>",
        jackma: {
          son1: "keven" + " <br/>",
          son2: "derek" + " <br/>",
          son3: "trump" + "<br/> ",
          son4: "obama" + "<br/> ",
          son5: "bush" + "<br/>",
        },
        bill: {
          son1: "robert" + "<br/>",
          son2: "john" + "<br/>",
        },
      },
    },
  },
};

function print(obj) {
  for (var key in obj) {
    if (typeof obj[key] != "object") {
      document.write(obj[key]);
    } else {
      print(obj[key]);
    }
  }
}

print("these are the family members <br>");
print(family);

document.write(
  `<br>These are suleiman's sons: <br>  <br> ${family.john.alex.john.ali.suleiman.son1}`
);
document.write(` ${family.john.alex.john.ali.suleiman.son2}`);

delete family.david.kegan.alex.jackma.son1;
delete family.david.kegan.alex.jackma.son5;

print("<br>these are the family members after removing jakma's two sons<br>");
print(family);

family.jack.son2 = "derek khan <br>";
family.david.kegan.alex.jackma.son3 = "donald trump <br>";

print("After changing two names:<br>");
print(family);
