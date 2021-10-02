import { ref } from "vue"

const getMeteorites = () => {
    const meteorites = ref([])

    const load = async () => {
        try {
            let data = await fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
            meteorites.value = await data.json()
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return { meteorites, load }
}

export default getMeteorites