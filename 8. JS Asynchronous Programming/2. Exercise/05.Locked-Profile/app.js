async function lockedProfile() {
    const mainContainer = document.getElementById("main");
    mainContainer.innerHTML = ""; // изчистваме темплейта от HTML файла

    const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
    const profiles = await response.json();

    let index = 0;
    for (const profile of Object.values(profiles)) {
        index++;

        const profileDiv = document.createElement("div");
        profileDiv.classList.add("profile");

        // ICON
        const img = document.createElement("img");
        img.src = "./iconProfile2.png";
        img.classList.add("userIcon");
        profileDiv.appendChild(img);

        // LOCK
        const lockLabel = document.createElement("label");
        lockLabel.textContent = "Lock";
        profileDiv.appendChild(lockLabel);

        const lockRadio = document.createElement("input");
        lockRadio.type = "radio";
        lockRadio.name = `user${index}Locked`;
        lockRadio.value = "lock";
        lockRadio.checked = true;
        profileDiv.appendChild(lockRadio);

        // UNLOCK
        const unlockLabel = document.createElement("label");
        unlockLabel.textContent = "Unlock";
        profileDiv.appendChild(unlockLabel);

        const unlockRadio = document.createElement("input");
        unlockRadio.type = "radio";
        unlockRadio.name = `user${index}Locked`;
        unlockRadio.value = "unlock";
        profileDiv.appendChild(unlockRadio);

        profileDiv.appendChild(document.createElement("hr"));

        // USERNAME
        const usernameLabel = document.createElement("label");
        usernameLabel.textContent = "Username";
        profileDiv.appendChild(usernameLabel);

        const usernameInput = document.createElement("input");
        usernameInput.type = "text";
        usernameInput.value = profile.username;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
        profileDiv.appendChild(usernameInput);

        // HIDDEN FIELDS
        const hiddenDiv = document.createElement("div");
        hiddenDiv.style.display = "none";

        hiddenDiv.appendChild(document.createElement("hr"));

        const emailLabel = document.createElement("label");
        emailLabel.textContent = "Email:";
        hiddenDiv.appendChild(emailLabel);

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.value = profile.email;
        emailInput.disabled = true;
        emailInput.readOnly = true;
        hiddenDiv.appendChild(emailInput);

        const ageLabel = document.createElement("label");
        ageLabel.textContent = "Age:";
        hiddenDiv.appendChild(ageLabel);

        const ageInput = document.createElement("input");
        ageInput.type = "number";
        ageInput.value = profile.age;
        ageInput.disabled = true;
        ageInput.readOnly = true;
        hiddenDiv.appendChild(ageInput);

        profileDiv.appendChild(hiddenDiv);

        // BUTTON
        const button = document.createElement("button");
        button.textContent = "Show more";
        profileDiv.appendChild(button);

        // LOGIC
        button.addEventListener("click", () => {
            if (lockRadio.checked) return; // профилът е заключен → нищо не правим

            if (hiddenDiv.style.display === "none") {
                hiddenDiv.style.display = "block";
                button.textContent = "Hide it";
            } else {
                hiddenDiv.style.display = "none";
                button.textContent = "Show more";
            }
        });

        mainContainer.appendChild(profileDiv);
    }
}
