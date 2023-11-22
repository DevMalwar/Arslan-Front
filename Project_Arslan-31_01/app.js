document.addEventListener("DOMContentLoaded", async function() {
    const charactersContainer = document.getElementById("charactersContainer");
  
    const characters = [
      {
        "name": "Marcus Holloway",
        "age": 24,
        "avatar": "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fwatchdogs2%2Fwatch-dogs2-hero-marcus-holloway-3840x2160-270198625.jpg",
        "icon": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/719b7757-ea51-4a8d-b8cb-ffe474d27a8d/dabvaj6-5b228c1e-222a-4363-97f6-38ba945e7120.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxOWI3NzU3LWVhNTEtNGE4ZC1iOGNiLWZmZTQ3NGQyN2E4ZFwvZGFidmFqNi01YjIyOGMxZS0yMjJhLTQzNjMtOTdmNi0zOGJhOTQ1ZTcxMjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5umh52ceur9BNXl91S6yY_k-p8XrkRPcFFCgLA2ummg"
      },
      {
        "name": "DedSec Wrench",
        "age": 30,
        "avatar": "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fwatchdogs2%2Fwatch-dogs2-hero-wrench-3840x2160-270198972.jpg",
        "icon": "http://pm1.narvii.com/6293/2e31f10539db80bc51e6ca0cc7b8e90a1bad0c43_hq.jpg"
      },
      {
        "name": "Sitara Dhawan",
        "age": 28,
        "avatar": "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fwatchdogs2%2Fwatch-dogs2-hero-sitara-3840x2160-270199266.jpg",
        "icon": "https://www.wallpaperu3.com/wp-content/mywallpapers/sitara-dhawan-watch-dogs-2-wallpaper-4k-8k-400x240.jpg"
      },
      {
        "name": "Joshua Sauchak (Josh)",
        "age": 22,
        "avatar": "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fwatchdogs2%2Fwatch-dogs2-hero-josh-3840x2160-270198780.jpg",
        "icon": "https://i.pinimg.com/originals/a4/3c/72/a43c7277d737d73fcbfb665497860705.jpg"
      },
      {
        "name": "Horatio Carlin",
        "age": 35,
        "avatar": "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fwatchdogs2%2Fwatch-dogs2-hero-horatio-3840x2160-270198841.jpg",
        "icon": "http://static3.businessinsider.com/image/5835ab24e02ba79f028b5ee0-1440/screen%20shot%202016-11-23%20at%2094257%20am.png"
      }
    ];
  
    characters.forEach(character => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const name = document.createElement("p");
      name.textContent = `Name: ${character.name}`;
  
      const age = document.createElement("p");
      age.textContent = `Age: ${character.age}`;
  
      const avatar = document.createElement("img");
      avatar.src = character.avatar;
      avatar.alt = "";
  
      const icon = document.createElement("img");
      icon.src = character.icon;
      icon.alt = "";
  
      card.appendChild(name);
      card.appendChild(age);
      card.appendChild(avatar);
      card.appendChild(icon);
  
      charactersContainer.appendChild(card);
    });
  
    try {
      const response = await fetch("your_created_json_file.json");
      const jsonData = await response.json();
  
      console.log("Data from JSON file:", jsonData);
    } catch (error) {
      console.error("Error fetching JSON file:", error);
    }
  });
