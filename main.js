var forms = document.querySelectorAll("form[action='http://127.0.0.1:9666/flash/addcrypted2']");

forms.forEach((form) => {
    var crypted = form.querySelector("input[name='crypted']").value;
    var key = CryptoJS.enc.Hex.parse(eval(form.querySelector("input[name='jk']").value+"f();"));
    var code = CryptoJS.AES.decrypt(crypted,key,{iv: key});
    var data = code.toString(CryptoJS.enc.Utf8);//.trim().split('\n');
    const list = document.createElement('span');
    list.innerHTML = `${data.replace(/(?:\r\n|\r|\n)/g, '<br>')}`;
    /*
    data.forEach((d) =>{
        const link = document.createElement('li');
        link.innerHTML = "<a href='"+d.toString().trim()+"'>"+d+"</a>";
        list.appendChild(link);
    });*/
    form.parentNode.replaceChild(list,form);
});