const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)
function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)
    
    if(dayExists){
        
    }
    
    nlwSetup.addDay(today)
    
}

function save(){
    localStorage.setItem('FelipeBrito@Habits', JSON.stringify(nlwSetup.data))

}

const data = JSON.parse(localStorage.getItem("FelipeBrito@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()



/* const data = {
    run: ['01-01','01-02','01-06','01-07','01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15']

}
 */