<script lang="ts">
const currentDate = new Date()
const currentHour = currentDate.getHours()

let greeting = ""
if(currentHour< 12){
greeting = 'Buenos Días'
}else if(currentDate < 18){
    greeting = 'Buenas tardes'
}else{
    greeting = 'Buenas noches'
}

</script>

<h1 class="text-3xl font-bold" >{greeting}</h1>