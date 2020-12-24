function checkName(input){
    let name = input.toLowerCase();
    let recipients = ['yjang','jake','jeffery', 'jeff','mom','jacob', 'gillian', 'sol', 'july', 'julixa', 'yoleth', 'nkosi', 'kosi', false]
    let rx = new RegExp(recipients.join('|').concat('/i'))
    let result = rx.test(name)
    return result;
}
function getImage(key){
    names = {
        'jeff': 'https://ik.imagekit.io/yjangwynter123/jeff1_AQRWM-e8V.jpg',
        'jeffery': 'https://ik.imagekit.io/yjangwynter123/jeff1_AQRWM-e8V.jpg',
        'jake':'https://ik.imagekit.io/yjangwynter123/jacob-hat_F8tjQoj2wA.jpg',
        'jacob':'https://ik.imagekit.io/yjangwynter123/jacob-hat_F8tjQoj2wA.jpg',
        'yjang': 'https://ik.imagekit.io/yjangwynter123/yjang_0DIZy7yLB.jpg',
        'nkosi': 'https://ik.imagekit.io/yjangwynter123/nkosi-hat_B8h36WhqU.jpg',
        'kosi': 'https://ik.imagekit.io/yjangwynter123/nkosi-hat_B8h36WhqU.jpg',
        'gillian': 'https://ik.imagekit.io/yjangwynter123/gillian-hat_ronbV4Wrk.jpg',
    }
    let image = document.getElementById('image');
    image.src = names[key]
    console.log(image);
}
function getName(name){
    let obj = document.getElementById('greeting');
    obj.textContent += name;
    return obj
}

let form = document.getElementById('name_check');
let input = document.getElementById('user_name')

form.addEventListener('submit', function(e){
   
    let name = input.value.toLowerCase();
    e.preventDefault();
    console.log(checkName(name))
    if (checkName(name) === true){
        let display_name = name.charAt(0).toUpperCase() + name.slice(1);
        //add visibility to the present
        document.getElementById('present').classList.remove('invisible');
        //remove the login form
        document.getElementById('login').remove();
        
        //Add user name
        getName(display_name);
        //Pull image
        getImage(name)
       

    } else{
        console.log('Failed')
        document.getElementById('error_text').textContent = "Sorry, not a valid recipient.";
    }
});