function skillsMember(){
        var member = {
        name: 'John',
        age: 30,
        skills: ['html', 'css', 'javascript'],
        showSkills: function(){
            this.skills.forEach(skill => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    }
    return member;
}