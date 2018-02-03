<template>
    <div class="col-md-4" @click="switchCharacter">
        <div class="character-card">
            <div class="card-block">
                <h4 class="card-title">{{character.name}}</h4>
                <p class="card-text"><b>Height:</b> {{character.height}}</p>
                <p class="card-text"><b>Birth Year:</b> {{character.birth_year}}</p>
                <p class="card-text"><b>Mass:</b> {{character.mass}}kg</p>
                <p class="card-text"><b>Hair Color:</b> {{character.hair_color}}</p>
                <p class="card-text"><b>Eye Color:</b> {{character.eye_color}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            character: {}
        }
    },
    methods: {
        fetchCharacter(id){
            fetch(`https://swapi.co/api/people/${id}`, {
                method: 'GET',
            })
            .then(response => response.json())
            .then(json => this.character = json)
        },
        switchCharacter(){
            let randomID = Math.floor(Math.random() * 83) + 1;
            this.fetchCharacter(randomID);
        }
    },
    created(){
        this.fetchCharacter(this.id);
    }
}
</script>
