window.onload = function(){
    animateSkills()
}



function animateSkills(){
    var skills = document.querySelectorAll('.skills')
    skills.forEach(function(skill){

        var endValue = parseInt(skill.textContent)
        var duration = 3000;
        var increment = endValue /(duration / 10)
        var current = 0;

        var timer = setInterval(function(){
                if(current >= endValue){
                    clearInterval(timer)
                }else{
                    current += increment
                    skill.textContent = Math.round(current) +"%"
                }
        },10)
    })

}   