import { slugify } from '$lib/utils.js';

export async function load({params}){
    // Get all squadmembers
    const res = await fetch("https://fdnd.directus.app/items/person?fields=*&filter[squads][squad_id][cohort][_eq]=2627");
    const data = await res.json();

    // Find the correct person based on the slug
    // 1.   Use the find function, this will return the first element in 
    //      the array that matches
    // 2.   Use the slugify util to slugify the name of the person 
    //      for the condition
    // 3.   Write the condition to compare the url with the slugified name
    const person = data.data.find((p) => slugify(p.name) === params.slug);

    // We return only person since we already 
    // unpacked the data in our find function
    return {
        person
    };
}