import { ref } from "vue"

const getMeteorites = () => {
    const meteorites = ref([])

    const load = async () => {
        try {
            let data = await fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
            console.log( "D", data)
            meteorites.value = await data.json()
            console.log( "MI", meteorites.value )
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return { meteorites, load }
}

export default getMeteorites