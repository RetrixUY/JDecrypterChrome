(() => {
    const forms = document.querySelectorAll("form[action='http://127.0.0.1:9666/flash/addcrypted2']");

    forms.forEach((form) => {
        const cryptedInput = form.querySelector("input[name='crypted']");
        if (!cryptedInput) {
            return;
        }
        try {
            const jkInput = form.querySelector("input[name='jk']");
            const jkMatch = ((jkInput && jkInput.value) || "").match(/[0-9a-fA-F]{32}/);
            const key = CryptoJS.enc.Hex.parse(jkMatch ? jkMatch[0] : "00000000000000000000000000000000");
            const data = CryptoJS.AES.decrypt(cryptedInput.value, key, { iv: key }).toString(CryptoJS.enc.Utf8);

            const list = document.createElement('span');
            data.split(/\r\n|\r|\n/).forEach((line, index) => {
                if (index > 0) {
                    list.appendChild(document.createElement('br'));
                }
                list.appendChild(document.createTextNode(line));
            });
            form.replaceWith(list);
        } catch (error) {
            console.error("JDecrypter: error al descifrar el formulario", error);
        }
    });
})();
